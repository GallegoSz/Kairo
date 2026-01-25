import { Notification } from "../types/notification"

// MOCK (por enquanto)
let notificationsMock: Notification[] = [
  {
    id: 1,
    type: "event",
    title: "Novo evento atribuído",
    description: "Você recebeu um novo evento no calendário.",
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    type: "user",
    title: "Novo colaborador",
    description: "Ricardo Oliveira foi adicionado ao seu setor.",
    read: false,
    createdAt: new Date().toISOString()
  }
]

export async function getNotifications(): Promise<Notification[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(notificationsMock)
    }, 500)
  })
}

export async function markAllAsRead(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      notificationsMock = notificationsMock.map(n => ({
        ...n,
        read: true
      }))
      resolve()
    }, 300)
  })
}


