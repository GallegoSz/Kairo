import { Event } from "../../types/event"
import { getMonthDays } from "../../utils/calendar"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

const eventColorMap = {
  personal: "bg-blue-500",
  sector: "bg-orange-500"
}

const eventTypeLabelMap = {
  personal: "Pessoal",
  sector: "Setor"
}

type Props = {
  year: number
  month: number
  monthName: string
  events: Event[]
  onDayClick: (date: Date) => void
}

export default function MonthCard({
  year,
  month,
  monthName,
  events,
  onDayClick
}: Props) {

  function parseLocalDate(dateString: string) {
    const [y, m, d] = dateString.split("-").map(Number)
    return { year: y, month: m - 1, day: d }
  }

  function getEventsForDay(day: number | null) {
    if (!day) return []

    return events.filter(event => {
      const { year: y, month: m, day: d } = parseLocalDate(event.date)
      return y === year && m === month && d === day
    })
  }

  const monthEvents = events.filter(event => {
    const { year: y, month: m } = parseLocalDate(event.date)
    return y === year && m === month
  })

  const days = getMonthDays(year, month)

  return (
    <div className="bg-gray-100 rounded-2xl p-4 shadow">
      <h3 className="text-xl font-semibold mb-2">
        {monthName} <span className="text-sm text-gray-500">{year}</span>
      </h3>

      {/* Dias da semana */}
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-1">
        {weekDays.map((d, i) => (
          <div key={i} className="h-7 flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>

      {/* Dias do mês */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((day, i) => {
          const dayEvents = getEventsForDay(day)

          return (
            <div
              key={`${year}-${month}-${i}`}
              onClick={() => day && onDayClick(new Date(year, month, day))}
              className={`h-10 flex flex-col items-center justify-center rounded cursor-pointer
                ${day ? "hover:bg-orange-200" : ""}
              `}
            >
              {day && <span>{day}</span>}

              {dayEvents.length > 0 && (
                <div className="flex gap-1 mt-0.5">
                  {dayEvents.slice(0, 3).map(event => (
                    <span
                      key={event.id}
                      className={`w-1.5 h-1.5 rounded-full ${eventColorMap[event.type]}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Lista de eventos do mês (como antes) */}
      {monthEvents.length > 0 && (
        <div className="mt-4 space-y-2">
          {monthEvents.map(event => (
            <div
              key={event.id}
              className="flex items-center gap-2 text-sm"
            >
              <span
                className={`w-2 h-2 rounded-full ${eventColorMap[event.type]}`}
              />
              <span className="font-medium">{event.name}</span>
              <span className="text-xs text-gray-500">
                ({eventTypeLabelMap[event.type]})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}









