import { Link } from 'react-router-dom'
import { LogoFull } from './Logo'
import { campaigns } from '@/data/campaigns'

export default function Footer() {
  return (
    <footer style={{ background: '#06111f', borderTop: '1px solid rgba(212,175,55,0.12)' }}>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <LogoFull />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
            <a href="https://privacy.altrck4.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/65 transition-colors">Privacy Policy</a>
            <a href="https://terms-caseslaimnetwork-com.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white/65 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/65 transition-colors">Attorney Advertising</a>
            <Link to="/contact" className="hover:text-white/65 transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Campaign quick links */}
        <div className="flex flex-wrap gap-2 mb-8">
          {campaigns.map(c => (
            <Link
              key={c.id}
              to={`/${c.slug}`}
              className="text-xs font-medium px-3 py-1 rounded-full transition-colors"
              style={{
                background: 'rgba(212,175,55,0.07)',
                border: '1px solid rgba(212,175,55,0.18)',
                color: 'rgba(212,175,55,0.65)',
              }}
            >
              {c.shortName}
            </Link>
          ))}
        </div>

        <div
          className="border-t pt-6 text-xs leading-relaxed space-y-2"
          style={{ borderColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.28)' }}
        >
          <p>
            <strong className="text-white/40">Attorney Advertising.</strong> Prior results do not guarantee a similar outcome.
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
          </p>
          <p>
            © {new Date().getFullYear()} Case Claim Network. All rights reserved. No attorney-client relationship is created by submitting this form.
            By submitting your information, you consent to be contacted by a licensed attorney or their representative regarding your potential legal claim.
          </p>
        </div>
      </div>
    </footer>
  )
}
