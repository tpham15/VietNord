import React from 'react'
import { useTranslation } from 'react-i18next'
import { assets } from '../assets/assets'
import {
  HiOutlineBadgeCheck,
  HiOutlineTruck,
  HiOutlineDocumentText
} from 'react-icons/hi'

const services = [
  {
    key: 'verification',
    icon: HiOutlineBadgeCheck,
    titleKey: 'about.services.verification.title',
    descKey:  'about.services.verification.desc'
  },
  {
    key: 'logistics',
    icon: HiOutlineTruck,
    titleKey: 'about.services.logistics.title',
    descKey:  'about.services.logistics.desc'
  },
  {
    key: 'certification',
    icon: HiOutlineDocumentText,
    titleKey: 'about.services.certification.title',
    descKey:  'about.services.certification.desc'
  }
]

const About = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* What We Do */}
        <h2 className="montserrat-700 text-3xl mb-4 text-[#005377]">
          {t('about.title')}
        </h2>
        <div className="montserrat-400 text-left text-lg text-gray-700 space-y-4">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
        </div>

        {/* What Makes Us Different */}
        <h2 className="montserrat-700 text-3xl my-8 text-[#005377]">
          {t('about.diffTitle')}
        </h2>
        <ul className="montserrat-400 text-left text-lg text-gray-700 list-disc list-inside space-y-2">
          <li>{t('about.diffPoints.point1')}</li>
          <li>{t('about.diffPoints.point2')}</li>
          <li>{t('about.diffPoints.point3')}</li>
          <li>{t('about.diffPoints.point4')}</li>
        </ul>

        {/* CEO Section */}
        <div className="mt-12 flex flex-col items-center">
          <img
            src={assets.vienpham}
            alt={t('about.ceoName')}
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <p className="montserrat-700 text-xl mt-4">
            {t('about.ceoName')} — {t('about.ceoTitle')}
          </p>
          <blockquote className="montserrat-400 italic text-gray-600 mt-2 max-w-xl">
            {t('about.ceoQuote')}
          </blockquote>
        </div>
      </div>

      
      {/* Service Pillars */}
<div className="mt-16 bg-white py-12">
  <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
    {services.map(svc => {
      // Pull the icon constructor into a used variable
      const IconComponent = svc.icon

      return (
        <div key={svc.key} className="flex flex-col items-center">
          <div className="p-4 bg-[#005377] text-white rounded-full mb-4">
            <IconComponent size={32} />
          </div>
          <h3 className="montserrat-600 text-xl mb-2">
            {t(svc.titleKey)}
          </h3>
          <p className="montserrat-400 text-gray-600">
            {t(svc.descKey)}
          </p>
        </div>
      )
    })}
  </div>
</div>

    </section>
  )
}

export default About