import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UrgencyBar from '@/components/UrgencyBar'
import HomeLeadForm from '@/components/HomeLeadForm'
import FAQAccordion from '@/components/FAQAccordion'
import { campaigns } from '@/data/campaigns'

const homeFAQs = [
  { q: 'How much does it cost to get started?', a: 'Absolutely nothing. We work on a contingency fee basis — you pay nothing unless we win your case. There are no hidden fees or upfront costs.' },
  { q: 'How do I know if I qualify?', a: 'Complete our free 2-minute evaluation. Our specialists will review your information and contact you within 24 hours to discuss your eligibility.' },
  { q: 'How long do I have to file?', a: 'Statutes of limitations vary by state and case type. Time is critical — contact us today to protect your rights before deadlines pass.' },
  { q: 'Is my information kept confidential?', a: 'Yes. All information you share is protected by attorney-client privilege and is completely confidential. We will never sell or share your personal information.' },
]

export default function Index() {
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <Navbar />

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

        <div className="max-w-6xl mx-auto px-5 py-16 w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="animate-fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#d4af37' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d4af37' }}>
                6 Active Campaigns · Accepting Cases Now
              </span>
            </div>

            <h1
              className="font-bold leading-tight mb-5 text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontFamily: "'Playfair Display', serif" }}
            >
              Were You Harmed by a{' '}
              <em style={{ color: '#d4af37', fontStyle: 'normal' }}>Dangerous Drug</em>
              {' '}or Product?
            </h1>

            <div className="gold-bar mb-5" />

            <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.0625rem' }}>
              Case Claim Network connects injury victims with top mass tort attorneys —{' '}
              <strong style={{ color: '#fff' }}>at no cost to you</strong> unless you win your case.
            </p>

            <div className="flex flex-wrap gap-5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                No fee unless you win
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                2-minute intake
              </span>
            </div>
          </div>

          {/* Form card */}
          <div ref={formRef} className="card-base p-6 md:p-7 shadow-2xl animate-fade-in-delay w-full max-w-md md:ml-auto">
            <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: '#0a1f35' }}>
              Start Your Free Case Review
            </h2>
            <p className="text-xs mb-4" style={{ color: '#8491aa' }}>2 quick steps. No obligation. Completely free.</p>
            <HomeLeadForm />
          </div>
        </div>
      </section>

      {/* CAMPAIGN CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="sec-tag mb-3">Active Campaigns</div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#0a1f35' }}>Currently Accepting Cases</h2>
            <div className="gold-bar mx-auto" />
            <p className="mt-4 text-sm" style={{ color: '#8491aa' }}>
              Select a campaign below to start your dedicated case evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {campaigns.map(c => (
              <Link
                key={c.id}
                to={`/${c.slug}`}
                className="card-base card-hover group overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div
                  className="h-16 flex items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg, #030c17, #0c2743)' }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(212,175,55,0.65)' }}>
                    {c.tagline}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-sm mb-1.5" style={{ fontFamily: "'Playfair Display', serif", color: '#0a1f35' }}>
                    {c.shortName}
                  </h3>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-2.5"
                    style={{ background: 'rgba(185,28,28,0.07)', color: '#b91c1c', border: '1px solid rgba(185,28,28,0.12)' }}
                  >
                    {c.risk}
                  </span>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#3d4d6a' }}>{c.subheadline}</p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold transition-all group-hover:underline" style={{ color: '#b8860b' }}>
                      Check My Eligibility →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16" style={{ background: '#f8f9fb' }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="sec-tag mb-3">Simple Process</div>
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#0a1f35' }}>How It Works</h2>
          <div className="gold-bar mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Submit Your Info', desc: 'Complete our quick intake form. We confirm eligibility at no cost to you.' },
              { n: '02', title: 'Free Consultation', desc: 'A specialist contacts you within 24 hours — confidential and no-obligation.' },
              { n: '03', title: 'We Fight, You Win', desc: 'Our attorneys pursue maximum compensation. You pay nothing unless we win.' },
            ].map(s => (
              <div key={s.n} className="flex flex-col items-center gap-3 text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ background: 'linear-gradient(135deg,#d4af37,#b8860b)', color: '#06111f', fontFamily: "'Playfair Display', serif", boxShadow: '0 4px 14px rgba(212,175,55,0.38)' }}
                >
                  {s.n}
                </div>
                <h4 className="font-bold text-sm" style={{ color: '#0a1f35' }}>{s.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#3d4d6a' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-8">
            <div className="sec-tag mb-3">FAQ</div>
            <h2 className="text-3xl font-bold" style={{ color: '#0a1f35' }}>Common Questions</h2>
            <div className="gold-bar mx-auto mt-4" />
          </div>
          <FAQAccordion items={homeFAQs} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-dark py-16 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-white mb-3">Time Is Running Out to File Your Claim</h2>
          <div className="gold-bar mx-auto my-4" />
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Statutes of limitations vary by state. Acting now protects your right to compensation.
          </p>
          <button onClick={scrollToForm} className="btn-gold px-10 py-3.5 rounded-xl text-sm font-bold">
            Get My Free Case Review Now
          </button>
          <div className="flex items-center justify-center gap-6 mt-5 text-xs flex-wrap" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              No upfront cost
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#d4af37" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              2-min intake
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
