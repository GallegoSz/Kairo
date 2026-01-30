import MonthCard from "./MonthCard"

const months = [
  "Janeiro","Fevereiro","Março","Abril",
  "Maio","Junho","Julho","Agosto",
  "Setembro","Outubro","Novembro","Dezembro"
]

export default function CalendarYear({ year, onDayClick, events }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {months.map((name, index) => (
        <MonthCard
          key={name}
          year={year}
          month={index}
          monthName={name}
          onDayClick={onDayClick}
          events={events}
        />
      ))}
    </div>
  )
}

