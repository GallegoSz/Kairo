import { useEffect, useState } from "react"
import {
  Mail,
  Warehouse,
  UserStar,
  Building2,
  ContactRound
} from "lucide-react"

import { getCompanys } from "../services/companys.service"
import { Company } from "../types/company"
import InfoCard from "../components/InfoCard"
import { initials } from "../utils/initials"


const USER_ADMIN_ID = 1

export default function CompanyPage() {
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCompanys().then(companys => {
      const foundCompany =
        companys.find(c => c.userAdmin === USER_ADMIN_ID) || null

      setCompany(foundCompany)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="p-8 text-center">Carregando...</div>
  }

  if (!company) {
    return <div className="p-8 text-center">Empresa não encontrada</div>
  }

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 w-full max-w-6xl">

        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <h3 className="font-bold text-lg">
            Empresa {company.name}
          </h3>

          <button className="bg-[#EF7F27] px-8 py-2 rounded-full text-white font-medium hover:opacity-90 transition">
            Deslogar
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-20">

          <div className="flex flex-col gap-2 w-64">

            <div className="w-32 h-32 rounded-full bg-[#EF7F27] flex items-center justify-center shadow">
              <span className="text-white font-bold text-3xl">
                {initials(company.name)}
              </span>
            </div>

            <span className="font-bold text-xl">
              {company.name}
            </span>

            <span className="text-gray-400 text-sm truncate">
              {company.email}
            </span>

            <span className="text-gray-400 text-sm">
              Clique{" "}
              <span className="text-[#EF7F27] font-bold hover:opacity-60 cursor-pointer">
                aqui
              </span>{" "}
              para atualizar os dados cadastrais da empresa.
            </span>

            <span className="text-gray-400 text-sm">
              Clique{" "}
              <span className="text-[#EF7F27] font-bold hover:opacity-60 cursor-pointer">
                aqui
              </span>{" "}
              para adicionar ou remover um funcionário.
            </span>
          </div>

          <div className="flex-1 min-w-0">

            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Informações cadastrais da empresa
              </h1>
              <p className="text-gray-400 text-sm">
                Visualize os dados da empresa
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <InfoCard
                label="Nome"
                value={company.name}
                icon={Building2}
              />

              <InfoCard
                label="Email"
                value={company.email}
                icon={Mail}
              />

              <InfoCard
                label="Administrador"
                value={`Usuário #${company.userAdmin}`}
                icon={UserStar}
              />

              <InfoCard
                label="Setor"
                value={company.sector}
                icon={Warehouse}
              />

              <InfoCard
                label="Funcionários cadastrados"
                value="7"
                icon={ContactRound}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
