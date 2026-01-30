import { getMonthDays } from "../../utils/calendar"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

// Mapeamento de cores por tipo de evento
const eventColorMap = {
  personal: "bg-blue-500",
  sector: "bg-orange-500"
}

// Rótulos amigáveis para exibição
const eventTypeLabelMap = {
  personal: "Pessoal",
  sector: "Setor"
}

export default function MonthCard({
  year,
  month,
  monthName,
  onDayClick,
  events = []
}) {

  // Parse seguro de data local (YYYY-MM-DD)
  function parseLocalDate(dateString) {
    const [y, m, d] = dateString.split("-").map(Number)
    return { year: y, month: m - 1, day: d }
  }

  function getEventsForDay(year, month, day) {
    if (!day) return []

    return events.filter(event => {
      const { year: y, month: m, day: d } = parseLocalDate(event.date)
      return y === year && m === month && d === day
    })
  }

  // Eventos apenas deste mês
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

      {/* Cabeçalho dias da semana */}
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-1">
        {weekDays.map((d, i) => (
          <div key={i} className="h-7 flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>

      {/* Dias */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((day, i) => {
          const dayEvents = getEventsForDay(year, month, day)

          return (
            <div
              key={`${year}-${month}-${i}`}
              onClick={() => day && onDayClick(new Date(year, month, day))}
              className={`h-10 flex flex-col items-center justify-center rounded cursor-pointer
                ${day ? "hover:bg-orange-200" : ""}
              `}
            >
              {day && <span className="text-sm">{day}</span>}

              {/* Indicadores de eventos no dia */}
              {dayEvents.length > 0 && (
                <div className="flex gap-1 mt-0.5">
                  {dayEvents.slice(0, 3).map((event, idx) => (
                    <span
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full ${eventColorMap[event.type]}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Lista de eventos do mês */}
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








