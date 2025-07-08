// src/components/Hero.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full h-screen">
      <img
        src={assets.hero_img}
        alt={t('hero.alt')}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Headline */}
        <h1 className="montserrat-700 text-4xl sm:text-4xl lg:text-5xl text-white mb-4">
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p className="montserrat-400 max-w-xl text-base sm:text-lg text-gray-200 mb-6">
          {t('hero.subhead')}
        </p>

        {/* CTAs */}
        <div className="flex gap-4">
          <Link
            to="/request-sample"
            className="montserrat-400 px-6 py-3 bg-[#C62828] text-white rounded-md"
          >
            {t('hero.ctaRequest')}
          </Link>
          <Link
            to="/apply-supplier"
            className="montserrat-400 px-6 py-3 border-2 border-white text-white rounded-md"
          >
            {t('hero.ctaSupplier')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
