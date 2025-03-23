import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { insertTemplateSchema, insertFeatureRequestSchema } from "@shared/schema";
import * as pdfjs from "pdfjs-dist";
import { createObjectCsvWriter } from "csv-writer";
import { utils, write } from "xlsx";

// Configure pdfjs worker
const __dirname = dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, "../uploads");

// Create uploads directory if it doesn't exist
async function ensureUploadDir() {
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  } catch (error) {
    console.error("Failed to create uploads directory:", error);
  }
}

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
      const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniquePrefix + "-" + file.originalname);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  await ensureUploadDir();
  
  // API Routes
  
  // Templates API
  app.get("/api/templates", async (req: Request, res: Response) => {
    try {
      const templates = await storage.getTemplates();
      res.json(templates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch templates" });
    }
  });

  app.get("/api/templates/:id", async (req: Request, res: Response) => {
    try {
      const template = await storage.getTemplateById(Number(req.params.id));
      if (!template) {
        return res.status(404).json({ message: "Template not found" });
      }
      res.json(template);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch template" });
    }
  });

  app.post("/api/templates", async (req: Request, res: Response) => {
    try {
      const validatedData = insertTemplateSchema.parse(req.body);
      const template = await storage.createTemplate(validatedData);
      res.status(201).json(template);
    } catch (error) {
      res.status(400).json({ message: "Invalid template data", error });
    }
  });

  app.put("/api/templates/:id", async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const validatedData = insertTemplateSchema.partial().parse(req.body);
      const template = await storage.updateTemplate(id, validatedData);
      if (!template) {
        return res.status(404).json({ message: "Template not found" });
      }
      res.json(template);
    } catch (error) {
      res.status(400).json({ message: "Invalid template data", error });
    }
  });

  app.delete("/api/templates/:id", async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const success = await storage.deleteTemplate(id);
      if (!success) {
        return res.status(404).json({ message: "Template not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete template" });
    }
  });

  // Documents API
  app.get("/api/documents", async (req: Request, res: Response) => {
    try {
      const documents = await storage.getDocuments();
      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch documents" });
    }
  });

  app.get("/api/documents/:id", async (req: Request, res: Response) => {
    try {
      const document = await storage.getDocumentById(Number(req.params.id));
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.json(document);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch document" });
    }
  });

  // Upload PDF document
  app.post("/api/documents/upload", upload.single("file"), async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const { originalname, mimetype, size, filename } = req.file;
      const templateId = req.body.templateId ? Number(req.body.templateId) : null;

      // Create document record
      const document = await storage.createDocument({
        name: req.body.name || originalname,
        originalFilename: originalname,
        contentType: mimetype,
        size,
        userId: null,
        templateId
      });

      res.status(201).json({ 
        message: "File uploaded successfully", 
        document,
        filePath: `/api/documents/${document.id}/file`
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ message: "Failed to upload document" });
    }
  });

  // Serve PDF document
  app.get("/api/documents/:id/file", async (req: Request, res: Response) => {
    try {
      const document = await storage.getDocumentById(Number(req.params.id));
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }

      // Find the file in the uploads directory
      const files = await fs.readdir(UPLOAD_DIR);
      const file = files.find(f => f.endsWith(document.originalFilename));
      
      if (!file) {
        return res.status(404).json({ message: "File not found" });
      }

      const filePath = path.join(UPLOAD_DIR, file);
      res.setHeader("Content-Type", document.contentType);
      res.setHeader("Content-Disposition", `inline; filename="${document.originalFilename}"`);
      
      const fileStream = fs.readFile(filePath);
      res.send(await fileStream);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch document file" });
    }
  });

  // Process document with template
  app.post("/api/documents/:id/process", async (req: Request, res: Response) => {
    try {
      const documentId = Number(req.params.id);
      const templateId = Number(req.body.templateId);

      const document = await storage.getDocumentById(documentId);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }

      const template = await storage.getTemplateById(templateId);
      if (!template) {
        return res.status(404).json({ message: "Template not found" });
      }

      // Simulate PDF processing by creating sample extracted data
      const extractedData = await storage.createExtractedData({
        documentId,
        templateId,
        data: {
          accountNumber: "••••••3456",
          statementPeriod: "05/01/2023 - 05/31/2023",
          transactions: [
            { date: "05/02/2023", description: "GROCERY STORE", amount: -52.43 },
            { date: "05/05/2023", description: "DIRECT DEPOSIT", amount: 1250.00 },
            { date: "05/08/2023", description: "ONLINE SHOPPING", amount: -78.99 },
            { date: "05/12/2023", description: "TRANSFER", amount: -200.00 },
            { date: "05/15/2023", description: "RESTAURANT", amount: -42.75 }
          ]
        }
      });

      // Update document to mark as processed
      await storage.markDocumentAsProcessed(documentId);
      
      // Increment template usage count
      await storage.incrementTemplateUsage(templateId);

      res.json({ success: true, extractedData });
    } catch (error) {
      res.status(500).json({ message: "Failed to process document" });
    }
  });

  // Get extracted data for a document
  app.get("/api/documents/:id/data", async (req: Request, res: Response) => {
    try {
      const documentId = Number(req.params.id);
      
      const document = await storage.getDocumentById(documentId);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }

      const extractedData = await storage.getExtractedDataByDocumentId(documentId);
      if (!extractedData) {
        return res.status(404).json({ message: "No extracted data found for this document" });
      }

      res.json(extractedData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch extracted data" });
    }
  });

  // Update extracted data
  app.put("/api/extracted-data/:id", async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const extractedData = await storage.getExtractedDataByDocumentId(id);
      
      if (!extractedData) {
        return res.status(404).json({ message: "Extracted data not found" });
      }

      const updatedData = await storage.updateExtractedData(extractedData.id, {
        data: req.body.data
      });

      res.json(updatedData);
    } catch (error) {
      res.status(500).json({ message: "Failed to update extracted data" });
    }
  });

  // Export extracted data to CSV
  app.get("/api/documents/:id/export/csv", async (req: Request, res: Response) => {
    try {
      const documentId = Number(req.params.id);
      
      const extractedData = await storage.getExtractedDataByDocumentId(documentId);
      if (!extractedData) {
        return res.status(404).json({ message: "No extracted data found for this document" });
      }

      const document = await storage.getDocumentById(documentId);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }

      // Generate CSV from extracted data
      const tempCsvPath = path.join(UPLOAD_DIR, `export-${documentId}.csv`);
      const data = extractedData.data;
      
      let csvWriter;
      let csvData = [];
      
      // Handle different data structures (accounts, transactions, etc.)
      if (data.transactions && Array.isArray(data.transactions)) {
        // For transaction data
        csvWriter = createObjectCsvWriter({
          path: tempCsvPath,
          header: [
            { id: 'date', title: 'Date' },
            { id: 'description', title: 'Description' },
            { id: 'amount', title: 'Amount' }
          ]
        });
        csvData = data.transactions;
      } else {
        // For general data (no array structure)
        const headers = Object.keys(data).map(key => ({ id: key, title: key }));
        csvWriter = createObjectCsvWriter({
          path: tempCsvPath,
          header: headers
        });
        csvData = [data];
      }

      await csvWriter.writeRecords(csvData);

      // Send the CSV file
      const csvContent = await fs.readFile(tempCsvPath, 'utf8');
      res.setHeader('Content-Disposition', `attachment; filename="${document.name.replace(/\.[^/.]+$/, '')}.csv"`);
      res.setHeader('Content-Type', 'text/csv');
      res.send(csvContent);

      // Clean up temp file
      await fs.unlink(tempCsvPath);
    } catch (error) {
      res.status(500).json({ message: "Failed to export data" });
    }
  });

  // Export extracted data to Excel
  app.get("/api/documents/:id/export/excel", async (req: Request, res: Response) => {
    try {
      const documentId = Number(req.params.id);
      
      const extractedData = await storage.getExtractedDataByDocumentId(documentId);
      if (!extractedData) {
        return res.status(404).json({ message: "No extracted data found for this document" });
      }

      const document = await storage.getDocumentById(documentId);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }

      // Generate Excel from extracted data
      const tempXlsxPath = path.join(UPLOAD_DIR, `export-${documentId}.xlsx`);
      const data = extractedData.data;
      
      let worksheetData = [];
      
      // Handle different data structures
      if (data.transactions && Array.isArray(data.transactions)) {
        // For transaction data
        worksheetData = data.transactions;
      } else {
        // For general data (no array structure)
        worksheetData = [data];
      }

      // Create worksheet
      const worksheet = utils.json_to_sheet(worksheetData);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, 'Data');
      
      // Write to file
      await write(workbook, tempXlsxPath);

      // Send the Excel file
      const excelContent = await fs.readFile(tempXlsxPath);
      res.setHeader('Content-Disposition', `attachment; filename="${document.name.replace(/\.[^/.]+$/, '')}.xlsx"`);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.send(excelContent);

      // Clean up temp file
      await fs.unlink(tempXlsxPath);
    } catch (error) {
      res.status(500).json({ message: "Failed to export data" });
    }
  });

  // Feature requests API
  app.get("/api/feature-requests", async (req: Request, res: Response) => {
    try {
      const featureRequests = await storage.getFeatureRequests();
      res.json(featureRequests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch feature requests" });
    }
  });

  app.post("/api/feature-requests", async (req: Request, res: Response) => {
    try {
      const validatedData = insertFeatureRequestSchema.parse(req.body);
      const featureRequest = await storage.createFeatureRequest(validatedData);
      res.status(201).json(featureRequest);
    } catch (error) {
      res.status(400).json({ message: "Invalid feature request data", error });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
