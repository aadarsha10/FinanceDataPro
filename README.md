# FinDataPRO

A professional web-based platform for extracting structured data from financial PDFs with template management and export capabilities.

## Features

- PDF document upload and processing
- Template-based data extraction from financial documents
- Data validation and editing
- Export to CSV and Excel formats
- Comprehensive documentation and guides
- API for integration with other systems

## Technology Stack

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Express.js, TypeScript
- **Database**: In-memory storage (can be extended to PostgreSQL)
- **PDF Processing**: PDF.js
- **Data Export**: CSV-Writer, XLSX

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5000](http://localhost:5000) in your browser

## Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment to Vercel

This project is configured for separate frontend and backend deployments on Vercel to optimize performance and reliability.

### Frontend Deployment Steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a [Vercel account](https://vercel.com/signup)
3. Import your Git repository
4. Vercel will automatically detect the frontend configuration using the `vercel.json` file
5. Set the `VITE_API_URL` environment variable to point to your backend API URL once it's deployed

### Backend Deployment Steps:

After deploying the frontend, you can deploy the backend separately:

1. Create a new Vercel project specifically for the backend
2. Use the following configuration for the backend deployment:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Development Command: `npm run dev`
   - Root Directory: `.` (or specify `/server` if you're using a monorepo structure)
3. Add an environment variable `ALLOWED_ORIGINS` with the URL of your frontend deployment

### Vercel.json Configuration:

The current `vercel.json` file is configured for frontend deployment. For backend deployment, use a different configuration that focuses on API endpoints.

### Connecting Frontend to Backend:

1. After deploying both frontend and backend, set the `VITE_API_URL` environment variable in your frontend project's Vercel settings to point to your backend deployment URL
2. The application will automatically use this URL for all API requests

## License

MIT