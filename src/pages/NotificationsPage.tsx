import { useEffect, useState } from "react"
import { Bell } from "lucide-react"

// 1. Importe o componente que você criou
import NotificationItem from "../components/NotificationItem" 
import { Notification } from "../types/notification"
import { getNotifications, markAllAsRead } from "../services/notifications.service"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNotifications().then(data => {
      setNotifications(data)
      setLoading(false)
    })
  }, [])

  // Função para marcar apenas UMA como lida (o item vai precisar disso)
  function handleMarkOneAsRead(id: number) {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    )
  }

  function handleMarkAllAsRead() {
    markAllAsRead().then(() => {
      setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    })
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-8">
        
        {/* HEADER continua igual */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3">
            <Bell className="text-[#EF7F27]" />
            <h1 className="text-xl font-bold text-gray-900">Notificações</h1>
          </div>
          <button onClick={handleMarkAllAsRead} className="text-sm text-[#EF7F27] font-medium">
            Marcar todas como lidas
          </button>
        </div>

        {/* LISTA REFATORADA */}
        <div className="mt-6 space-y-3">
          {loading && <div className="text-gray-400">Carregando...</div>}

          {!loading && notifications.map(n => (
            // 2. Use o componente aqui em vez de escrever o HTML todo de novo
            <NotificationItem 
              key={n.id} 
              notification={n} 
              onRead={handleMarkOneAsRead} 
            />
          ))}
        </div>

      </div>
    </div>
  )
}



