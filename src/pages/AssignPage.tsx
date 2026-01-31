import { useEffect, useMemo, useState } from "react"
import CalendarYear from "../components/calendar/CalendarYear"
import YearSelector from "../components/YearSelector"
import EventPanel from "../components/EventPanel"
import ScheduledEvents from "../components/ScheduledEvents"
import { getUsers } from "../services/users.service"
import { getEvents } from "../services/events.service"
import { User } from "../types/user"
import { Event } from "../types/event"

export default function AssignPage() {
  const [users, setUsers] = useState<User[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [year, setYear] = useState(new Date().getFullYear())
  const [eventContext, setEventContext] = useState<{
    userId: number
    date: Date
  } | null>(null)

  useEffect(() => {
    getUsers().then(setUsers)
    getEvents().then(setEvents)
  }, [])

  const employees = users.filter(u => !u.isAdmin)

  // 🔥 EVENTOS DO USUÁRIO SELECIONADO
  const selectedUserEvents = useMemo(() => {
    if (!selectedUser) return []
    return events.filter(e => e.userId === selectedUser.id)
  }, [events, selectedUser])

  // 🔥 ÚLTIMO E PRÓXIMO EVENTO (por usuário)
  const today = new Date()

  const sortedEvents = [...selectedUserEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const lastEvent =
    sortedEvents.filter(e => new Date(e.date) < today).at(-1) || null

  const nextEvent =
    sortedEvents.find(e => new Date(e.date) > today) || null

  function getInitials(name: string) {
    return name
      .split(" ")
      .map(n => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  const selectedEventUser = eventContext ? users.find(u => u.id === eventContext.userId): null

  return (
    <div className="flex gap-6 p-8 relative">
      <div className="flex-1 space-y-6">

        <h1 className="text-xl font-semibold text-center">
          Atribua eventos às pessoas do seu setor
        </h1>

        {employees.map(user => {
          const isOpen = selectedUser?.id === user.id

          return (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow transition-all"
            >
              {/* HEADER */}
              <div
                className="flex p-5 cursor-pointer items-center"
                onClick={() =>
                  setSelectedUser(isOpen ? null : user)
                }
              >
                {/* INICIAIS */}
                <div
                  className={`flex items-center justify-center rounded-full bg-orange-500 text-white font-bold shadow transition-all
                    ${isOpen ? "w-16 h-16 text-lg" : "w-24 h-24 text-2xl"}`}
                >
                  {getInitials(user.name)}
                </div>

                <div className="ml-4 flex flex-col justify-center">
                  <span
                    className={`font-medium transition-all
                      ${isOpen ? "text-xl" : "text-2xl"}`}
                  >
                    {user.name}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {user.position}
                  </span>

                  {!isOpen && (
                    <span className="text-gray-400 text-sm">
                      {user.email}
                    </span>
                  )}
                </div>
              </div>

              {/* CONTEÚDO */}
              {isOpen && (
                <div className="border-t border-orange-500 px-5 pb-5 animate-fadeIn">
                  <div className="mt-6 space-y-4">
                    <YearSelector
                      year={year}
                      onPrev={() => setYear(y => y - 1)}
                      onNext={() => setYear(y => y + 1)}
                    />

                    <ScheduledEvents
                      lastEvent={lastEvent}
                      nextEvent={nextEvent}
                    />

                    <CalendarYear
                      year={year}
                      events={selectedUserEvents}
                      onDayClick={(date) =>
                        setEventContext({ userId: user.id, date })
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* EVENT PANEL */}
      {eventContext && (
        <div className="hidden md:block w-96">
          <div className="sticky top-8">
            <EventPanel
              date={eventContext.date}
              person={selectedEventUser?.name || ""}
              onClose={() => setEventContext(null)}
            />
          </div>
        </div>
      )}
    </div>
  )
}












