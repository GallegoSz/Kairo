export type Company = {
  id: number
  name: string
  email: string
  sector: string
  userAdmin: number
}

export type UpdateCompanyDTO = {
  name: string
  email: string
  sector: string
}