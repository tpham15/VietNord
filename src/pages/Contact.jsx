import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})          // field validation errors
  const [status, setStatus] = useState('')          // '', 'sending', 'success', 'error'

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: null }))  // clear field error on change
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    setErrors({})

    // Front-end required-field check
    const frontErrors = {}
    if (!form.name.trim())    frontErrors.name    = t('contact.nameRequired')
    if (!form.email.trim())   frontErrors.email   = t('contact.emailRequired')
    if (!form.message.trim()) frontErrors.message = t('contact.messageRequired')
    if (Object.keys(frontErrors).length) {
      setErrors(frontErrors)
      return setStatus('error')
    }

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })

      if (res.status === 400) {
        const data = await res.json()
        setErrors(data.errors || {})
        return setStatus('error')
      }
      if (!res.ok) throw new Error('Network error')

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  let buttonText = t('contact.sendButton')
  if (status === 'sending') buttonText = t('contact.sending')
  else if (status === 'success') buttonText = t('contact.sent')

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="montserrat-700 text-2xl mb-4">{t('contact.title')}</h2>
        <p className="montserrat-400 text-gray-700 mb-6">{t('contact.description')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              className={`w-full p-3 border rounded focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              className={`w-full p-3 border rounded focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              className={`w-full p-3 border rounded focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="montserrat-600 w-full py-3 bg-[#C62828] text-white rounded-md hover:bg-red-600 transition"
          >
            {buttonText}
          </button>

          {status === 'error' && !Object.keys(errors).length && (
            <p className="mt-4 text-red-600">{t('contact.error')}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
