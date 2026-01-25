import { events } from "../data/events"

export default function SummaryCards() {
  const today = new Date()

  const sorted = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )

  const last = sorted.filter(e => new Date(e.date) < today).pop()
  const next = sorted.find(e => new Date(e.date) > today)

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <div className="card">
        <p className="text-sm">HOJE</p>
        <strong>{today.toLocaleDateString("pt-BR")}</strong>
      </div>

      <div className="card">
        <p className="text-sm">ÚLTIMO EVENTO</p>
        <strong>{last?.title}</strong>
      </div>

      <div className="card">
        <p className="text-sm">PRÓXIMO EVENTO</p>
        <strong>{next?.title}</strong>
      </div>
    </div>
  )
}
