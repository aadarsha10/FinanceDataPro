import { QueryClient, QueryFunction } from "@tanstack/react-query";

// API URL configuration for different environments
export const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' 
    ? 'https://yourapibackend.vercel.app' 
    : '');

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Helper to get full API URL
export function getApiUrl(path: string): string {
  // If path already starts with http or https, return as is
  if (path.startsWith('http')) return path;
  
  // If path already includes /api/ and we're in development, return as is
  if (path.startsWith('/api/') && import.meta.env.MODE !== 'production') return path;
  
  // If path already starts with /api/, just prepend the base URL
  if (path.startsWith('/api/')) return `${API_BASE_URL}${path}`;
  
  // Otherwise, ensure path has /api/ prefix
  const apiPath = path.startsWith('/') ? `/api${path}` : `/api/${path}`;
  return `${API_BASE_URL}${apiPath}`;
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const apiUrl = getApiUrl(url);
  
  const res = await fetch(apiUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey[0] as string;
    const apiUrl = getApiUrl(url);
    
    const res = await fetch(apiUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
