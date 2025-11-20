import SmoothHeader from './components/SmoothHeader'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Smooth floating header (no klassische Kopfzeile) */}
      <SmoothHeader />

      <main className="overflow-x-clip">
        <Hero />
        <div id="services"><Services /></div>
        <div id="why"><WhyUs /></div>
        <Testimonials />
        <div id="team"><Team /></div>
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
