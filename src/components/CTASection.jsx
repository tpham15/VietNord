// src/components/CTASection.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CTASection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-[#005377]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="montserrat-700 text-3xl text-white mb-4">
          {t('ctaSection.heading')}
        </h2>
        <p className="montserrat-400 text-lg text-gray-200 mb-8">
          {t('ctaSection.subhead')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-sample"
            className="montserrat-600 px-6 py-3 bg-[#C62828] text-white rounded-md hover:bg-red-600 transition"
          >
            {t('ctaSection.requestSample')}
          </Link>
          <Link
            to="/apply-supplier"
            className="montserrat-600 px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-[#005377] transition"
          >
            {t('ctaSection.becomeSupplier')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
