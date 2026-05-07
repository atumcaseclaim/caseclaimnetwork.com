interface Props {
  total: number
  current: number  // 1-based
}

export default function StepProgress({ total, current }: Props) {
  if (total <= 1) return null

  return (
    <div className="flex items-center mb-4">
      {Array.from({ length: total }).map((_, i) => {
        const step = i + 1
        const isDone = step < current
        const isActive = step === current
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className={`step-dot ${isDone ? 'done' : isActive ? 'active' : 'inactive'}`}>
              {isDone ? (
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : step}
            </div>
            {step < total && (
              <div className={`step-line ${isDone ? 'done' : 'inactive'}`} />
            )}
          </div>
        )
      })}
      <span className="ml-2 text-xs whitespace-nowrap" style={{ color: '#8491aa' }}>
        Step {current} of {total}
      </span>
    </div>
  )
}
