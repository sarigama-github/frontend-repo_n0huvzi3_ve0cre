import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function CTA() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload.consent = !!payload.consent
    try {
      const res = await fetch(`${BACKEND_URL}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Fehler beim Senden')
      setStatus({ ok: true, msg: 'Vielen Dank! Wir melden uns zeitnah.' })
      e.currentTarget.reset()
    } catch (err){
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Lassen Sie uns sprechen</motion.h2>
          <p className="mt-4 text-slate-600">Unverbindliche Erstberatung. Büros in Zürich – Termine vor Ort oder digital.</p>
          <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-slate-700 text-sm">Standort: Zürich, Schweiz</p>
            <p className="text-slate-700 text-sm mt-1">E-Mail: kontakt@broker.ch</p>
            <p className="text-slate-700 text-sm mt-1">Telefon: +41 44 000 00 00</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-0" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">E-Mail</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-0" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600">Telefon</label>
              <input name="phone" className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-0" />
            </div>
            <div>
              <label className="block text-sm text-slate-600">Betreff</label>
              <input name="subject" className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-0" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-600">Nachricht</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-0" />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" name="consent" defaultChecked className="rounded border-slate-300" /> Ich stimme der Kontaktaufnahme und den Datenschutzbestimmungen zu.
          </label>
          <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md hover:bg-slate-800 transition-colors disabled:opacity-50">
            {loading ? 'Wird gesendet…' : 'Nachricht senden'}
          </button>
          {status && (
            <p className={`text-sm ${status.ok ? 'text-emerald-600' : 'text-red-600'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}
