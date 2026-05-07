interface Props { message?: string }

export default function UrgencyBar({ message }: Props) {
  return (
    <div className="urgency-bar py-1.5 px-4 text-center text-xs">
      <span className="font-bold" style={{ color: '#d4af37' }}>⚠ Statute of limitations may apply. </span>
      <span style={{ color: 'rgba(255,255,255,0.58)' }}>
        {message || 'Start your free online case review — it takes under 2 minutes.'}
      </span>
    </div>
  )
}
