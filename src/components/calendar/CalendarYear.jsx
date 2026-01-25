import MonthCard from "./MonthCard"

const months = [
  "Janeiro","Fevereiro","Março","Abril",
  "Maio","Junho","Julho","Agosto",
  "Setembro","Outubro","Novembro","Dezembro"
]

export default function CalendarYear({ year, onDayClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 ml:grid-cols-3 2 lg:grid-cols-3 hg:grid-cols-4 gap-5">
      {months.map((name, index) => (
        <MonthCard
          key={name}
          year={year}
          month={index}
          monthName={name}
          onDayClick={onDayClick}
        />
      ))}
    </div>
  )
}

