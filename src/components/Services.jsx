import { motion } from 'framer-motion'
import { Shield, HeartPulse, Home, Car, Briefcase, Globe } from 'lucide-react'

const services = [
  { icon: Shield, title: 'Haftpflicht & Rechtsschutz', desc: 'Sichere Entscheidungen mit soliden Grundlagen.' },
  { icon: HeartPulse, title: 'Personenversicherung', desc: 'Kranken-, Unfall- und Vorsorgekonzepte, die tragen.' },
  { icon: Home, title: 'Sach- & Hausrat', desc: 'Ihr Eigentum – zuverlässig geschützt.' },
  { icon: Car, title: 'Fahrzeugversicherung', desc: 'Mobilität absichern – privat und geschäftlich.' },
  { icon: Briefcase, title: 'Business-Lösungen', desc: 'Risikomanagement und kollektive Vorsorge für Unternehmen.' },
  { icon: Globe, title: 'Reise & Spezial', desc: 'Maßgeschneiderte Deckungen für besondere Vorhaben.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Unsere Leistungen</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, desc}, i) => (
            <motion.div
              key={title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:i*0.05}}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-slate-50 p-3 text-slate-700 group-hover:text-slate-900 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-6">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
