import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

const API_URL = import.meta.env.VITE_API_URL || ''

const Contact = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = form

    if (!name || !email || !message) {
      toast.error(t('contact.error'))
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Server error')

      toast.success(t('contact.sent'))
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error(t('contact.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">{t('contact.title')}</h1>
      <p className="mb-6">{t('contact.description')}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">{t('contact.namePlaceholder')}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('contact.namePlaceholder')}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">{t('contact.emailPlaceholder')}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('contact.emailPlaceholder')}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#005377] text-white rounded hover:bg-[#003f54] transition"
        >
          {loading ? t('contact.sending') : t('contact.sendButton')}
        </button>
      </form>
    </section>
  )
}

export default Contact
