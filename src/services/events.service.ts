import { Event } from "../types/event"

let eventsMock: Event[] = [
  {
    id: 1,
    userId: 1,
    companyId: 1,
    name: "Entrega de Relatório Financeiro",
    obs: "Consolidar receitas, despesas e fluxo de caixa do mês.",
    date: "2026-01-10",
    type: "personal"
  },
  {
    id: 2,
    userId: 1,
    companyId: 1,
    name: "Reunião de Alinhamento com Diretoria",
    obs: "Apresentar indicadores e metas do trimestre.",
    date: "2026-01-22",
    type: "personal"
  },
  {
    id: 3,
    userId: 2,
    companyId: 1,
    name: "Revisão de Contratos com Fornecedores",
    obs: "Analisar cláusulas de reajuste e prazos.",
    date: "2026-01-15",
    type: "personal"
  },
  {
    id: 4,
    userId: 2,
    companyId: 1,
    name: "Auditoria Interna de Processos",
    obs: "Verificar conformidade com políticas internas.",
    date: "2026-01-28",
    type: "personal"
  },
  {
    id: 5,
    userId: 3,
    companyId: 1,
    name: "Planejamento de Campanha Institucional",
    obs: "Definir cronograma e orçamento da campanha.",
    date: "2026-01-12",
    type: "personal"
  },
  {
    id: 6,
    userId: 3,
    companyId: 1,
    name: "Análise de Métricas de Desempenho",
    obs: "Avaliar KPIs e propor melhorias.",
    date: "2026-01-25",
    type: "personal"
  },
  {
    id: 7,
    userId: 1,
    companyId: 1,
    name: "Fechamento Contábil",
    obs: "Finalizar balanço mensal e enviar para contabilidade externa.",
    date: "2026-02-09",
    type: "personal"
  },
  {
    id: 8,
    userId: 1,
    companyId: 1,
    name: "Reunião de Avaliação de Desempenho",
    obs: "Discutir resultados individuais e metas.",
    date: "2026-02-20",
    type: "personal"
  },
  {
    id: 9,
    userId: 2,
    companyId: 1,
    name: "Atualização de Políticas Internas",
    obs: "Revisar normas conforme novas diretrizes legais.",
    date: "2026-02-11",
    type: "personal"
  },
  {
    id: 10,
    userId: 2,
    companyId: 1,
    name: "Reunião com Consultoria Jurídica",
    obs: "Alinhar questões contratuais estratégicas.",
    date: "2026-02-23",
    type: "personal"
  },
  {
    id: 11,
    userId: 3,
    companyId: 1,
    name: "Planejamento de Conteúdo Corporativo",
    obs: "Definir pautas institucionais do trimestre.",
    date: "2026-02-08",
    type: "personal"
  },
  {
    id: 12,
    userId: 3,
    companyId: 1,
    name: "Relatório de Performance de Projetos",
    obs: "Compilar dados e apresentar à gerência.",
    date: "2026-02-26",
    type: "personal"
  },
  {
  id: 13,
  userId: null,
  companyId: 1,
  name: "Reunião do Setor Financeiro",
  obs: "Analisar fluxo de caixa e projeções para o próximo trimestre.",
  date: "2026-03-05",
  type: "sector"
},
{
  id: 14,
  userId: null,
  companyId: 1,
  name: "Planejamento Estratégico do Setor Comercial",
  obs: "Definir metas de vendas e estratégias de captação de clientes.",
  date: "2026-04-12",
  type: "sector"
},
{
  id: 15,
  userId: null,
  companyId: 1,
  name: "Revisão de Processos do Setor Operacional",
  obs: "Mapear gargalos e propor melhorias de eficiência.",
  date: "2026-05-18",
  type: "sector"
},
{
  id: 16,
  userId: null,
  companyId: 1,
  name: "Treinamento Técnico do Setor de TI",
  obs: "Atualização sobre novas ferramentas e protocolos de segurança.",
  date: "2026-06-25",
  type: "sector"
}
]

export async function getEvents(userId: number, companyId: number): Promise<Event[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = eventsMock.filter(
        event =>
          event.companyId === companyId &&
          (event.userId === userId || event.type === "sector")
      )
      resolve(result)
    }, 500)
  })
}

// Para o admin, retorna todos os eventos da empresa
export async function getAllEventsByCompany(companyId: number): Promise<Event[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = eventsMock.filter(
        event => event.companyId === companyId
      )
      resolve(result)
    }, 500)
  })
}