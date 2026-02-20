import { useEffect, useState } from "react"
import { getUsers } from "../services/users.service"
import { User, CreateUserDTO } from "../types/user"

const COMPANY_ID = 1

export default function EmployeePage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState<CreateUserDTO>({
    name: "",
    email: "",
    sector: "",
    position: "",
  })

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const isFormInvalid = Object.values(form).some(
    (value) => value.trim() === ""
  )

  function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (isFormInvalid) return

    const newUser: User = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      sector: form.sector,
      position: form.position,
      companyId: COMPANY_ID,
      isAdmin: false,
    }

    setUsers((prev) => [...prev, newUser])

    setForm({
      name: "",
      email: "",
      sector: "",
      position: "",
    })
  }

  function handleDelete(user: User) {
    const confirmed = window.confirm(
      `Tem certeza que deseja remover o funcionário "${user.name}"?\n\n` +
        `Essa ação é irreversível.\n` +
        `O colaborador perderá acesso ao sistema e seus dados poderão ser apagados.`
    )

    if (!confirmed) return

    setUsers((prev) => prev.filter((u) => u.id !== user.id))
  }

  return (
    <div className="w-full max-w-3xl backdrop-blur-xl bg-white p-8 rounded-2xl shadow-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-1">
          Usuários do sistema
        </h1>

        <p className="text-sm text-center text-gray-500 mb-6">
          Adicione e gerencie colaboradores
        </p>

        <form
          onSubmit={handleAdd}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="name"
            placeholder="Nome completo"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            name="sector"
            placeholder="Setor"
            value={form.sector}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            name="position"
            placeholder="Cargo"
            value={form.position}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            disabled={isFormInvalid}
            className={`
              md:col-span-2 py-2 rounded-lg font-medium transition
              ${
                isFormInvalid
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600 active:scale-95"
              }
            `}
          >
            Adicionar usuário
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {loading && (
          <p className="text-center text-sm text-gray-400">
            Carregando usuários...
          </p>
        )}

        {!loading &&
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 rounded-xl border shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400">
                  {user.position} • {user.sector}
                </p>
              </div>

              <button
                onClick={() => handleDelete(user)}
                className="text-sm font-medium text-red-500 hover:text-red-600"
              >
                Excluir
              </button>
            </div>
          ))}

        {!loading && users.length === 0 && (
          <p className="text-center text-sm text-gray-400">
            Nenhum usuário cadastrado
          </p>
        )}
      </div>
    </div>
  )
}