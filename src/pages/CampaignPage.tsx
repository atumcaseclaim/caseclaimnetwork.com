import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UrgencyBar from '@/components/UrgencyBar'
import CampaignForm from '@/components/CampaignForm'
import FAQAccordion from '@/components/FAQAccordion'
import { getCampaign, campaigns } from '@/data/campaigns'

interface Props { slug: string }

export default function CampaignPage({ slug }: Props) {
  const campaign = getCampaign(slug)
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  if (!campaign) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#0a1f35' }}>Campaign Not Found</h1>
        <Link to="/" className="text-sm" style={{ color: '#b8860b' }}>← Back to Home</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar message={`${campaign.badge}: Filing deadlines apply — complete your free case review below.`} />
      <Navbar />

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />

        <div className="max-w-6xl mx-auto px-5 py-16 w-full grid md:grid-cols-2 gap-10 items-start">
          {/* Copy */}
          <div className="text-white pt-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#d4af37' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d4af37' }}>
                {campaign.badge} · Cases Being Accepted
              </span>
            </div>

            <h1
              className="font-bold leading-tight mb-4 text-white"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontFamily: "'Playfair Display', serif" }}
            >
              {campaign.headline}
            </h1>

            <div className="gold-bar mb-5" />

            <p className="leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem' }}>
              {campaign.subheadline}
            </p>

            <div className="risk-badge mb-5">
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#fca5a5" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Risk: <strong style={{ color: '#fecaca' }}>{campaign.risk}</strong>
            </div>

            <div className="flex flex-wrap gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                No fee unless you win
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                100% Confidential
              </span>
            </div>
          </div>

          {/* Form card */}
          <div ref={formRef} className="card-base p-6 md:p-7 shadow-2xl">
            <div className="mb-4">
              <div className="sec-tag mb-2">{campaign.shortName} Case Evaluation</div>
              <h2 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#0a1f35' }}>
                Get Your Free Case Review
              </h2>
              <p className="text-xs mt-1" style={{ color: '#8491aa' }}>Takes less than 2 minutes. No obligation.</p>
            </div>
            <CampaignForm campaign={campaign} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="sec-tag mb-3">About This Case</div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: '#0a1f35' }}>About This Lawsuit</h2>
              <div className="gold-bar mb-5" />
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#3d4d6a' }}>{campaign.description}</p>
              <div
                className="p-3.5 rounded-lg text-xs font-semibold"
                style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.18)', color: '#0a1f35' }}
              >
                {campaign.settlementNote}
              </div>
            </div>

            <div className="space-y-4">
              {/* Qualifiers */}
              <div className="card-base p-4">
                <h4 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#0a1f35' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                  You May Qualify If:
                </h4>
                <ul className="space-y-2">
                  {campaign.qualifiers.map(q => (
                    <li key={q} className="text-xs flex items-start gap-2" style={{ color: '#3d4d6a' }}>
                      <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: '#d4af37' }}>✓</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Symptoms */}
              <div className="card-base p-4">
                <h4 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: '#0a1f35' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#b91c1c" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  Related Symptoms:
                </h4>
                <ul className="space-y-1.5">
                  {campaign.symptoms.map(s => (
                    <li key={s} className="text-xs flex items-start gap-2" style={{ color: '#3d4d6a' }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: '#b91c1c' }}>•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ background: '#f8f9fb' }}>
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold" style={{ color: '#0a1f35' }}>{campaign.shortName} — FAQ</h2>
            <div className="gold-bar mx-auto mt-3" />
          </div>
          <FAQAccordion items={campaign.faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-14 text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Check Your {campaign.shortName} Eligibility?
          </h2>
          <div className="gold-bar mx-auto my-4" />
          <p className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.55)' }}>
            No cost, no obligation. Every case is reviewed personally within 24 hours.
          </p>
          <button onClick={scrollToForm} className="btn-gold px-10 py-3.5 rounded-xl text-sm font-bold">
            Start My Free Case Review
          </button>
        </div>
      </section>

      {/* Other campaigns */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-xs font-medium mb-3" style={{ color: '#8491aa' }}>Other active campaigns:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {campaigns.filter(c => c.slug !== slug).map(c => (
              <Link
                key={c.id}
                to={`/${c.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all border"
                style={{ borderColor: '#e2e6ef', color: '#3d4d6a' }}
              >
                {c.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
