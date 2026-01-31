export type User = {
    id: number
    name: string
    email: string
    company: string
    sector: string
    position: string
    managerId?: number | null 
    isAdmin: boolean
}