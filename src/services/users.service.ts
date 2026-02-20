import { User } from "../types/user"

let usersMock: User[] = [
    {
        id: 1,
        name: "Renata Silveira",
        email: "renatasilv@outlook.com",
        companyId: 1,
        sector: "Administrativo",
        position: "CEO",
        managerId: null,
        isAdmin: true
    },
    {
        id: 2,
        name: "Iara Santos",
        email: "iarasansz@hotmail.com",
        companyId: 1,
        sector: "Recursos Humanos",
        position: "Profissional de RH Pleno",
        managerId: 1,
        isAdmin: false
    },
    {
        id: 3,
        name: "Ricardo Oliveira",
        email: "ric_oliver@yahoo.com",
        companyId: 1,
        sector: "Recursos Humanos",
        position: "Profissional de RH Sênior",
        managerId: 1,
        isAdmin: false
    }
]

export async function getUsers(): Promise<User[]> {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(usersMock)
    }, 500);
  })
}