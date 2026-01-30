import { Event } from "../types/event"

let eventsMock: Event[] = [
    {
        id: 1,
        name: "Sociodigital",
        obs: "Ir a aula",
        start: new Date("2026-09-13"),
        end: new Date("2026-09-13"),
        type: "personal"
    },
    {
        id: 2,
        name: "Festa",
        obs: "Comemorar muito a festa",
        start: new Date("2026-02-11"),
        end: new Date("2026-02-11"),
        type: "sector"
    },
    {
        id: 3,
        name: "fazer o relatório",
        obs: "o mais rápido possível",
        start: new Date("2026-02-11"),
        end: new Date("2026-02-11"),
        type: "personal"
    },
    {
        id: 3,
        name: "reunião",
        obs: "Prestar Atenção",
        start: new Date("2026-02-11"),
        end: new Date("2026-02-11"),
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