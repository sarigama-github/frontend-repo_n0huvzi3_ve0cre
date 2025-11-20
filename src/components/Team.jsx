import { motion } from 'framer-motion'

const team = [
  { name: 'Laura Meier', title: 'Senior Brokerin', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Jonas Weber', title: 'Partner & Beratung', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Nora Schmid', title: 'Claims Management', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Unser Team</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div key={m.name} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-slate-900">{m.name}</h3>
                <p className="text-sm text-slate-600">{m.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
