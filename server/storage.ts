import { 
  users, User, InsertUser, 
  templates, Template, InsertTemplate,
  documents, Document, InsertDocument,
  extractedData, ExtractedData, InsertExtractedData,
  featureRequests, FeatureRequest, InsertFeatureRequest
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Template operations
  getTemplates(): Promise<Template[]>;
  getTemplateById(id: number): Promise<Template | undefined>;
  createTemplate(template: InsertTemplate): Promise<Template>;
  updateTemplate(id: number, template: Partial<InsertTemplate>): Promise<Template | undefined>;
  deleteTemplate(id: number): Promise<boolean>;
  incrementTemplateUsage(id: number): Promise<Template | undefined>;

  // Document operations
  getDocuments(): Promise<Document[]>;
  getDocumentById(id: number): Promise<Document | undefined>;
  createDocument(document: InsertDocument): Promise<Document>;
  updateDocument(id: number, document: Partial<InsertDocument>): Promise<Document | undefined>;
  deleteDocument(id: number): Promise<boolean>;
  markDocumentAsProcessed(id: number): Promise<Document | undefined>;

  // Extracted data operations
  getExtractedDataByDocumentId(documentId: number): Promise<ExtractedData | undefined>;
  createExtractedData(data: InsertExtractedData): Promise<ExtractedData>;
  updateExtractedData(id: number, data: Partial<InsertExtractedData>): Promise<ExtractedData | undefined>;
  verifyExtractedData(id: number): Promise<ExtractedData | undefined>;

  // Feature request operations
  getFeatureRequests(): Promise<FeatureRequest[]>;
  createFeatureRequest(request: InsertFeatureRequest): Promise<FeatureRequest>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private templates: Map<number, Template>;
  private documents: Map<number, Document>;
  private extractedData: Map<number, ExtractedData>;
  private featureRequests: Map<number, FeatureRequest>;
  
  private userIdCounter: number;
  private templateIdCounter: number;
  private documentIdCounter: number;
  private extractedDataIdCounter: number;
  private featureRequestIdCounter: number;

  constructor() {
    this.users = new Map();
    this.templates = new Map();
    this.documents = new Map();
    this.extractedData = new Map();
    this.featureRequests = new Map();
    
    this.userIdCounter = 1;
    this.templateIdCounter = 1;
    this.documentIdCounter = 1;
    this.extractedDataIdCounter = 1;
    this.featureRequestIdCounter = 1;

    // Initialize with sample templates
    this.initSampleData();
  }

  private initSampleData() {
    // Add sample templates
    const sampleTemplates: InsertTemplate[] = [
      {
        name: "Chase Bank Statement",
        description: "Template for Chase Bank statements",
        documentType: "bank_statement",
        bankName: "Chase",
        fields: [
          { name: "accountNumber", label: "Account Number", type: "string" },
          { name: "statementPeriod", label: "Statement Period", type: "string" },
          { name: "transactions", label: "Transactions", type: "array", 
            fields: [
              { name: "date", label: "Date", type: "date" },
              { name: "description", label: "Description", type: "string" },
              { name: "amount", label: "Amount", type: "number" }
            ]
          }
        ],
        userId: null
      },
      {
        name: "Bank of America",
        description: "Template for Bank of America statements",
        documentType: "bank_statement",
        bankName: "Bank of America",
        fields: [
          { name: "accountNumber", label: "Account Number", type: "string" },
          { name: "statementPeriod", label: "Statement Period", type: "string" },
          { name: "transactions", label: "Transactions", type: "array", 
            fields: [
              { name: "date", label: "Date", type: "date" },
              { name: "description", label: "Description", type: "string" },
              { name: "amount", label: "Amount", type: "number" }
            ]
          }
        ],
        userId: null
      },
      {
        name: "Wells Fargo",
        description: "Template for Wells Fargo statements",
        documentType: "bank_statement",
        bankName: "Wells Fargo",
        fields: [
          { name: "accountNumber", label: "Account Number", type: "string" },
          { name: "statementPeriod", label: "Statement Period", type: "string" },
          { name: "transactions", label: "Transactions", type: "array", 
            fields: [
              { name: "date", label: "Date", type: "date" },
              { name: "description", label: "Description", type: "string" },
              { name: "amount", label: "Amount", type: "number" }
            ]
          }
        ],
        userId: null
      },
      {
        name: "Citibank",
        description: "Template for Citibank statements",
        documentType: "bank_statement",
        bankName: "Citibank",
        fields: [
          { name: "accountNumber", label: "Account Number", type: "string" },
          { name: "statementPeriod", label: "Statement Period", type: "string" },
          { name: "transactions", label: "Transactions", type: "array", 
            fields: [
              { name: "date", label: "Date", type: "date" },
              { name: "description", label: "Description", type: "string" },
              { name: "amount", label: "Amount", type: "number" }
            ]
          }
        ],
        userId: null
      }
    ];

    sampleTemplates.forEach(template => {
      this.createTemplate(template);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const newUser: User = { ...user, id };
    this.users.set(id, newUser);
    return newUser;
  }

  // Template operations
  async getTemplates(): Promise<Template[]> {
    return Array.from(this.templates.values()).sort((a, b) => b.usageCount - a.usageCount);
  }

  async getTemplateById(id: number): Promise<Template | undefined> {
    return this.templates.get(id);
  }

  async createTemplate(template: InsertTemplate): Promise<Template> {
    const id = this.templateIdCounter++;
    const now = new Date();
    
    // Create a properly typed template object
    const newTemplate: Template = {
      id,
      name: template.name,
      description: template.description || null,
      documentType: template.documentType, 
      bankName: template.bankName || null,
      fields: template.fields,
      userId: template.userId || null,
      createdAt: now,
      updatedAt: now,
      usageCount: 0
    };
    this.templates.set(id, newTemplate);
    return newTemplate;
  }

  async updateTemplate(id: number, template: Partial<InsertTemplate>): Promise<Template | undefined> {
    const existingTemplate = this.templates.get(id);
    if (!existingTemplate) return undefined;

    const updatedTemplate: Template = {
      ...existingTemplate,
      ...template,
      updatedAt: new Date()
    };
    this.templates.set(id, updatedTemplate);
    return updatedTemplate;
  }

  async deleteTemplate(id: number): Promise<boolean> {
    return this.templates.delete(id);
  }

  async incrementTemplateUsage(id: number): Promise<Template | undefined> {
    const template = this.templates.get(id);
    if (!template) return undefined;

    const updatedTemplate: Template = {
      ...template,
      usageCount: template.usageCount + 1,
      updatedAt: new Date()
    };
    this.templates.set(id, updatedTemplate);
    return updatedTemplate;
  }

  // Document operations
  async getDocuments(): Promise<Document[]> {
    return Array.from(this.documents.values()).sort((a, b) => {
      return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
    });
  }

  async getDocumentById(id: number): Promise<Document | undefined> {
    return this.documents.get(id);
  }

  async createDocument(document: InsertDocument): Promise<Document> {
    const id = this.documentIdCounter++;
    
    // Create the document with proper type handling
    const newDocument: Document = {
      id,
      name: document.name,
      originalFilename: document.originalFilename,
      contentType: document.contentType,
      size: document.size,
      storedFilename: document.storedFilename || null,
      uploadedAt: new Date(),
      processed: false,
      userId: document.userId || null,
      templateId: document.templateId || null
    };
    
    this.documents.set(id, newDocument);
    console.log("Created document with storedFilename:", newDocument.storedFilename);
    return newDocument;
  }

  async updateDocument(id: number, document: Partial<InsertDocument>): Promise<Document | undefined> {
    const existingDocument = this.documents.get(id);
    if (!existingDocument) return undefined;

    // Create a properly typed updated document
    const updatedDocument: Document = {
      ...existingDocument,
      name: document.name !== undefined ? document.name : existingDocument.name,
      originalFilename: document.originalFilename !== undefined ? document.originalFilename : existingDocument.originalFilename,
      contentType: document.contentType !== undefined ? document.contentType : existingDocument.contentType,
      size: document.size !== undefined ? document.size : existingDocument.size,
      storedFilename: document.storedFilename !== undefined ? document.storedFilename : existingDocument.storedFilename,
      userId: document.userId !== undefined ? document.userId || null : existingDocument.userId,
      templateId: document.templateId !== undefined ? document.templateId || null : existingDocument.templateId,
      // Keep these unchanged
      id: existingDocument.id,
      uploadedAt: existingDocument.uploadedAt,
      processed: existingDocument.processed
    };
    
    this.documents.set(id, updatedDocument);
    console.log("Updated document, storedFilename:", updatedDocument.storedFilename);
    return updatedDocument;
  }

  async deleteDocument(id: number): Promise<boolean> {
    return this.documents.delete(id);
  }

  async markDocumentAsProcessed(id: number): Promise<Document | undefined> {
    const document = this.documents.get(id);
    if (!document) return undefined;

    const updatedDocument: Document = {
      ...document,
      processed: true
    };
    this.documents.set(id, updatedDocument);
    return updatedDocument;
  }

  // Extracted data operations
  async getExtractedDataByDocumentId(documentId: number): Promise<ExtractedData | undefined> {
    return Array.from(this.extractedData.values()).find(data => data.documentId === documentId);
  }

  async createExtractedData(data: InsertExtractedData): Promise<ExtractedData> {
    const id = this.extractedDataIdCounter++;
    const newExtractedData: ExtractedData = {
      ...data,
      id,
      extractedAt: new Date(),
      verified: false
    };
    this.extractedData.set(id, newExtractedData);
    return newExtractedData;
  }

  async updateExtractedData(id: number, data: Partial<InsertExtractedData>): Promise<ExtractedData | undefined> {
    const existingExtractedData = this.extractedData.get(id);
    if (!existingExtractedData) return undefined;

    const updatedExtractedData: ExtractedData = {
      ...existingExtractedData,
      ...data
    };
    this.extractedData.set(id, updatedExtractedData);
    return updatedExtractedData;
  }

  async verifyExtractedData(id: number): Promise<ExtractedData | undefined> {
    const extractedData = this.extractedData.get(id);
    if (!extractedData) return undefined;

    const updatedExtractedData: ExtractedData = {
      ...extractedData,
      verified: true
    };
    this.extractedData.set(id, updatedExtractedData);
    return updatedExtractedData;
  }

  // Feature request operations
  async getFeatureRequests(): Promise<FeatureRequest[]> {
    return Array.from(this.featureRequests.values()).sort((a, b) => {
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    });
  }

  async createFeatureRequest(request: InsertFeatureRequest): Promise<FeatureRequest> {
    const id = this.featureRequestIdCounter++;
    
    // Create a properly typed feature request
    const newFeatureRequest: FeatureRequest = {
      id,
      title: request.title,
      description: request.description,
      category: request.category,
      priority: request.priority,
      userId: request.userId || null,
      status: "pending",
      submittedAt: new Date()
    };
    
    this.featureRequests.set(id, newFeatureRequest);
    return newFeatureRequest;
  }
}

export const storage = new MemStorage();
