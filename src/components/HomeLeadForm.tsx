import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { campaigns } from '@/data/campaigns'
import { US_STATES, formatPhone } from '@/lib/utils'
import StepProgress from './StepProgress'

export default function HomeLeadForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [caseType, setCaseType] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate1 = () => {
    const e: Record<string, string> = {}
    if (!caseType) e.caseType = 'Please select a case type'
    if (!firstName.trim()) e.firstName = 'Required'
    if (!lastName.trim()) e.lastName = 'Required'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validate2 = () => {
    const e: Record<string, string> = {}
    if (!phone.replace(/\D/g, '').length || phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid 10-digit phone number'
    if (!state) e.state = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validate1()) {
      setStep(2)
      setErrors({})
    } else if (step === 2 && validate2()) {
      const campaign = campaigns.find(c => c.id === caseType)
      if (campaign) {
        navigate(`/${campaign.slug}`, {
          state: { firstName, lastName, email, phone: phone.replace(/\D/g,''), city, state, fromHome: true }
        })
      }
    }
  }

  return (
    <div className="w-full">
      <StepProgress total={3} current={step} />

      {step === 1 && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              Case type <span style={{ color: '#d4af37' }}>*</span>
            </label>
            <select
              className="form-input"
              value={caseType}
              onChange={e => setCaseType(e.target.value)}
            >
              <option value="">Select a case type…</option>
              {campaigns.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            {errors.caseType && <p className="text-red-500 text-xs mt-1">{errors.caseType}</p>}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                First Name <span style={{ color: '#d4af37' }}>*</span>
              </label>
              <input className="form-input" placeholder="Jane" value={firstName} onChange={e => setFirstName(e.target.value)} maxLength={50} />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                Last Name <span style={{ color: '#d4af37' }}>*</span>
              </label>
              <input className="form-input" placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)} maxLength={50} />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              Email Address <span style={{ color: '#d4af37' }}>*</span>
            </label>
            <input className="form-input" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} maxLength={255} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <button onClick={handleNext} className="btn-gold w-full py-3 rounded-xl text-sm font-bold mt-1">
            Continue
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              Phone Number <span style={{ color: '#d4af37' }}>*</span>
            </label>
            <input
              className="form-input"
              type="tel"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={e => setPhone(formatPhone(e.target.value))}
              maxLength={14}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>City</label>
              <input className="form-input" placeholder="Your city" value={city} onChange={e => setCity(e.target.value)} maxLength={60} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                State <span style={{ color: '#d4af37' }}>*</span>
              </label>
              <select className="form-input" value={state} onChange={e => setState(e.target.value)}>
                <option value="">Select…</option>
                {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          </div>

          <div className="shield-note">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Protected by attorney-client privilege. Continuing will take you to your dedicated case review (Step 3).</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => { setStep(1); setErrors({}) }}
              className="px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors"
              style={{ borderColor: '#e2e6ef', color: '#3d4d6a' }}
            >
              ← Back
            </button>
            <button onClick={handleNext} className="btn-gold flex-1 py-2.5 rounded-xl text-sm font-bold">
              Continue to Case Review
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
