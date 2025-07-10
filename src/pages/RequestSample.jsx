import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import products from '../data/products'      // your product list

const API_URL = import.meta.env.VITE_API_URL || ''

const RequestSample = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    productId: '',
    quantity: '',
    notes: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, productId, quantity } = form

    if (!name || !email || !productId || !quantity) {
      toast.error(t('sample.error'))
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/sample`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          productId: form.productId,
          quantity: Number(form.quantity),
          notes: form.notes
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Server error')

      toast.success(t('sample.sent'))
      setForm({
        name: '',
        email: '',
        productId: '',
        quantity: '',
        notes: ''
      })
    } catch (err) {
      console.error(err)
      toast.error(t('sample.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">{t('sample.title')}</h1>
      <p className="mb-6">{t('sample.description')}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">{t('sample.namePlaceholder')}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('sample.namePlaceholder')}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">{t('sample.emailPlaceholder')}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('sample.emailPlaceholder')}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">{t('sample.productPlaceholder')}</label>
          <select
            name="productId"
            value={form.productId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">{t('sample.productPlaceholder')}</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">{t('sample.quantityPlaceholder')}</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder={t('sample.quantityPlaceholder')}
            min="1"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">{t('sample.notesPlaceholder')}</label>
          <textarea
            name="notes"
            type="text"
            value={form.notes}
            onChange={handleChange}
            placeholder={t('sample.notesPlaceholder')}
            rows={3}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#005377] text-white rounded hover:bg-[#003f54] transition"
        >
          {loading ? t('sample.sending') : t('sample.sendButton')}
        </button>
      </form>
    </section>
  )
}

export default RequestSample
