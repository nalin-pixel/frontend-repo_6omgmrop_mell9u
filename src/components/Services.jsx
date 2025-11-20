export default function Services() {
  const items = [
    {
      title: "Pulizie domestiche",
      desc: "Cura completa per appartamenti e ville: pavimenti, bagni, cucine e superfici.",
      icon: "🏠",
    },
    {
      title: "Uffici e negozi",
      desc: "Ambienti di lavoro impeccabili per produttività e immagine professionale.",
      icon: "🏢",
    },
    {
      title: "Condomini",
      desc: "Scale, androni e spazi comuni sempre puliti e profumati.",
      icon: "🏢",
    },
    {
      title: "Post-cantiere",
      desc: "Rimozione polveri e residui per consegne perfette post lavori.",
      icon: "🧱",
    },
    {
      title: "Vetrate e vetrine",
      desc: "Vetri brillanti senza aloni per abitazioni e attività commerciali.",
      icon: "🪟",
    },
    {
      title: "Sanificazioni",
      desc: "Interventi mirati per ambienti più sicuri.",
      icon: "🧼",
    },
  ]

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Servizi</h2>
        <p className="mt-2 text-slate-600 text-center">Soluzioni su misura per privati, uffici e strutture</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl ring-1 ring-slate-200 shadow-sm bg-gradient-to-br from-slate-50 to-white">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
