import { motion } from 'framer-motion'
import { CheckCircle2, Scale, Clock, ShieldCheck } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Vertrauen & Sicherheit', desc: 'FINMA-konform, unabhängig und kompromisslos kundenorientiert.' },
  { icon: Scale, title: 'Schweizer Präzision', desc: 'Sorgfältige Analyse, transparente Empfehlungen, klare Sprache.' },
  { icon: Clock, title: 'Schnell & digital', desc: 'Digitale Prozesse, persönliche Ansprechpartner – ohne Umwege.' },
  { icon: CheckCircle2, title: 'Langfristige Begleitung', desc: 'Wir bleiben an Ihrer Seite – vom Abschluss bis zum Schadensfall.' },
]

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Warum wir</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({icon:Icon, title, desc}, i) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="w-6 h-6 text-slate-700" />
              <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
