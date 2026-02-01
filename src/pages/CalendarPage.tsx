import { useEffect, useState } from "react"

import CalendarYear from "../components/calendar/CalendarYear"
import EventPanel from "../components/EventPanel"
import YearSelector from "../components/YearSelector"
import ScheduledEvents from "../components/ScheduledEvents"
import TypeEvent from "../components/TypeEvent"

import { getEvents } from "../services/events.service"
import { Event } from "../types/event"

export default function CalendarPage() {

  const loggedUserId = 1 // dps vira auth/session

  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [year, setYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  useEffect(() => {
    getEvents().then(data => {
      setEvents(data)
      setLoading(false)
    })
  }, [])

  const userEvents = events.filter(
    event => event.userId === loggedUserId
  )

  const today = new Date()

  const sortedEvents = [...userEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const lastEvent =
    sortedEvents
      .filter(event => new Date(event.date) < today)
      .at(-1) || null

  const nextEvent =
    sortedEvents
      .find(event => new Date(event.date) > today) || null

  if (loading) {
    return <div className="p-8">Carregando calendário...</div>
  }

  return (
    <div className="flex flex-1 relative">
      <div className="flex-1 p-4 md:p-8">
        <YearSelector
          year={year}
          onPrev={() => setYear(y => y - 1)}
          onNext={() => setYear(y => y + 1)}
        />

        <ScheduledEvents
          lastEvent={lastEvent}
          nextEvent={nextEvent}
        />

        <TypeEvent />

        <CalendarYear
          year={year}
          onDayClick={setSelectedDate}
          events={userEvents}
        />
      </div>

      {selectedDate && (
        <div className="hidden md:block w-96 pr-6">
          <div className="sticky top-8">
            <EventPanel
              date={selectedDate}
              person={loggedUserId}
              onClose={() => setSelectedDate(null)}
            />
          </div>
        </div>
      )}

      {selectedDate && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSelectedDate(null)}
          />
          <div className="fixed right-0 top-0 bottom-0 z-50 md:hidden">
            <EventPanel
              date={selectedDate}
              person={loggedUserId}
              onClose={() => setSelectedDate(null)}
            />
          </div>
        </>
      )}
    </div>
  )
}









