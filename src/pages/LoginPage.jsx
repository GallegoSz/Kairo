export default function LoginPage() {
  return (
    <div className="w-full max-w-sm backdrop-blur-xl bg-white p-8 rounded-2xl shadow-2xl">
      
      <div className="flex justify-center mb-6">
        <img
          src="/Kairo.png"
          alt="Logo da Kairo"
          className="h-40"
        />
      </div>

      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-1">
        Bem-vindo de volta
      </h1>
      
      <p className="text-sm text-center text-gray-500 mb-6">
        Entre para continuar no Kairo
      </p>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="
            w-full px-4 py-2 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-orange-400
            transition
          "
        />
      </div>

      <div className="mb-6">
        <input
          type="password"
          placeholder="Senha"
          className="
            w-full px-4 py-2 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-orange-400
            transition
          "
        />
      </div>

      <button
        className="
          w-full py-2 rounded-lg
          bg-orange-500 text-white font-medium
          hover:bg-orange-600 active:scale-95
          transition
        "
      >
        Entrar
      </button>

      <p className="text-xs text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} Kairo. Todos os direitos reservados.
      </p>
    </div>
  )
}

