import { Event } from "../types/event"

let eventsMock: Event[] = [
  // Empresa 1
  {
    id: 1,
    userId: 1,
    companyId: 1,
    name: "Sociodigital",
    obs: "Ir a aula",
    date: "2026-09-13",
    type: "personal"
  },
  {
    id: 2,
    userId: null,
    companyId: 1,
    name: "Festa da empresa",
    obs: "Comemorar muito a festa",
    date: "2026-02-11",
    type: "sector"
  },
  {
    id: 3,
    userId: 1,
    companyId: 1,
    name: "Fazer o relatório",
    obs: "O mais rápido possível",
    date: "2026-02-11",
    type: "personal"
  },
  {
    id: 4,
    userId: null,
    companyId: 1,
    name: "Reunião geral",
    obs: "Prestar atenção",
    date: "2026-02-11",
    type: "sector"
  },
  {
    id: 5,
    userId: 3,
    companyId: 1,
    name: "Reunião individual",
    obs: "Prestar atenção",
    date: "2026-02-11",
    type: "personal"
  },
  // Empresa 2 (isolada, nunca aparece para usuários da empresa 1)
  {
    id: 6,
    userId: 10,
    companyId: 2,
    name: "Evento da empresa 2",
    obs: "Só aparece para empresa 2",
    date: "2026-02-11",
    type: "personal"
  },
  {
    id: 7,
    userId: null,
    companyId: 2,
    name: "Reunião empresa 2",
    obs: "Só aparece para empresa 2",
    date: "2026-03-15",
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