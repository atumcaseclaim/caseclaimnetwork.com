import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogoFull } from './Logo'
import { campaigns } from '@/data/campaigns'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50" style={{ background: '#06111f', borderBottom: '1px solid rgba(212,175,55,0.18)' }}>
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <LogoFull onClick={() => navigate('/')} />

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {campaigns.map(c => (
            <Link
              key={c.id}
              to={`/${c.slug}`}
              className="text-white/55 hover:text-[#d4af37] text-xs font-medium px-2.5 py-1.5 rounded transition-colors hover:bg-white/5"
            >
              {c.shortName}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-white/55 hover:text-[#d4af37] text-xs font-medium px-2.5 py-1.5 rounded transition-colors hover:bg-white/5 ml-1"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="btn-gold hidden sm:flex text-xs px-4 py-2 rounded-lg"
          >
            Free Case Review
          </Link>
          <button
            className="lg:hidden text-white/65 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#09192e', borderTop: '1px solid rgba(255,255,255,0.07)' }} className="lg:hidden px-5 py-3 space-y-0.5">
          {campaigns.map(c => (
            <Link
              key={c.id}
              to={`/${c.slug}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-white/65 hover:text-[#d4af37] text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              {c.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-3 py-2.5 text-white/65 hover:text-[#d4af37] text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
          >
            Contact Us
          </Link>
          <div className="pt-2 border-t border-white/10 mt-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="btn-gold block text-center text-sm px-4 py-2.5 rounded-lg"
            >
              Start Free Case Review
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
