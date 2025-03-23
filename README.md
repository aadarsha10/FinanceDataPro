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

This project is configured for deployment on Vercel. The `vercel.json` file includes the necessary configuration for deploying both the frontend and backend components.

### Steps to deploy on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a [Vercel account](https://vercel.com/signup)
3. Import your Git repository
4. Vercel will automatically detect the configuration and deploy your application
5. If you need to set environment variables, you can do so in the Vercel dashboard

### Notes:

- The backend API is served from the `/api` path
- The frontend is served from the root path
- Make sure to set up any required environment variables in the Vercel dashboard

## License

MIT