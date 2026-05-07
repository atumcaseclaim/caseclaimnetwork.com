import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import CampaignPage from './pages/CampaignPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/depo-provera" element={<CampaignPage slug="depo-provera" />} />
        <Route path="/hair-relaxer" element={<CampaignPage slug="hair-relaxer" />} />
        <Route path="/talcum-powder" element={<CampaignPage slug="talcum-powder" />} />
        <Route path="/dupixent" element={<CampaignPage slug="dupixent" />} />
        <Route path="/ozempic" element={<CampaignPage slug="ozempic" />} />
        <Route path="/rideshare" element={<CampaignPage slug="rideshare" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
