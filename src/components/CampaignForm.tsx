import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { Campaign } from '@/data/campaigns'
import { submitLead } from '@/lib/trackdrive'
import { US_STATES, formatPhone } from '@/lib/utils'
import StepProgress from './StepProgress'

interface LocationState {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  city?: string
  state?: string
  fromHome?: boolean
}

interface Props { campaign: Campaign }

type QualAnswer = string

export default function CampaignForm({ campaign }: Props) {
  const location = useLocation()
  const state = (location.state || {}) as LocationState
  const fromHome = !!state.fromHome

  // Pre-fill from homepage handoff
  const [firstName, setFirstName] = useState(state.firstName || '')
  const [lastName, setLastName] = useState(state.lastName || '')
  const [email, setEmail] = useState(state.email || '')
  const [phone, setPhone] = useState(state.phone ? formatPhone(state.phone) : '')
  const [city, setCity] = useState(state.city || '')
  const [stateVal, setStateVal] = useState(state.state || '')
  const [qual1, setQual1] = useState<QualAnswer>('')
  const [qual2, setQual2] = useState<QualAnswer>('')
  const [qual3, setQual3] = useState<QualAnswer>('')
  const [attorney, setAttorney] = useState<QualAnswer>('')
  const [diagnosed, setDiagnosed] = useState<QualAnswer>('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Rideshare-specific
  const [gender, setGender] = useState('')
  const [incidentYear, setIncidentYear] = useState('')
  const [proofOfRide, setProofOfRide] = useState('')

  const isRideshare = campaign.slug === 'rideshare'
  const isTalc = campaign.slug === 'talcum-powder'

  const validate = () => {
    const e: Record<string, string> = {}
    if (!qual1) e.qual1 = 'Please select an option'
    if (!qual2) e.qual2 = 'Please select an option'
    if (!attorney) e.attorney = 'Please select an option'
    if (!stateVal) e.state = 'Required'
    if (!fromHome) {
      if (!firstName.trim()) e.firstName = 'Required'
      if (!lastName.trim()) e.lastName = 'Required'
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
      if (!phone.replace(/\D/g,'') || phone.replace(/\D/g,'').length < 10) e.phone = 'Enter a valid 10-digit phone number'
    }
    if (!consent) e.consent = 'You must agree to continue'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setSubmitting(true)

    const payload: Record<string, string> = {
      token: campaign.trackdriveToken,
      first_name: firstName,
      last_name: lastName,
      email,
      caller_id: phone.replace(/\D/g, ''),
      state: stateVal,
      city,
      [campaign.tdFields.qualifier1]: qual1,
      [campaign.tdFields.qualifier2]: qual2,
      [campaign.tdFields.attorney]: attorney,
    }

    if (campaign.tdFields.qualifier3 && qual3) {
      payload[campaign.tdFields.qualifier3] = qual3
    }
    if (diagnosed) payload.diagnosed = diagnosed
    if (isRideshare) {
      if (gender) payload.gender = gender
      if (incidentYear) payload.incident_year = incidentYear
      if (proofOfRide) payload.proof_of_ride = proofOfRide
    }

    await submitLead(payload as any)
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-6 px-2">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'linear-gradient(135deg,#d4af37,#b8860b)' }}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#06111f" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#0a1f35' }}>
          Case Review Submitted!
        </h3>
        <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: '#3d4d6a' }}>
          A specialist will contact you within <strong>24 hours</strong>. Your information is 100% confidential.
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs" style={{ color: '#8491aa' }}>
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          No fee unless you win
        </div>
      </div>
    )
  }

  const totalSteps = fromHome ? 3 : 1
  const currentStep = fromHome ? 3 : 1

  return (
    <div className="w-full">
      <StepProgress total={totalSteps} current={currentStep} />

      <div className="space-y-3.5">
        {/* Qualifier 1 */}
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
            {isRideshare ? 'Which rideshare company was involved?' : 'Which best describes your situation?'}
            <span style={{ color: '#d4af37' }}> *</span>
          </label>
          {isRideshare ? (
            <div className="flex gap-2">
              {['Uber', 'Lyft'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setQual1(opt)}
                  className={`qual-option flex-1 text-center ${qual1 === opt ? 'selected' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <select className="form-input" value={qual1} onChange={e => setQual1(e.target.value)}>
              <option value="">Select…</option>
              {campaign.qualifiers.map(q => <option key={q} value={q}>{q}</option>)}
            </select>
          )}
          {errors.qual1 && <p className="text-red-500 text-xs mt-1">{errors.qual1}</p>}
        </div>

        {/* Qualifier 2 */}
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
            {isRideshare ? 'What type of conduct occurred?' : 'Have you received a related diagnosis?'}
            <span style={{ color: '#d4af37' }}> *</span>
          </label>
          {isRideshare ? (
            <select className="form-input" value={qual2} onChange={e => setQual2(e.target.value)}>
              <option value="">Select the type of conduct…</option>
              <option>Forced oral sex</option>
              <option>Forced sexual intercourse</option>
              <option>Inappropriate/unwanted touching of non-sexual body parts</option>
              <option>Inappropriate/unwanted touching or kissing of sexual body parts</option>
              <option>Indecent exposure</option>
              <option>Kidnapping or false imprisonment with sexual or physical threats</option>
              <option>Masturbation</option>
              <option>Verbal assault</option>
              <option>Other conduct not listed above</option>
            </select>
          ) : (
            <div className="flex gap-2">
              {['Yes', 'No', 'Not Sure'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setQual2(opt)}
                  className={`qual-option flex-1 text-center ${qual2 === opt ? 'selected' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
          {errors.qual2 && <p className="text-red-500 text-xs mt-1">{errors.qual2}</p>}
        </div>

        {/* Rideshare: proof of ride */}
        {isRideshare && (
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              Do you have proof or a receipt for the ride? <span style={{ color: '#d4af37' }}>*</span>
            </label>
            <div className="flex gap-2">
              {['Yes', 'No'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setQual3(opt); setProofOfRide(opt) }}
                  className={`qual-option flex-1 text-center ${qual3 === opt ? 'selected' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rideshare: incident year */}
        {isRideshare && (
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              What year did the incident occur?
            </label>
            <select className="form-input" value={incidentYear} onChange={e => setIncidentYear(e.target.value)}>
              <option value="">Select year…</option>
              {[2026,2025,2024,2023,2022,2021,2020].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        )}

        {/* Rideshare: gender */}
        {isRideshare && (
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              What is your gender?
            </label>
            <div className="flex gap-2">
              {['Male', 'Female', 'Prefer not to say'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setGender(opt)}
                  className={`qual-option flex-1 text-center text-xs ${gender === opt ? 'selected' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Talc: proof */}
        {isTalc && (
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
              Do you have medical records or proof of diagnosis?
            </label>
            <div className="flex gap-2">
              {['Yes', 'No', 'Not Sure'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setQual3(opt)}
                  className={`qual-option flex-1 text-center ${qual3 === opt ? 'selected' : ''}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Attorney */}
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
            Are you currently represented by an attorney? <span style={{ color: '#d4af37' }}>*</span>
          </label>
          <div className="flex gap-2">
            {['Yes', 'No'].map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => setAttorney(opt)}
                className={`qual-option flex-1 text-center ${attorney === opt ? 'selected' : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
          {errors.attorney && <p className="text-red-500 text-xs mt-1">{errors.attorney}</p>}
        </div>

        {/* State */}
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
            State of Residence <span style={{ color: '#d4af37' }}>*</span>
          </label>
          <select className="form-input" value={stateVal} onChange={e => setStateVal(e.target.value)}>
            <option value="">Select your state…</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>

        {/* Contact info — only if direct (not from homepage) */}
        {!fromHome && (
          <>
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
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                Email Address <span style={{ color: '#d4af37' }}>*</span>
              </label>
              <input className="form-input" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} maxLength={255} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </>
        )}

        {/* City (always shown) */}
        {!fromHome && (
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>City</label>
            <input className="form-input" placeholder="Your city" value={city} onChange={e => setCity(e.target.value)} maxLength={60} />
          </div>
        )}

        {/* Confidentiality note */}
        <div className="shield-note">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Protected by attorney-client privilege. 100% confidential.</span>
        </div>

        {/* TCPA Consent */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            className="mt-0.5 flex-shrink-0"
            style={{ accentColor: '#d4af37', width: '14px', height: '14px' }}
          />
          <span className="consent-text">
            I agree to the{' '}
            <a href="https://privacy.altrck4.com/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            {' '}and consent to be contacted by phone and email by the legal team about my potential claim.
            No purchase necessary. This is attorney advertising.
          </span>
        </label>
        {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="btn-gold w-full py-3 rounded-xl text-sm font-bold disabled:opacity-70 mt-1"
        >
          {submitting ? (
            <>
              <svg className="animate-spin" width="14" height="14" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting…
            </>
          ) : 'Submit My Free Case Review'}
        </button>
      </div>
    </div>
  )
}
