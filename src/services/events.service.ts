import { Event } from "../types/event"

let eventsMock: Event[] = [
  {
    id: 1,
    name: "Sociodigital",
    obs: "Ir a aula",
    date: "2026-09-13",
    type: "personal"
  },
  {
    id: 2,
    name: "Festa",
    obs: "Comemorar muito a festa",
    date: "2026-02-11",
    type: "sector"
  },
  {
    id: 3,
    name: "fazer o relatório",
    obs: "o mais rápido possível",
    date: "2026-02-11",
    type: "personal"
  },
  {
    id: 4,
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