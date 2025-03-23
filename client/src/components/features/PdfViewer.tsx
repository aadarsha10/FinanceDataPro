import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expand, ChevronLeft, ChevronRight } from "lucide-react";

// Import PDF worker initialization before using react-pdf
import "@/lib/pdfjs-worker";

interface PdfViewerProps {
  url: string | null;
  className?: string;
}

const PdfViewer = ({ url, className = "" }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const goToPrevPage = () => {
    setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => (prev >= (numPages || 1) ? numPages || 1 : prev + 1));
  };

  if (!url) {
    return (
      <div className={`rounded-lg border border-neutral-200 flex items-center justify-center ${className} min-h-[400px] bg-neutral-50`}>
        <div className="text-center p-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="mt-4 text-neutral-600">No document selected</p>
        </div>
      </div>
    );
  }

  return (
    <Card className={className} ref={containerRef}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Document Preview</CardTitle>
        <Button variant="ghost" size="sm" onClick={toggleFullScreen}>
          <Expand className="h-4 w-4" />
          <span className="ml-2 hidden md:inline">Full Screen</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="pdf-container bg-neutral-50 min-h-[400px] rounded-md flex flex-col items-center justify-center">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              </div>
            }
            error={
              <div className="text-center p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <ChevronLeft className="h-6 w-6 text-red-600" />
                </div>
                <p className="mt-4 text-neutral-600">Failed to load PDF document</p>
              </div>
            }
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={isFullScreen ? 800 : 400}
            />
          </Document>
          
          {numPages && numPages > 1 && (
            <div className="flex items-center justify-center space-x-4 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-neutral-600">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PdfViewer;
