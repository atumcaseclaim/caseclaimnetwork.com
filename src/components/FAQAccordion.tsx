import { useState } from 'react'
import type { FaqItem } from '@/data/campaigns'

interface Props {
  items: FaqItem[]
  defaultOpen?: number
}

export default function FAQAccordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="card-base overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-sm" style={{ color: '#0a1f35' }}>{item.q}</span>
            {open === i ? (
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2.5" className="flex-shrink-0">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            ) : (
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#8491aa" strokeWidth="2.5" className="flex-shrink-0">
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-xs leading-relaxed border-t border-slate-100" style={{ color: '#3d4d6a' }}>
              <div className="pt-3">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
