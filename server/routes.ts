import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { whmcsService } from "./whmcs";
import { instatusService } from "./instatus";

const isAuthenticated = (req: any, res: any, next: any) => {
  if (req.session && req.session.clientId) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: "Não autorizado. Faça login primeiro."
    });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/whmcs/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ 
          success: false,
          message: "E-mail e senha são obrigatórios." 
        });
      }

      const result = await whmcsService.validateLogin({ email, password });

      if (result.success && result.clientId) {
        (req as any).session.clientId = result.clientId;
        return res.json({
          success: true,
          clientId: result.clientId,
          message: "Login realizado com sucesso!"
        });
      } else {
        return res.status(401).json({
          success: false,
          message: result.message || "Credenciais inválidas."
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro interno do servidor."
      });
    }
  });

  app.post("/api/whmcs/register", async (req, res) => {
    try {
      const { 
        firstName, 
        lastName, 
        email, 
        phone,
        company,
        address1,
        address2,
        city,
        state,
        postcode,
        country,
        cpfCnpj,
        password,
        marketingOptIn
      } = req.body;

      if (!firstName || !lastName || !email || !phone || !address1 || !city || !state || !postcode || !country || !cpfCnpj || !password) {
        return res.status(400).json({
          success: false,
          message: "Todos os campos obrigatórios devem ser preenchidos."
        });
      }

      const result = await whmcsService.addClient({
        firstName,
        lastName,
        email,
        phone,
        company,
        address1,
        address2,
        city,
        state,
        postcode,
        country,
        cpfCnpj,
        password,
        marketingOptIn
      });

      if (result.success) {
        return res.json({
          success: true,
          clientId: result.clientId,
          message: result.message || "Cadastro realizado com sucesso!"
        });
      } else {
        return res.status(400).json({
          success: false,
          message: result.message || "Erro ao realizar cadastro."
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro interno do servidor."
      });
    }
  });

  app.post("/api/whmcs/reset-password", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          success: false,
          message: "E-mail é obrigatório." 
        });
      }

      const result = await whmcsService.resetPassword(email);

      if (!result.success) {
        console.error(`Password reset failed for email: ${email}. Error: ${result.message}`);
      }

      return res.json({
        success: true,
        message: "Se o e-mail informado estiver cadastrado, você receberá instruções de recuperação de senha."
      });
    } catch (error) {
      console.error('Password reset error:', error);
      return res.json({
        success: true,
        message: "Se o e-mail informado estiver cadastrado, você receberá instruções de recuperação de senha."
      });
    }
  });

  app.get("/api/whmcs/status", async (req, res) => {
    return res.json({
      configured: whmcsService.isConfigured(),
      message: whmcsService.isConfigured() 
        ? "WHMCS configurado e pronto para uso." 
        : "WHMCS não configurado. Configure as variáveis de ambiente."
    });
  });

  app.get("/api/instatus/config", async (req, res) => {
    return res.json({
      configured: instatusService.isConfigured(),
      pageId: instatusService.getPageId(),
      statusPageUrl: instatusService.getStatusPageUrl()
    });
  });

  app.post("/api/whmcs/logout", (req, res) => {
    (req as any).session.destroy((err: any) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Erro ao fazer logout."
        });
      }
      res.json({
        success: true,
        message: "Logout realizado com sucesso."
      });
    });
  });

  app.get("/api/whmcs/dashboard/details", isAuthenticated, async (req, res) => {
    try {
      const clientId = (req as any).session.clientId;
      const result = await whmcsService.getClientDetails(clientId);

      if (result.success) {
        return res.json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar detalhes do cliente."
      });
    }
  });

  app.get("/api/whmcs/dashboard/products", isAuthenticated, async (req, res) => {
    try {
      const clientId = (req as any).session.clientId;
      const result = await whmcsService.getClientProducts(clientId);

      if (result.success) {
        return res.json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar produtos do cliente."
      });
    }
  });

  app.get("/api/whmcs/dashboard/invoices", isAuthenticated, async (req, res) => {
    try {
      const clientId = (req as any).session.clientId;
      const result = await whmcsService.getClientInvoices(clientId);

      if (result.success) {
        return res.json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar faturas do cliente."
      });
    }
  });

  app.get("/api/whmcs/dashboard/tickets", isAuthenticated, async (req, res) => {
    try {
      const clientId = (req as any).session.clientId;
      const result = await whmcsService.getSupportTickets(clientId);

      if (result.success) {
        return res.json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar tickets de suporte."
      });
    }
  });

  app.get("/api/whmcs/check-session", (req, res) => {
    if ((req as any).session && (req as any).session.clientId) {
      return res.json({
        authenticated: true,
        clientId: (req as any).session.clientId
      });
    } else {
      return res.json({
        authenticated: false
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
