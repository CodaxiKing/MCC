interface WHMCSConfig {
  url: string;
  identifier: string;
  secret: string;
}

interface WHMCSLoginParams {
  email: string;
  password: string;
}

interface WHMCSRegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  cpfCnpj: string;
  password: string;
  marketingOptIn?: boolean;
}

interface ClientDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address1?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  phoneNumber?: string;
  credit?: string;
  status?: string;
}

interface ClientProduct {
  id: number;
  clientId: number;
  orderId: number;
  productId: number;
  domain: string;
  productName: string;
  status: string;
  registrationDate: string;
  nextDueDate: string;
  amount: string;
}

interface ClientInvoice {
  id: number;
  invoiceNum: string;
  userId: number;
  date: string;
  dueDate: string;
  total: string;
  status: string;
  paymentMethod?: string;
}

interface SupportTicket {
  id: number;
  tid: string;
  userId: number;
  subject: string;
  status: string;
  priority: string;
  department: string;
  lastReply: string;
}

export class WHMCSService {
  private config: WHMCSConfig | null = null;

  constructor() {
    this.loadConfig();
  }

  private loadConfig(): void {
    const url = process.env.WHMCS_URL;
    const identifier = process.env.WHMCS_API_IDENTIFIER;
    const secret = process.env.WHMCS_API_SECRET;

    if (url && identifier && secret) {
      this.config = { url, identifier, secret };
    }
  }

  isConfigured(): boolean {
    return this.config !== null;
  }

  private async makeRequest(action: string, params: Record<string, any>): Promise<any> {
    if (!this.config) {
      throw new Error('WHMCS não está configurado. Configure as variáveis de ambiente WHMCS_URL, WHMCS_API_IDENTIFIER e WHMCS_API_SECRET.');
    }

    const requestParams = {
      action,
      identifier: this.config.identifier,
      secret: this.config.secret,
      responsetype: 'json',
      ...params
    };

    const formBody = Object.keys(requestParams)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(requestParams[key as keyof typeof requestParams]))
      .join('&');

