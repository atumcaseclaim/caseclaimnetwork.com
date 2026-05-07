import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-20 px-5">
        <div className="text-center">
          <div className="text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#d4af37' }}>404</div>
          <h1 className="text-2xl font-bold mb-3" style={{ color: '#0a1f35' }}>Page Not Found</h1>
          <p className="text-sm mb-8" style={{ color: '#8491aa' }}>The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-gold px-8 py-3 rounded-xl text-sm font-bold">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
