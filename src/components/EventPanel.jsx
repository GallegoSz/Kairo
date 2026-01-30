import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion } from "framer-motion"

export default function EventPanel({ date, person, onClose }) {
  const formatDate = d => d.toISOString().split("T")[0]

  const [startDate, setStartDate] = useState(formatDate(date))
  const [endDate, setEndDate] = useState(formatDate(date))
  const [shareWithSector, setShareWithSector] = useState(false)


  useEffect(() => {
    const newDate = formatDate(date)
    setStartDate(newDate)
    setEndDate(newDate)
  }, [date])

  function handleSubmit(e) {
    e.preventDefault()

    if (endDate < startDate) {
      alert("A data de fim não pode ser menor que a data de início.")
      return
    }

    console.log({
      person,
      startDate,
      endDate
    })

    onClose()
  }

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => {
        if (info.offset.y > 120) onClose()
      }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="
        fixed md:static
        bottom-0 right-0
        w-full md:w-96
        h-[85vh] md:h-auto
        bg-gray-100
        border border-gray-300
        p-6
        z-50
        rounded-t-2xl md:rounded-none
        touch-pan-y
      "
    >
      {/* Handle */}
      <div className="md:hidden flex justify-center mb-4 cursor-grab">
        <div className="w-12 h-1.5 bg-gray-400 rounded-full" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-orange-500">
          Evento — {person}
        </h2>

        <button onClick={onClose}>
          <X />
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4 overflow-y-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do evento"
          className="w-full p-3 rounded bg-gray-200 outline-none"
        />

        <textarea
          placeholder="Observações"
          className="w-full p-3 rounded bg-gray-200 outline-none h-28"
        />

        <div>
          <span className="text-sm">Início:</span>
          <input
            type="date"
            value={startDate}
            onChange={e => {
              const value = e.target.value
              setStartDate(value)
              if (value > endDate) setEndDate(value)
            }}
            className="w-full p-3 rounded bg-gray-200"
          />
        </div>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={shareWithSector}
            onChange={e => setShareWithSector(e.target.checked)}
            className="accent-orange-500"
          />
          Compartilhar para o setor
        </label>


        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4"
        >
          Cadastrar evento
        </button>
      </form>
    </motion.div>
  )
}








