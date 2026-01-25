import { Bell, User, Building2 } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-2 ${
      isActive
        ? "underline underline-offset-4 font-semibold"
        : "opacity-90 hover:opacity-100"
    }`

  return (
    <header className="w-full h-14 flex items-center px-6 bg-[#EF7F27] shrink-0">
      
      {/* Logo */}
      <div className="flex-1 flex items-center">
        <NavLink
          to="/"
          className="text-white font-semibold tracking-wide text-3xl"
        >
          Kairo
        </NavLink>
      </div>

      {/* Menu central */}
      <div className="flex-1 flex justify-center text-white font-medium gap-5">
        <NavLink to="/" className={linkClass}>
          Calendário
        </NavLink>

        <NavLink to="/atribuir" className={linkClass}>
          Atribuir
        </NavLink>
      </div>

      {/* Ações */}
      <div className="flex-1 flex justify-end items-center gap-3">
        <NavLink to={"/notificacoes"}>
          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer">
            <Bell size={18} className="text-white" />
          </button>
        </NavLink>
        
        <NavLink to="/conta">
          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer">
            <User size={18} className="text-white" />
          </button>
        </NavLink>

        <NavLink to="/empresa">
          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer">
            <Building2 size={18} className="text-white" />
          </button>
        </NavLink>
      </div>

    </header>
  )
}

