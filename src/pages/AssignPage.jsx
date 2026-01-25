import { useState } from "react"
import CalendarYear from "../components/calendar/CalendarYear"
import YearSelector from "../components/YearSelector"
import EventPanel from "../components/EventPanel"
import ScheduledEvents from "../components/ScheduledEvents"

export default function AssignPage() {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [year, setYear] = useState(new Date().getFullYear())
  const [eventContext, setEventContext] = useState(null)
  // { person: "IARA" | "RICARDO", date: Date }

  const togglePerson = (id) => {
    setSelectedPerson(prev => (prev === id ? null : id))
    setEventContext(null)
  }

  return (
    <div className="flex gap-6 p-8 relative">

      {/* ================= COLUNA PRINCIPAL ================= */}
      <div className="flex-1 space-y-6">

        <h1 className="text-xl font-semibold text-center">
          Atribua eventos às pessoas do seu setor
        </h1>

        {/* ================= IARA ================= */}
        <div className="bg-white rounded-2xl shadow transition-all">

          <div
            className="flex p-5 cursor-pointer"
            onClick={() => togglePerson("IARA")}
          >
            <img
              src="/mulher_sorrindo.jpg"
              className={`rounded-full shadow transition-all
                ${selectedPerson === "IARA" ? "w-16 h-16" : "w-24 h-24"}`}
            />

            <div className="ml-4 flex flex-col justify-center">
              <span
                className={`font-medium transition-all
                  ${selectedPerson === "IARA" ? "text-xl" : "text-2xl"}`}
              >
                Iara Santos
              </span>

              <span className="text-gray-500 text-sm">
                Profissional de RH Pleno
              </span>

              {selectedPerson !== "IARA" && (
                <span className="text-gray-400 text-sm">
                  iarasansz@hotmail.com
                </span>
              )}
            </div>
          </div>

          {selectedPerson === "IARA" && (
            <div className="border-t border-orange-500 px-5 pb-5">
              <div className="mt-6 space-y-4">
                <YearSelector
                  year={year}
                  onPrev={() => setYear(y => y - 1)}
                  onNext={() => setYear(y => y + 1)}
                />

                <ScheduledEvents />

                <CalendarYear
                  year={year}
                  onDayClick={(date) =>
                    setEventContext({ person: "IARA", date })
                  }
                />
              </div>
            </div>
          )}
        </div>

        {/* ================= RICARDO ================= */}
        <div className="bg-white rounded-2xl shadow transition-all">

          <div
            className="flex p-5 cursor-pointer"
            onClick={() => togglePerson("RICARDO")}
          >
            <img
              src="/homem_sorrindo.jpg"
              className={`rounded-full shadow transition-all
                ${selectedPerson === "RICARDO" ? "w-16 h-16" : "w-24 h-24"}`}
            />

            <div className="ml-4 flex flex-col justify-center">
              <span
                className={`font-medium transition-all
                  ${selectedPerson === "RICARDO" ? "text-xl" : "text-2xl"}`}
              >
                Ricardo Oliveira
              </span>

              <span className="text-gray-500 text-sm">
                Profissional de RH Sênior
              </span>

              {selectedPerson !== "RICARDO" && (
                <span className="text-gray-400 text-sm">
                  ric_oliver@yahoo.com
                </span>
              )}
            </div>
          </div>

          {selectedPerson === "RICARDO" && (
            <div className="border-t border-orange-500 px-5 pb-5">
              <div className="mt-6 space-y-4">
                <YearSelector
                  year={year}
                  onPrev={() => setYear(y => y - 1)}
                  onNext={() => setYear(y => y + 1)}
                />

                <ScheduledEvents />

                <CalendarYear
                  year={year}
                  onDayClick={(date) =>
                    setEventContext({ person: "RICARDO", date })
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= EVENT PANEL (DESKTOP) ================= */}
      {eventContext && (
        <div className="hidden md:block w-96">
          <div className="sticky top-8">
            <EventPanel
              date={eventContext.date}
              person={eventContext.person}
              onClose={() => setEventContext(null)}
            />
          </div>
        </div>
      )}

      {/* ================= EVENT PANEL (MOBILE) ================= */}
      {eventContext && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setEventContext(null)}
          />
          <div className="fixed right-0 top-0 bottom-0 z-50 md:hidden">
            <EventPanel
              date={eventContext.date}
              person={eventContext.person}
              onClose={() => setEventContext(null)}
            />
          </div>
        </>
      )}
    </div>
  )
}





