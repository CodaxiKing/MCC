import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Clock, XCircle, Loader2, ExternalLink } from "lucide-react";
import { useInstatusStatus } from "@/hooks/useInstatusStatus";
import { Button } from "@/components/ui/button";

export default function StatusPage() {
  const [pageUrl, setPageUrl] = useState<string | null>(null);
  const { data, isLoading, error, statusColors, overallStatusColors } = useInstatusStatus(pageUrl);

  useEffect(() => {
    fetch('/api/instatus/config')
      .then(res => res.json())
      .then(config => {
        if (config.configured && config.statusPageUrl) {
          setPageUrl(config.statusPageUrl);
        }
      })
      .catch(err => console.error('Erro ao buscar configuração do Instatus:', err));
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'OPERATIONAL':
        return <CheckCircle2 className="h-6 w-6" />;
      case 'UNDERMAINTENANCE':
        return <Clock className="h-6 w-6" />;
      case 'DEGRADEDPERFORMANCE':
      case 'PARTIALOUTAGE':
        return <AlertCircle className="h-6 w-6" />;
      case 'MAJOROUTAGE':
        return <XCircle className="h-6 w-6" />;
      default:
        return <CheckCircle2 className="h-6 w-6" />;
    }
  };

  const getOverallIcon = (status: string) => {
    switch (status) {
      case 'UP':
        return <CheckCircle2 className="h-8 w-8" />;
      case 'HASISSUES':
        return <AlertCircle className="h-8 w-8" />;
      case 'UNDERMAINTENANCE':
        return <Clock className="h-8 w-8" />;
      default:
        return <CheckCircle2 className="h-8 w-8" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 min-h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-black">
              Status da <span className="text-[#FFC107]">Host</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Monitore o status em tempo real de todos os nossos serviços.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {isLoading && (
              <div className="flex items-center justify-center p-12">
                <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
              </div>
            )}

            {!isLoading && !data && (
              <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-800 mb-2">Instatus Não Configurado</h2>
                    <p className="text-yellow-700 mb-4">
                      A página de status ainda não foi configurada. Para configurar, adicione a variável de ambiente <code className="bg-yellow-200 px-2 py-1 rounded font-mono">INSTATUS_PAGE_ID</code> com o ID da sua página do Instatus.
                    </p>
                    <p className="text-yellow-700 mb-4">
                      <strong>Como obter o ID:</strong> O ID da sua página está na URL do Instatus. Por exemplo, se sua página é <code className="bg-yellow-200 px-2 py-1 rounded font-mono">meuservidor.instatus.com</code>, o ID é <code className="bg-yellow-200 px-2 py-1 rounded font-mono">meuservidor</code>.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-yellow-600 text-yellow-700 hover:bg-yellow-200"
                      onClick={() => window.open('https://instatus.com', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Saiba mais sobre Instatus
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {data && (
              <>
                <div className={`${overallStatusColors[data.page.status].bg} border-2 ${overallStatusColors[data.page.status].border} rounded-lg p-6 mb-8 flex items-center gap-4`}>
                  <div className={overallStatusColors[data.page.status].text}>
                    {getOverallIcon(data.page.status)}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${overallStatusColors[data.page.status].text}`}>
                      {overallStatusColors[data.page.status].label}
                    </h2>
                    <p className={overallStatusColors[data.page.status].text}>
                      {data.page.status === 'UP' && 'Todos os serviços estão funcionando normalmente.'}
                      {data.page.status === 'HASISSUES' && 'Alguns serviços estão enfrentando problemas.'}
                      {data.page.status === 'UNDERMAINTENANCE' && 'Manutenção programada em andamento.'}
                    </p>
                  </div>
                </div>

                {data.activeIncidents && data.activeIncidents.length > 0 && (
                  <div className="mb-8 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Incidentes Ativos</h3>
                    {data.activeIncidents.map((incident) => (
                      <Card key={incident.id} className="border-2 border-orange-300 bg-orange-50">
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <CardTitle className="text-xl text-orange-900 mb-2">{incident.name}</CardTitle>
                              <div className="text-sm text-orange-700">
                                <span className="font-semibold">Status:</span> {incident.status}
                                {incident.started && (
                                  <span className="ml-4">
                                    <span className="font-semibold">Iniciado:</span> {new Date(incident.started).toLocaleString('pt-BR')}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}

                {data.activeMaintenances && data.activeMaintenances.length > 0 && (
                  <div className="mb-8 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Manutenções Programadas</h3>
                    {data.activeMaintenances.map((maintenance) => (
                      <Card key={maintenance.id} className="border-2 border-blue-300 bg-blue-50">
                        <CardHeader>
                          <div className="flex items-start gap-3">
                            <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <CardTitle className="text-xl text-blue-900 mb-2">{maintenance.name}</CardTitle>
                              <div className="text-sm text-blue-700">
                                <span className="font-semibold">Status:</span> {maintenance.status}
                                {maintenance.start && (
                                  <span className="ml-4">
                                    <span className="font-semibold">Início:</span> {new Date(maintenance.start).toLocaleString('pt-BR')}
                                  </span>
                                )}
                                {maintenance.duration && (
                                  <span className="ml-4">
                                    <span className="font-semibold">Duração:</span> {maintenance.duration} min
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Componentes do Sistema</h3>
                  {data.components.map((component) => {
                      const colors = statusColors[component.status];
                      return (
                        <Card key={component.id} className="border-2">
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                            <div className="flex items-center gap-4">
                              <div>
                                <CardTitle className="text-xl">{component.name}</CardTitle>
                                {component.description && (
                                  <p className="text-sm text-gray-600 mt-1">{component.description}</p>
                                )}
                              </div>
                            </div>
                            <div className={`flex items-center gap-2 ${colors.text}`}>
                              {getStatusIcon(component.status)}
                              <span className="font-bold">{colors.label}</span>
                            </div>
                          </CardHeader>
                        </Card>
                      );
                    })}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Última atualização: {new Date().toLocaleString('pt-BR')}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(data.page.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver página completa de status
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
