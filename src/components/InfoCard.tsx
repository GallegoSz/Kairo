import { LucideIcon } from "lucide-react"

interface InfoCardProps {
  label: string
  value?: string
  icon: LucideIcon
}

export default function InfoCard({
  label,
  value,
  icon: Icon
}: InfoCardProps) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow p-6 w-full">
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-semibold text-gray-900">{label}</span>
          <span className="text-gray-400 text-sm break-all">
            {value || "-"}
          </span>
        </div>

        <Icon
          size={18}
          className="shrink-0 text-[#EF7F27]"
        />
      </div>
    </div>
  )
}
