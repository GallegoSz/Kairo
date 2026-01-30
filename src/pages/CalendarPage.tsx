import { useEffect, useState } from "react"
import CalendarYear from "../components/calendar/CalendarYear"
import EventPanel from "../components/EventPanel"
import YearSelector from "../components/YearSelector"
import ScheduledEvents from "../components/ScheduledEvents"
import TypeEvent from "../components/TypeEvent"
import { getEvents } from "../services/events.service"
import { Event } from "../types/event"

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getEvents().then(data => {
        setEvents(data)
      })
    }, [])

  const [year, setYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="flex flex-1 relative">
      <div className="flex-1 p-4 md:p-8">
        <YearSelector
          year={year}
          onPrev={() => setYear(y => y - 1)}
          onNext={() => setYear(y => y + 1)}
        />

        <ScheduledEvents />
        <TypeEvent />

        <CalendarYear
          year={year}
          onDayClick={setSelectedDate}
          events={events}
        />
      </div>

      {/* EventPanel desktop */}
      {selectedDate && (
        <div className="hidden md:block w-96 pr-6">
          <div className="sticky top-8">
            <EventPanel
              date={selectedDate}
              person="neymar"
              onClose={() => setSelectedDate(null)}
            />
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      {selectedDate && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSelectedDate(null)}
          />
          <div className="fixed right-0 top-0 bottom-0 z-50 md:hidden">
            <EventPanel
              date={selectedDate}
              person="neymar"
              onClose={() => setSelectedDate(null)}
            />
          </div>
        </>
      )}
    </div>
  )
}








