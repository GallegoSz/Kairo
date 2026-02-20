export type User = {
  id: number
  name: string
  email: string
  companyId: number
  sector: string
  position: string
  managerId?: number | null
  isAdmin: boolean
}

export type CreateUserDTO = {
  name: string
  email: string
  sector: string
  position: string
}