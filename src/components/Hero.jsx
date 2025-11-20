export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_25%),radial-gradient(circle_at_80%_30%,#34d399,transparent_25%),radial-gradient(circle_at_50%_80%,#93c5fd,transparent_25%)]" />
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700 mb-4">Impresa di pulizie professionale</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            VD Pulizie
            <span className="block text-emerald-600">spazi impeccabili, clienti felici</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Servizi di pulizia accurati per case, uffici e condomini. Puntualità, affidabilità e risultati
            che fanno la differenza. Richiedi un preventivo gratuito in meno di 60 secondi.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#preventivo" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
              Richiedi Preventivo
            </a>
            <a href="#servizi" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-slate-800 font-semibold shadow ring-1 ring-slate-200 hover:bg-slate-50 transition">
              Scopri i Servizi
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            • Risposta entro 24h • Copertura locale • Preventivo senza impegno
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-emerald-50" />
            <div className="rounded-xl bg-blue-50" />
            <div className="rounded-xl bg-sky-50" />
            <div className="rounded-xl bg-teal-50" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow ring-1 ring-slate-200 px-4 py-3 text-sm">
            150+ ambienti igienizzati quest'anno
          </div>
        </div>
      </div>
    </section>
  )
}
