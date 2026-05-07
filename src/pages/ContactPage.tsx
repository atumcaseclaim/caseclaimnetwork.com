import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UrgencyBar from '@/components/UrgencyBar'
import { LogoIcon } from '@/components/Logo'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Required'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    if (!message.trim()) e.message = 'Please include a message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch('https://formsubmit.co/info@caseclaimnetwork.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
    } catch (_) {}
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <Navbar />

      {/* Hero */}
      <section
        className="hero-bg py-16 px-5 text-center"
        style={{ minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div>
          <div className="sec-tag mb-3">Get In Touch</div>
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <div className="gold-bar mx-auto mt-3" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: '#0a1f35' }}>We're Here to Help</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#3d4d6a' }}>
              Have a question about a case, need help with your submission, or want to learn more about our campaigns?
              Send us a message and our team will get back to you promptly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: '#0a1f35' }}>Email</div>
                  <a href="mailto:info@caseclaimnetwork.com" className="text-sm" style={{ color: '#b8860b' }}>
                    info@caseclaimnetwork.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: '#0a1f35' }}>Confidentiality</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#3d4d6a' }}>
                    All communications are protected and kept strictly confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: '#0a1f35' }}>Response Time</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#3d4d6a' }}>
                    We aim to respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
              <p className="text-xs leading-relaxed font-medium" style={{ color: '#0a1f35' }}>
                ⚖️ <strong>For case inquiries</strong>, please use our dedicated case review forms on each campaign page for faster processing and attorney assignment.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-base p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg,#d4af37,#b8860b)' }}
                >
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#06111f" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#0a1f35' }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: '#3d4d6a' }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-base font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#0a1f35' }}>
                  Send a Message
                </h3>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                    Full Name <span style={{ color: '#d4af37' }}>*</span>
                  </label>
                  <input className="form-input" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} maxLength={100} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                    Email Address <span style={{ color: '#d4af37' }}>*</span>
                  </label>
                  <input className="form-input" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} maxLength={255} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                    Phone Number <span style={{ color: 'rgba(130,145,170,0.7)' }}>(optional)</span>
                  </label>
                  <input className="form-input" type="tel" placeholder="(555) 555-5555" value={phone} onChange={e => setPhone(e.target.value)} maxLength={20} />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#0a1f35' }}>
                    Message <span style={{ color: '#d4af37' }}>*</span>
                  </label>
                  <textarea
                    className="form-input resize-none"
                    rows={4}
                    placeholder="How can we help you?"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    maxLength={2000}
                    style={{ resize: 'none' }}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="btn-gold w-full py-3 rounded-xl text-sm font-bold disabled:opacity-70"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-xs text-center" style={{ color: '#8491aa' }}>
                  By submitting, you agree to our{' '}
                  <a href="https://privacy.altrck4.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#b8860b' }}>
                    Privacy Policy
                  </a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
