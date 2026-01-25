import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <Outlet />
    </div>
  )
}
