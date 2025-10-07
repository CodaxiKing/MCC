import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Server, 
  FileText, 
  MessageSquare, 
  LogOut, 
  User,
  Package,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

interface ClientDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  phoneNumber?: string;
  status?: string;
}

interface ClientProduct {
  id: number;
  domain: string;
  productName: string;
  status: string;
  nextDueDate: string;
  amount: string;
}

interface ClientInvoice {
  id: number;
  invoiceNum: string;
  date: string;
  dueDate: string;
  total: string;
  status: string;
}

interface SupportTicket {
  id: number;
  tid: string;
  subject: string;
  status: string;
  priority: string;
  department: string;
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(null);
  const [products, setProducts] = useState<ClientProduct[]>([]);
  const [invoices, setInvoices] = useState<ClientInvoice[]>([]);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthAndLoadData();
  }, []);

  const checkAuthAndLoadData = async () => {
    try {
      const sessionResponse = await fetch('/api/whmcs/check-session');
      const sessionData = await sessionResponse.json();

      if (!sessionData.authenticated) {
        setLocation('/area-cliente');
        return;
      }

      await Promise.all([
        loadClientDetails(),
        loadProducts(),
        loadInvoices(),
        loadTickets()
      ]);
    } catch (error) {
      console.error('Error checking auth:', error);
      setLocation('/area-cliente');
    } finally {
      setIsLoading(false);
    }
  };

  const loadClientDetails = async () => {
    try {
      const response = await fetch('/api/whmcs/dashboard/details');
      const data = await response.json();
      if (data.success && data.data) {
        setClientDetails(data.data);
      }
    } catch (error) {
      console.error('Error loading client details:', error);
    }
  };

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/whmcs/dashboard/products');
      const data = await response.json();
      if (data.success && data.data) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const loadInvoices = async () => {
    try {
      const response = await fetch('/api/whmcs/dashboard/invoices');
      const data = await response.json();
      if (data.success && data.data) {
        setInvoices(data.data);
      }
    } catch (error) {
      console.error('Error loading invoices:', error);
    }
  };

  const loadTickets = async () => {
    try {
      const response = await fetch('/api/whmcs/dashboard/tickets');
      const data = await response.json();
      if (data.success && data.data) {
        setTickets(data.data);
      }
    } catch (error) {
      console.error('Error loading tickets:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/whmcs/logout', {
        method: 'POST'
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: "Logout realizado",
          description: "Até breve!",
        });
        setLocation('/area-cliente');
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer logout",
        description: "Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const getStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'active' || statusLower === 'paid') {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    } else if (statusLower === 'unpaid' || statusLower === 'cancelled' || statusLower === 'suspended') {
      return <XCircle className="h-4 w-4 text-red-500" />;
    } else {
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'active' || statusLower === 'paid') {
      return 'text-green-600 bg-green-50 border-green-200';
    } else if (statusLower === 'unpaid' || statusLower === 'cancelled' || statusLower === 'suspended') {
      return 'text-red-600 bg-red-50 border-red-200';
    } else {
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
          <p className="text-lg text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="flex">
        <aside className="w-72 min-h-screen bg-white border-r border-gray-200 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-display font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              MCC HOSTING
            </h2>
          </div>

          {clientDetails && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  {clientDetails.firstName?.[0] || ''}{clientDetails.lastName?.[0] || ''}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{clientDetails.firstName} {clientDetails.lastName}</p>
                  <p className="text-sm text-gray-500">{clientDetails.email}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Informações</p>
                {clientDetails.city && (
                  <p className="text-sm text-gray-600">{clientDetails.city}, {clientDetails.state || clientDetails.country}</p>
                )}
                {clientDetails.phoneNumber && (
                  <p className="text-sm text-gray-600">{clientDetails.phoneNumber}</p>
                )}
              </div>
            </div>
          )}

          <nav className="space-y-2 mb-8">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium">
              <Server className="h-5 w-5" />
              Área do Cliente
            </button>
          </nav>

          <Button 
            onClick={handleLogout}
            variant="outline" 
            className="w-full justify-start gap-3 border-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />
            Sair
          </Button>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-display font-black mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Olá, {clientDetails?.firstName}!
              </h1>
              <p className="text-gray-600">Bem-vindo à sua área do cliente</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    SERVIÇOS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-purple-600">{products.length}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {products.filter(p => p.status.toLowerCase() === 'active').length} ativos
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-100 hover:border-pink-300 transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    FATURAS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-pink-600">{invoices.length}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {invoices.filter(i => i.status.toLowerCase() === 'unpaid').length} pendentes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    SUPORTE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-orange-600">{tickets.length}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {tickets.filter(t => t.status.toLowerCase() === 'open').length} abertos
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display font-bold">
                    <Server className="h-5 w-5 text-purple-600" />
                    Produtos/Serviços
                  </CardTitle>
                  <CardDescription>
                    Seus serviços ativos e inativos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {products.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Package className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Você ainda não possui serviços contratados.</p>
                      <Button 
                        className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        onClick={() => setLocation('/')}
                      >
                        Ver Serviços
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {products.map((product) => (
                        <div key={product.id} className="flex items-start justify-between p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition-all">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {getStatusIcon(product.status)}
                              <h4 className="font-semibold text-gray-900">{product.productName}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{product.domain}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Próximo venc.: {new Date(product.nextDueDate).toLocaleDateString('pt-BR')}
                              </span>
                              <span className="flex items-center gap-1">
                                <CreditCard className="h-3 w-3" />
                                R$ {product.amount}
                              </span>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display font-bold">
                    <FileText className="h-5 w-5 text-pink-600" />
                    Faturas Recentes
                  </CardTitle>
                  <CardDescription>
                    Suas últimas faturas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {invoices.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Nenhuma fatura encontrada.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {invoices.slice(0, 5).map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-pink-200 transition-all">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {getStatusIcon(invoice.status)}
                              <h4 className="font-semibold text-gray-900">Fatura #{invoice.invoiceNum}</h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              Vencimento: {new Date(invoice.dueDate).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">R$ {invoice.total}</p>
                            <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {tickets.length > 0 && (
              <Card className="border-2 mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display font-bold">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                    Tickets de Suporte
                  </CardTitle>
                  <CardDescription>
                    Seus tickets abertos e resolvidos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tickets.map((ticket) => (
                      <div key={ticket.id} className="flex items-start justify-between p-4 rounded-lg border border-gray-200 hover:border-orange-200 transition-all">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {getStatusIcon(ticket.status)}
                            <h4 className="font-semibold text-gray-900">{ticket.subject}</h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Departamento: {ticket.department} • Prioridade: {ticket.priority}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
