import { Company } from "../types/company"

let companysMock: Company[] = [
    {
        name: "Kairo",
        email: "kairo@gmail.com",
        userAdmin: 1,
        sector: "Sites"
    },
    {
        name: "rnicrosoft",
        email: "rnicrosoft@outlook.com",
        userAdmin: 1,
        sector: "Tecnologia da Informação"
    },
    {
        name: "pineapple",
        email: "pineapple@pineaplee.com",
        userAdmin: 1,
        sector: "Tecnologia da Informação"
    }
]

export async function getCompanys(): Promise<Company[]> {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(companysMock)
    }, 500);
  })
}