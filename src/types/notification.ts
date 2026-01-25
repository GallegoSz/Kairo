export type Notification = {
  id: number
  type: "event" | "user" | "warning" | "success"
  title: string
  description?: string
  createdAt: string
  read: boolean
}

