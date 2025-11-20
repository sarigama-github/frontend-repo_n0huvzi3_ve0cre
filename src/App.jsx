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
      {/* Minimal top navigation */}
      <header className="fixed top-0 inset-x-0 z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-slate-900" />
            <span className="font-medium tracking-tight">Schweizer Versicherungsbroker</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Leistungen</a>
            <a href="#why" className="hover:text-slate-900">Warum wir</a>
            <a href="#team" className="hover:text-slate-900">Team</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

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
