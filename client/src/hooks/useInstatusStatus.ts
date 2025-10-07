import { useQuery } from '@tanstack/react-query';

interface InstatusComponent {
  id: string;
  name: string;
  status: 'OPERATIONAL' | 'UNDERMAINTENANCE' | 'DEGRADEDPERFORMANCE' | 'PARTIALOUTAGE' | 'MAJOROUTAGE';
  description?: string;
  group?: string | null;
}

interface InstatusIncident {
  id: string;
  name: string;
  status: string;
  impact: string;
  started: string;
  resolved?: string;
  url?: string;
  updatedAt?: string;
}

interface InstatusMaintenance {
  id: string;
  name: string;
  start: string;
  status: string;
  duration?: string;
  url?: string;
  updatedAt?: string;
}

interface InstatusPage {
  name: string;
  url: string;
  status: 'UP' | 'HASISSUES' | 'UNDERMAINTENANCE';
}

interface InstatusSummary {
  page: InstatusPage;
  activeIncidents?: InstatusIncident[];
  activeMaintenances?: InstatusMaintenance[];
}

interface InstatusComponentsResponse {
  components: InstatusComponent[];
}

interface InstatusData {
  page: InstatusPage;
  components: InstatusComponent[];
  activeIncidents: InstatusIncident[];
  activeMaintenances: InstatusMaintenance[];
}

const STATUS_COLORS = {
  OPERATIONAL: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-600', label: 'Operacional' },
  UNDERMAINTENANCE: { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-600', label: 'Em Manutenção' },
  DEGRADEDPERFORMANCE: { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-600', label: 'Desempenho Degradado' },
  PARTIALOUTAGE: { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-600', label: 'Falha Parcial' },
  MAJOROUTAGE: { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-600', label: 'Falha Grave' },
};

const OVERALL_STATUS_COLORS = {
  UP: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-600', label: 'Todos os Sistemas Operacionais' },
  HASISSUES: { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-600', label: 'Alguns Sistemas com Problemas' },
  UNDERMAINTENANCE: { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-600', label: 'Manutenção em Andamento' },
};

async function fetchInstatusData(pageUrl: string): Promise<InstatusData> {
  const [summaryResponse, componentsResponse] = await Promise.all([
    fetch(`${pageUrl}/summary.json`),
    fetch(`${pageUrl}/v2/components.json`)
  ]);
  
  if (!summaryResponse.ok || !componentsResponse.ok) {
    throw new Error('Não foi possível buscar dados do Instatus');
  }
  
  const summary: InstatusSummary = await summaryResponse.json();
  const componentsData: InstatusComponentsResponse = await componentsResponse.json();
  
  return {
    page: summary.page,
    components: componentsData.components || [],
    activeIncidents: summary.activeIncidents || [],
    activeMaintenances: summary.activeMaintenances || []
  };
}

export function useInstatusStatus(pageUrl: string | null) {
  const query = useQuery({
    queryKey: ['instatus-status', pageUrl],
    queryFn: () => fetchInstatusData(pageUrl!),
    enabled: !!pageUrl,
    refetchInterval: 60000,
    retry: 3,
  });

  return {
    ...query,
    statusColors: STATUS_COLORS,
    overallStatusColors: OVERALL_STATUS_COLORS,
  };
}

export type { InstatusComponent, InstatusIncident, InstatusData, InstatusMaintenance };
