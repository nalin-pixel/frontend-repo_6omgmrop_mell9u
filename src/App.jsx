import Hero from './components/Hero'
import Services from './components/Services'
import QuoteForm from './components/QuoteForm'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl text-slate-900">VD Pulizie</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#servizi" className="hover:text-emerald-600">Servizi</a>
            <a href="#preventivo" className="hover:text-emerald-600">Preventivo</a>
            <a href="/test" className="hover:text-emerald-600">Stato</a>
          </nav>
          <a href="#preventivo" className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-700 transition">
            Richiedi preventivo
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <QuoteForm />
        <Testimonials />
      </main>

      <footer className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-600">
          <div>
            <div className="font-bold text-slate-900">VD Pulizie</div>
            <p className="mt-2">Impresa di pulizie per case, uffici e condomini. Qualità, serietà e risultati.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contatti</div>
            <p className="mt-2">Telefono: +39 000 000 0000</p>
            <p>Email: info@vdpulizie.it</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Orari</div>
            <p className="mt-2">Lun - Sab: 8:00 - 19:00</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Zone coperte</div>
            <p className="mt-2">Provincia e zone limitrofe</p>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} VD Pulizie. Tutti i diritti riservati.</div>
      </footer>
    </div>
  )
}

export default App
