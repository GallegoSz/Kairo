import { CalendarCheck, UserPlus, AlertTriangle, CheckCircle } from "lucide-react"

import { Notification } from "../types/notification"

type Props = {
  notification: Notification
  onRead: (id: number) => void
}

const iconMap = {
  event: CalendarCheck,
  user: UserPlus,
  warning: AlertTriangle,
  success: CheckCircle
}

const iconColorMap = {
  event: "text-blue-600",
  user: "text-purple-600",
  warning: "text-amber-600",
  success: "text-green-600"
}

export default function NotificationItem({ notification, onRead }: Props) {
  const Icon = iconMap[notification.type]

  return (
    <div
      className={`
        flex gap-4 p-5 rounded-2xl border
        transition cursor-pointer
        ${!notification.read
          ? "bg-orange-50 border-orange-200"
          : "bg-gray-100 border-gray-200"}
        hover:shadow
      `}
    >
      {/* ÍCONE */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shrink-0">
        <Icon
          size={20}
          className={iconColorMap[notification.type]}
        />
      </div>

      {/* TEXTO */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-4">
          <h3 className="font-semibold text-gray-900 truncate">
            {notification.title}
          </h3>

          <span className="text-xs text-gray-400 shrink-0">
            {new Date(notification.createdAt).toLocaleString("pt-BR")}
          </span>
        </div>

        {notification.description && (
          <p className="text-sm text-gray-500 truncate">
            {notification.description}
          </p>
        )}
      </div>

      {!notification.read && (
        <button
          onClick={() => onRead(notification.id)}
          className="text-sm text-[#EF7F27] hover:opacity-70"
        >
          Marcar como lida
        </button>
      )}
    </div>
  )
}

