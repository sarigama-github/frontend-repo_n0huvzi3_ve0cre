import { motion } from 'framer-motion'

const testimonials = [
  { name: 'M. Steiner', role: 'Unternehmer aus Zürich', quote: 'Extrem professionell, transparent und effizient. Ich habe endlich volle Übersicht.' },
  { name: 'S. Keller', role: 'Privatkunde', quote: 'Top Beratung und schnelle Abwicklung – genau so stelle ich mir moderne Versicherungen vor.' },
  { name: 'A. Favre', role: 'HR-Leiterin', quote: 'Unsere Kollektivlösung wurde perfekt aufgesetzt und laufend optimiert.' },
]

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Kundenstimmen</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.name} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700 leading-7">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">{t.name} • {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
