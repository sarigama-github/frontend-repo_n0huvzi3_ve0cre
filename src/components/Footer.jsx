export default function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Schweizer Versicherungsbroker. Alle Rechte vorbehalten.</div>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Datenschutz</a>
          <a href="#" className="hover:text-slate-900">Impressum</a>
          <a href="#contact" className="hover:text-slate-900">Kontakt</a>
        </nav>
      </div>
    </footer>
  )
}
