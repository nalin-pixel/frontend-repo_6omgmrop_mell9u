import { useState } from 'react'

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    square_meters: '',
    frequency: '',
    message: '',
  })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', msg: 'Invio in corso...' })
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          square_meters: form.square_meters ? parseInt(form.square_meters) : null,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Errore durante l\'invio')
      setStatus({ state: 'success', msg: 'Richiesta inviata con successo! Ti contatteremo a breve.' })
      setForm({ name: '', email: '', phone: '', service_type: '', square_meters: '', frequency: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', msg: err.message })
    }
  }

  return (
    <section id="preventivo" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Richiedi un preventivo</h2>
        <p className="mt-2 text-slate-600 text-center">Rispondi a poche domande, ti ricontattiamo entro 24 ore</p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl ring-1 ring-slate-200 shadow">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Nome e Cognome</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Telefono</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Tipo di servizio</label>
            <select name="service_type" value={form.service_type} onChange={handleChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500">
              <option value="">Seleziona</option>
              <option>Pulizie domestiche</option>
              <option>Uffici</option>
              <option>Condomini</option>
              <option>Post-cantiere</option>
              <option>Vetrate</option>
              <option>Altro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Metri quadri (facoltativo)</label>
            <input name="square_meters" value={form.square_meters} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Frequenza</label>
            <select name="frequency" value={form.frequency} onChange={handleChange} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500">
              <option value="">Seleziona</option>
              <option>Una tantum</option>
              <option>Settimanale</option>
              <option>Quindicinale</option>
              <option>Mensile</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Messaggio</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          {status.state !== 'idle' && (
            <div className={`sm:col-span-2 text-sm ${status.state === 'success' ? 'text-emerald-700' : status.state === 'error' ? 'text-red-700' : 'text-slate-600'}`}>
              {status.msg}
            </div>
          )}
          <div className="sm:col-span-2">
            <button disabled={status.state==='loading'} type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition">
              {status.state==='loading' ? 'Invio...' : 'Invia richiesta'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
