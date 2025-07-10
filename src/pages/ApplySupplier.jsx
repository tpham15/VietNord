import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const API_BASE = import.meta.env.VITE_API_URL || ''  // e.g. https://vietnord-api.onrender.com

export default function ApplySupplier() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    products: '',
    message: ''
  })
  const [status, setStatus] = useState('') // '', 'sending','sent','error'

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE}/api/supplier`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('sent')
      setForm({ name: '', email: '', company: '', website: '', products: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  // Extract button text logic out of JSX to avoid nested ternary
  let buttonText
  if (status === 'sending') {
    buttonText = t('apply.sending')
  } else if (status === 'sent') {
    buttonText = t('apply.sent')
  } else {
    buttonText = t('apply.submit')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('apply.title')}</h2>
        <p className="mb-6">{t('apply.description')}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('apply.namePlaceholder')}
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder={t('apply.emailPlaceholder')}
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder={t('apply.companyPlaceholder')}
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder={t('apply.websitePlaceholder')}
            className="w-full p-3 border rounded"
          />
          <input
            name="products"
            value={form.products}
            onChange={handleChange}
            placeholder={t('apply.productsPlaceholder')}
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('apply.messagePlaceholder')}
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 bg-blue-600 text-white rounded"
          >
            {buttonText}
          </button>

          {status === 'error' && (
            <p className="text-red-600">{t('apply.error')}</p>
          )}
        </form>
      </div>
    </section>
  )
}