    try {
      const response = await globalThis.fetch(`${this.config.url}/includes/api.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      const data = await response.json();

      if (data.result === 'error') {
        throw new Error(data.message || 'Erro na API do WHMCS');
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Erro ao conectar com WHMCS');
    }
  }

  async validateLogin(params: WHMCSLoginParams): Promise<{ success: boolean; clientId?: number; redirectUrl?: string; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado. Entre em contato com o suporte.'
      };
    }

    try {
      const result = await this.makeRequest('ValidateLogin', {
        email: params.email,
        password2: params.password
      });

      if (result.result === 'success') {
        return {
          success: true,
          clientId: result.userid,
          redirectUrl: `${this.config!.url}/clientarea.php`
        };
      } else {
        return {
          success: false,
          message: 'E-mail ou senha incorretos.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao validar login'
      };
    }
  }

  async addClient(params: WHMCSRegisterParams): Promise<{ success: boolean; clientId?: number; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado. Entre em contato com o suporte.'
      };
    }

    try {
      const requestData: Record<string, any> = {
        firstname: params.firstName,
        lastname: params.lastName,
        email: params.email,
        password2: params.password,
        phonenumber: params.phone,
        address1: params.address1,
        city: params.city,
        state: params.state,
        postcode: params.postcode,
        country: params.country,
        clientip: '127.0.0.1',
        language: 'portuguese-br',
        customfields: `base64|${Buffer.from(JSON.stringify({ cpfcnpj: params.cpfCnpj })).toString('base64')}`
      };

      if (params.company) {
        requestData.companyname = params.company;
      }

      if (params.address2) {
        requestData.address2 = params.address2;
      }

      if (params.marketingOptIn !== undefined) {
        requestData.marketing_emails_opt_in = params.marketingOptIn;
      }

      const result = await this.makeRequest('AddClient', requestData);

      if (result.result === 'success') {
        return {
          success: true,
          clientId: result.clientid,
          message: 'Cliente cadastrado com sucesso!'
        };
      } else {
        return {
          success: false,
          message: result.message || 'Erro ao cadastrar cliente.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao cadastrar cliente'
      };
    }
  }

  async resetPassword(email: string): Promise<{ success: boolean; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado. Entre em contato com o suporte.'
      };
    }

    try {
      const result = await this.makeRequest('ResetPassword', {
        email: email
      });

      if (result.result === 'success') {
        return {
          success: true,
          message: 'E-mail de recuperação enviado com sucesso! Verifique sua caixa de entrada.'
        };
      } else {
        return {
          success: false,
          message: result.message || 'Não foi possível enviar o e-mail de recuperação.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao solicitar recuperação de senha'
      };
    }
  }

  getClientAreaUrl(): string {
    if (!this.config) {
      return '#';
    }
    return `${this.config.url}/clientarea.php`;
  }

  async getClientDetails(clientId: number): Promise<{ success: boolean; data?: ClientDetails; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado.'
      };
    }

    try {
      const result = await this.makeRequest('GetClientsDetails', {
        clientid: clientId,
        stats: true
      });

      if (result.result === 'success') {
        return {
          success: true,
          data: {
            id: result.client.id,
            firstName: result.client.firstname,
            lastName: result.client.lastname,
            email: result.client.email,
            address1: result.client.address1,
            city: result.client.city,
            state: result.client.state,
            postcode: result.client.postcode,
            country: result.client.country,
            phoneNumber: result.client.phonenumber,
            credit: result.client.credit,
            status: result.client.status
          }
        };
      } else {
        return {
          success: false,
          message: 'Erro ao buscar detalhes do cliente.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao buscar detalhes do cliente'
      };
    }
  }

  async getClientProducts(clientId: number): Promise<{ success: boolean; data?: ClientProduct[]; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado.'
      };
    }

    try {
      const result = await this.makeRequest('GetClientsProducts', {
        clientid: clientId
      });

      if (result.result === 'success') {
        const products: ClientProduct[] = (result.products?.product || []).map((p: any) => ({
          id: parseInt(p.id),
          clientId: parseInt(p.clientid),
          orderId: parseInt(p.orderid),
          productId: parseInt(p.pid),
          domain: p.domain,
          productName: p.name || p.groupname,
          status: p.status,
          registrationDate: p.regdate,
          nextDueDate: p.nextduedate,
          amount: p.amount
        }));

        return {
          success: true,
          data: products
        };
      } else {
        return {
          success: false,
          message: 'Erro ao buscar produtos do cliente.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao buscar produtos do cliente'
      };
    }
  }

  async getClientInvoices(clientId: number): Promise<{ success: boolean; data?: ClientInvoice[]; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado.'
      };
    }

    try {
      const result = await this.makeRequest('GetInvoices', {
        userid: clientId,
        limitnum: 10
      });

      if (result.result === 'success') {
        const invoices: ClientInvoice[] = (result.invoices?.invoice || []).map((inv: any) => ({
          id: parseInt(inv.id),
          invoiceNum: inv.invoicenum,
          userId: parseInt(inv.userid),
          date: inv.date,
          dueDate: inv.duedate,
          total: inv.total,
          status: inv.status,
          paymentMethod: inv.paymentmethod
        }));

        return {
          success: true,
          data: invoices
        };
      } else {
        return {
          success: false,
          message: 'Erro ao buscar faturas do cliente.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao buscar faturas do cliente'
      };
    }
  }

  async getSupportTickets(clientId: number): Promise<{ success: boolean; data?: SupportTicket[]; message?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        message: 'WHMCS não configurado.'
      };
    }

    try {
      const result = await this.makeRequest('GetTickets', {
        clientid: clientId,
        limitnum: 10
      });

      if (result.result === 'success') {
        const tickets: SupportTicket[] = (result.tickets?.ticket || []).map((t: any) => ({
          id: parseInt(t.id),
          tid: t.tid,
          userId: parseInt(t.userid),
          subject: t.subject,
          status: t.status,
          priority: t.priority,
          department: t.department,
          lastReply: t.lastreply
        }));

        return {
          success: true,
          data: tickets
        };
      } else {
        return {
          success: false,
          message: 'Erro ao buscar tickets do cliente.'
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro ao buscar tickets do cliente'
      };
    }
  }
}

export const whmcsService = new WHMCSService();
