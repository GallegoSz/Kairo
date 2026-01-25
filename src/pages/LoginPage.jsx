export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-80">
      <h1 className="text-2xl font-bold mb-4 text-center text-orange-500">
        Login
      </h1>

      <img src="/Kairo.png" alt="Logo da Kairo" />

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded px-3 py-2 mb-3"
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full border rounded px-3 py-2 mb-4"
      />

      <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
        Entrar
      </button>
    </div>
  )
}
