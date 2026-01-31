import { Event } from "../types/event"

let eventsMock: Event[] = [
  {
    id: 1,
    userId: 1,
    name: "Sociodigital",
    obs: "Ir a aula",
    date: "2026-09-13",
    type: "personal"
  },
  {
    id: 2,
    userId: 1,
    name: "Festa",
    obs: "Comemorar muito a festa",
    date: "2026-02-11",
    type: "sector"
  },
  {
    id: 3,
    userId: 1,
    name: "fazer o relatório",
    obs: "o mais rápido possível",
    date: "2026-02-11",
    type: "personal"
  },
  {
    id: 4,
    userId: 1,
    name: "reunião",
    obs: "Prestar Atenção",
    date: "2026-02-11",
    type: "sector"
  },
  {
    id: 5,
    userId: 3,
    name: "reunião",
    obs: "Prestar Atenção",
    date: "2026-02-11",
    type: "sector"
  }
]


export async function getEvents(): Promise<Event[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(eventsMock)
    }, 500)
  })
}