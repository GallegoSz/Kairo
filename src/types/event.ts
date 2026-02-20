export type Event = {
  id: number
  userId: number | null
  companyId: number
  name: string
  obs: string
  date: string
  type: "sector" | "personal"
}
