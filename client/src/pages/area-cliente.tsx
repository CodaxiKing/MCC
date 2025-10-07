import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { LogIn, UserPlus, KeyRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AreaCliente() {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "",
    phone: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "Brazil",
    cpfCnpj: "",
    password: "",
    confirmPassword: "",
    marketingOptIn: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/whmcs/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para área do cliente...",
        });
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
      } else {
        toast({
          title: "Erro ao fazer login",
          description: data.message || "Verifique suas credenciais e tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description: "Não foi possível conectar ao servidor. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Erro no cadastro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    if (!registerData.cpfCnpj) {
      toast({
        title: "Erro no cadastro",
        description: "CPF/CNPJ é obrigatório.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/whmcs/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: registerData.firstName,
          lastName: registerData.lastName,
          email: registerData.email,
          phone: registerData.phone,
          company: registerData.company,
          address1: registerData.address1,
          address2: registerData.address2,
          city: registerData.city,
          state: registerData.state,
          postcode: registerData.postcode,
          country: registerData.country,
          cpfCnpj: registerData.cpfCnpj,
          password: registerData.password,
          marketingOptIn: registerData.marketingOptIn
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Você já pode fazer login com suas credenciais.",
        });
        setRegisterData({ 
          firstName: "", 
          lastName: "", 
          email: "",
          phone: "",
          company: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          postcode: "",
          country: "Brazil",
          cpfCnpj: "",
          password: "", 
          confirmPassword: "",
          marketingOptIn: false
        });
      } else {
        toast({
          title: "Erro ao cadastrar",
          description: data.message || "Não foi possível completar o cadastro. Tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description: "Não foi possível conectar ao servidor. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsResetLoading(true);

    try {
      const response = await fetch('/api/whmcs/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "E-mail enviado!",
          description: data.message || "Se o e-mail informado estiver cadastrado, você receberá instruções de recuperação.",
        });
        setResetEmail("");
        setIsResetDialogOpen(false);
      } else {
        toast({
          title: "Erro ao enviar e-mail",
          description: data.message || "Não foi possível enviar o e-mail de recuperação.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description: "Não foi possível conectar ao servidor. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              ÁREA DO CLIENTE
            </h1>
            <p className="text-xl text-gray-600">
              Acesse ou crie sua conta para gerenciar seus serviços
            </p>
          </div>

          <Tabs defaultValue="login" className="max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="text-lg font-bold">
                <LogIn className="mr-2 h-5 w-5" />
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="text-lg font-bold">
                <UserPlus className="mr-2 h-5 w-5" />
                Registrar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-black">
                    Faça Login
                  </CardTitle>
                  <CardDescription>
                    Entre com suas credenciais para acessar sua área do cliente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">E-mail</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Senha</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold uppercase shadow-lg hover:shadow-xl transition-all"
                      disabled={isLoading}
                    >
                      {isLoading ? "Entrando..." : "Entrar"}
                    </Button>
                    
                    <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          type="button" 
                          variant="ghost" 
                          className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                          disabled={isResetLoading}
                        >
                          <KeyRound className="mr-2 h-4 w-4" />
                          Esqueci minha senha
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display font-black">
                            Recuperar Senha
                          </DialogTitle>
                          <DialogDescription>
                            Digite seu e-mail para receber instruções de recuperação de senha.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleResetPassword} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="reset-email">E-mail</Label>
                            <Input
                              id="reset-email"
                              type="email"
                              placeholder="seu@email.com"
                              value={resetEmail}
                              onChange={(e) => setResetEmail(e.target.value)}
                              required
                              disabled={isResetLoading}
                            />
                          </div>
                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setIsResetDialogOpen(false);
                                setResetEmail("");
                              }}
                              className="flex-1"
                              disabled={isResetLoading}
                            >
                              Cancelar
                            </Button>
                            <Button 
                              type="submit" 
                              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
                              disabled={isResetLoading}
                            >
                              {isResetLoading ? "Enviando..." : "Enviar E-mail"}
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-black">
                    Criar Conta
                  </CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo para criar sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Informação pessoal</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nome</Label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="João"
                            value={registerData.firstName}
                            onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                            required
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Sobrenome</Label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Silva"
                            value={registerData.lastName}
                            onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                            required
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="register-email">E-mail</Label>
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="seu@email.com"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            required
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <div className="flex gap-2">
                            <div className="w-20">
                              <Input
                                value="+55"
                                disabled
                                className="text-center"
                              />
                            </div>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(11) 99999-9999"
                              value={registerData.phone}
                              onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                              required
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Endereço de cobrança</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa (opcional)</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Nome da empresa"
                            value={registerData.company}
                            onChange={(e) => setRegisterData({ ...registerData, company: e.target.value })}
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address1">Endereço</Label>
                          <Input
                            id="address1"
                            type="text"
                            placeholder="Rua, número"
                            value={registerData.address1}
                            onChange={(e) => setRegisterData({ ...registerData, address1: e.target.value })}
                            required
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address2">Endereço 2</Label>
                          <Input
                            id="address2"
                            type="text"
                            placeholder="Complemento, apartamento, etc."
                            value={registerData.address2}
                            onChange={(e) => setRegisterData({ ...registerData, address2: e.target.value })}
                            disabled={isLoading}
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">Cidade</Label>
                            <Input
                              id="city"
                              type="text"
                              placeholder="Cidade"
                              value={registerData.city}
                              onChange={(e) => setRegisterData({ ...registerData, city: e.target.value })}
                              required
                              disabled={isLoading}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">Estado</Label>
                            <Input
                              id="state"
                              type="text"
                              placeholder="SP"
                              value={registerData.state}
                              onChange={(e) => setRegisterData({ ...registerData, state: e.target.value })}
                              required
                              disabled={isLoading}
                              maxLength={2}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="postcode">CEP</Label>
                            <Input
                              id="postcode"
                              type="text"
                              placeholder="12345-678"
                              value={registerData.postcode}
                              onChange={(e) => setRegisterData({ ...registerData, postcode: e.target.value })}
                              required
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">País</Label>
                          <Input
                            id="country"
                            type="text"
                            value={registerData.country}
                            disabled
                            className="bg-gray-50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Informações adicionais</h3>
                      <p className="text-xs text-gray-500 mb-4">(required fields are marked with *)</p>
                      <div className="space-y-2">
                        <Label htmlFor="cpfCnpj">CPF/CNPJ *</Label>
                        <Input
                          id="cpfCnpj"
                          type="text"
                          placeholder="000.000.000-00"
                          value={registerData.cpfCnpj}
                          onChange={(e) => setRegisterData({ ...registerData, cpfCnpj: e.target.value })}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Segurança da conta</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Senha</Label>
                          <Input
                            id="register-password"
                            type="password"
                            placeholder="••••••••"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            required
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirmar Senha</Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="••••••••"
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                            required
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Junte-se à nossa lista de endereços</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Gostaríamos de manter você atualizado com promoções exclusivas, novidades e informações por e-mail. 
                        Para receber nossas comunicações, marque a caixa abaixo. Você pode se descadastrar a qualquer momento.
                      </p>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="marketingOptIn"
                          checked={registerData.marketingOptIn}
                          onCheckedChange={(checked) => 
                            setRegisterData({ ...registerData, marketingOptIn: checked as boolean })
                          }
                          disabled={isLoading}
                        />
                        <Label 
                          htmlFor="marketingOptIn" 
                          className="text-sm font-normal cursor-pointer"
                        >
                          Sim
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold uppercase shadow-lg hover:shadow-xl transition-all"
                      disabled={isLoading}
                    >
                      {isLoading ? "Criando conta..." : "Criar Conta"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center text-sm text-gray-600">
            <p>
              Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
