import { getMonthDays } from "../../utils/calendar"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

export default function MonthCard({
  year,
  month,
  monthName,
  onDayClick
}) {
  const days = getMonthDays(year, month)

  return (
    <div className="bg-gray-100 rounded-2xl p-4 shadow">
      <h3 className="text-xl font-semibold mb-2">
        {monthName} <span className="text-sm text-gray-500">{year}</span>
      </h3>

      <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-1">
        {weekDays.map((d, i) => (
          <div
            key={i}
            className="h-7 flex items-center justify-center"
          >
            {d}
          </div>
        ))}
      </div>


      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((day, i) => (
          <div
            key={i}
            onClick={() => day && onDayClick(new Date(year, month, day))}
            className={`h-7 flex items-center justify-center rounded cursor-pointer
              ${day ? "hover:bg-orange-200" : ""}
            `}
          >
            {day && <span>{day}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

