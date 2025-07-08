// src/pages/RequestSample.jsx
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const RequestSample = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const [form, setForm]     = useState({ name: '', email: '', productId: '', quantity: '' })
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  // If you pass ?product=123 in the URL, prefill productId
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.has('product')) {
      setForm(f => ({ ...f, productId: params.get('product') }))
    }
  }, [location.search])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/sample', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setForm({ name: '', email: '', productId: '', quantity: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  let buttonText = t('sample.sendButton', 'Request Sample')
  if (status === 'sending') buttonText = t('sample.sending', 'Sending…')
  else if (status === 'success') buttonText = t('sample.sent', 'Sent!')

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="montserrat-700 text-2xl mb-4">{t('sample.title', 'Request a Sample')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder={t('sample.namePlaceholder', 'Your Name')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder={t('sample.emailPlaceholder', 'Your Email')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />
          <input
            name="productId"
            value={form.productId}
            onChange={handleChange}
            type="text"
            placeholder={t('sample.productPlaceholder', 'Product ID')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />
          <input
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            type="number"
            placeholder={t('sample.quantityPlaceholder', 'Quantity')}
            required
            className="w-full p-3 border rounded focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="montserrat-600 w-full py-3 bg-[#005377] text-white rounded-md hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
          {status === 'error' && (
            <p className="mt-4 text-red-600">{t('sample.error', 'Something went wrong. Please try again.')}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default RequestSample
