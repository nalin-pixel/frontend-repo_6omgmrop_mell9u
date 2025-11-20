export default function Testimonials() {
  const reviews = [
    { name: "Giulia R.", text: "Servizio impeccabile, puntuali e precisi. La mia casa non è mai stata così pulita!" },
    { name: "Studio Alfa", text: "Uffici sempre in ordine. Team affidabile e disponibile alle esigenze." },
    { name: "Condominio Verdi", text: "Ottimo servizio sulle parti comuni, consigliati!" },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Dicono di noi</h2>
        <p className="mt-2 text-slate-600 text-center">Recensioni reali dei nostri clienti</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.name} className="rounded-xl ring-1 ring-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white shadow-sm">
              <div className="text-amber-400 text-xl">★★★★★</div>
              <p className="mt-3 text-slate-700">{r.text}</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
