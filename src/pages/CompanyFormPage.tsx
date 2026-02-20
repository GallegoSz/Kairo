import { useState } from "react"
import { Company, UpdateCompanyDTO } from "../types/company"

export default function CompanyFormPage({ company }: { company: Company }) {
  const [form, setForm] = useState<UpdateCompanyDTO>({
    name: company.name,
    email: company.email,
    sector: company.sector,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="w-full max-w-sm backdrop-blur-xl bg-white p-8 rounded-2xl shadow-2xl">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-1">
        Dados da empresa
      </h1>

      <p className="text-sm text-center text-gray-500 mb-6">
        Informações institucionais usadas no sistema
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome da empresa"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email institucional"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          name="sector"
          placeholder="Setor de atuação"
          value={form.sector}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 active:scale-95 transition"
        >
          Salvar alterações
        </button>
      </form>
    </div>
  )
}
