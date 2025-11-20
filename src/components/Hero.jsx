import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium mb-6 shadow-sm">
            Schweizer Präzision • Unabhängige Beratung
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Absicherung mit Klarheit. Beratung mit Verantwortung.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Wir sind Ihr Schweizer Versicherungsbroker – digital, transparent und persönlich. 
            Maßgeschneiderte Lösungen, die wirklich passen.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md hover:bg-slate-800 transition-colors">
              Jetzt beraten lassen
            </a>
            <a href="#services" className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">
              Leistungen ansehen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
