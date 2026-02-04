export default function ConfirmModal({
  isOpen,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          {description}
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-lg border text-gray-600 hover:bg-gray-100 transition"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}