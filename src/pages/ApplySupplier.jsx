// src/pages/ApplySupplier.jsx
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
const API_URL = import.meta.env.VITE_API_URL || ''
const ApplySupplier = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    products: '',
    message: ''
  })
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      // we don't assign to `res` because we don't need to inspect it here
      await fetch('https://vietnord-api.onrender.com/api/supplier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm({
        name: '',
        email: '',
        company: '',
        website: '',
        products: '',
        message: ''
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  // button text logic
  let buttonText = t('apply.submit')           // e.g. “Submit Application”
  if (status === 'sending') buttonText = t('apply.sending')   // e.g. “Sending…”
  else if (status === 'success') buttonText = t('apply.sent')  // e.g. “Sent!”

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="montserrat-700 text-2xl mb-4">{t('apply.title')}</h2>
        <p className="montserrat-400 text-gray-700 mb-6">
          {t('apply.description')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder={t('apply.namePlaceholder')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder={t('apply.emailPlaceholder')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            type="text"
            placeholder={t('apply.companyPlaceholder')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />

          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            type="url"
            placeholder={t('apply.websitePlaceholder')}
            className="w-full p-3 border rounded focus:outline-none"
          />

          <input
            name="products"
            value={form.products}
            onChange={handleChange}
            type="text"
            placeholder={t('apply.productsPlaceholder')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder={t('apply.messagePlaceholder')}
            className="w-full p-3 border rounded focus:outline-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="montserrat-600 w-full py-3 bg-[#005377] text-white rounded-md hover:bg-[#004a62] transition"
          >
            {buttonText}
          </button>

          {status === 'error' && (
            <p className="mt-4 text-red-600">{t('apply.error')}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ApplySupplier
