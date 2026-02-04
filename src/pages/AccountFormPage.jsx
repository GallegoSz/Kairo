import { useState } from "react"

export default function AccountFormPage({ user }) {
  const [form, setForm] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    sector: user?.sector ?? "",
    position: user?.position ?? "",
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="w-full max-w-sm backdrop-blur-xl bg-white p-8 rounded-2xl shadow-2xl">
      
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-1">
        Dados pessoais
      </h1>

      <p className="text-sm text-center text-gray-500 mb-6">
        Essas informações identificam você dentro da empresa
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome completo"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email corporativo"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <input
          name="position"
          placeholder="Cargo"
          value={form.position}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 active:scale-95 transition"
        >
          Salvar alterações
        </button>
      </form>
    </div>
  )
}

