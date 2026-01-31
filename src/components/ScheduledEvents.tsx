import React from "react"
import { Event } from "../types/event"

type Props = {
  lastEvent: Event | null
  nextEvent: Event | null
}

const ScheduledEvents = ({ lastEvent, nextEvent }: Props) => {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  })

  const formattedToday =
    today.charAt(0).toUpperCase() + today.slice(1)

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-9">
      <div className="bg-gray-100 rounded-2xl p-5 shadow">
        <h3>HOJE</h3>
        <h2 className="text-2xl font-bold">{formattedToday}</h2>
      </div>

      <div className="bg-gray-100 rounded-2xl p-5 shadow">
        <div className="flex justify-between">
          <h3>ÚLTIMO EVENTO</h3>
          <h4 className="font-light">
            {lastEvent
              ? new Date(lastEvent.date).toLocaleDateString("pt-BR")
              : "--"}
          </h4>
        </div>
        <h2 className="text-2xl font-bold">
          {lastEvent?.name || "Nenhum"}
        </h2>
      </div>

      <div className="bg-gray-100 rounded-2xl p-5 shadow">
        <div className="flex justify-between">
          <h3>PRÓXIMO EVENTO</h3>
          <h4 className="font-light">
            {nextEvent
              ? new Date(nextEvent.date).toLocaleDateString("pt-BR")
              : "--"}
          </h4>
        </div>
        <h2 className="text-2xl font-bold">
          {nextEvent?.name || "Nenhum"}
        </h2>
      </div>
    </div>
  )
}

export default ScheduledEvents
