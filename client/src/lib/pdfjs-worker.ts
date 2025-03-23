// Set the worker path for PDF.js
import { pdfjs } from 'react-pdf';

// PDF.js worker from CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;