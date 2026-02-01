import { useEffect, useState } from "react"
import {
  User,
  Clipboard,
  Mail,
  Warehouse,
  Building2
} from "lucide-react"

import { getUsers } from "../services/users.service"
import { User as UserType } from "../types/user"
import InfoCard from "../components/InfoCard"

const USER_ID = 1

export default function AccountPage() {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers().then(users => {
      const foundUser = users.find(u => u.id === USER_ID) || null
      setUser(foundUser)
      setLoading(false)
    })
  }, [])

  function getInitials(name: string) {
    return name
      .split(" ")
      .map(n => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  if (loading) {
    return <div className="p-8 text-center">Carregando...</div>
  }

  if (!user) {
    return <div className="p-8 text-center">Usuário não encontrado</div>
  }

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 w-full max-w-6xl">

        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <h3 className="font-bold text-lg">Conta {user.company}</h3>

          <button className="bg-[#EF7F27] px-8 py-2 rounded-full text-white font-medium hover:opacity-90 transition">
            Deslogar
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-20">

          <div className="flex flex-col gap-2 w-64">

            <div className="w-32 h-32 rounded-full bg-[#EF7F27] flex items-center justify-center shadow">
              <span className="text-white font-bold text-3xl">
                {getInitials(user.name)}
              </span>
            </div>

            <span className="font-bold text-xl">{user.name}</span>

            <span className="text-gray-400 text-sm truncate">
              {user.email}
            </span>

            <span className="text-gray-400 text-sm">
              Clique{" "}
              <span className="text-[#EF7F27] font-bold hover:opacity-60 cursor-pointer">
                aqui
              </span>{" "}
              para atualizar seus dados cadastrais.
            </span>
          </div>

          <div className="flex-1 min-w-0">

            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Informações pessoais
              </h1>
              <p className="text-gray-400 text-sm">
                Visualize seus dados cadastrais
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <InfoCard
                label="Nome"
                value={user.name}
                icon={User}
              />

              <InfoCard
                label="Email"
                value={user.email}
                icon={Mail}
              />

              <InfoCard
                label="Empresa"
                value={user.company}
                icon={Building2}
              />

              <InfoCard
                label="Setor"
                value={user.sector}
                icon={Warehouse}
              />

              <InfoCard
                label="Cargo"
                value={user.position}
                icon={Clipboard}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




