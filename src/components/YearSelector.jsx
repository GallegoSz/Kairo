import { ArrowLeft, ArrowRight } from "lucide-react"

export default function YearSelector({ year, onPrev, onNext }) {
  return (
    <div className="flex justify-center mb-8">
        <div className="px-4 py-2 bg-gray-100 rounded-full shadow flex">
            <button onClick={onPrev} className="px-2 text-lg cursor-pointer">
                <ArrowLeft size={20} color="#EF7F27" />
            </button>

            <span className="font-medium">
                {year}
            </span>

            <button onClick={onNext} className="px-2 text-lg cursor-pointer">
                <ArrowRight size={20} color="#EF7F27"/>
            </button>
        </div>
    </div>
  )
}
