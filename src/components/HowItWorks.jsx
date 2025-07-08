// src/components/HowItWorks.jsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  HiOutlineDocumentText,
  HiOutlineChatAlt2,
  HiOutlineTruck
} from 'react-icons/hi'

const steps = [
  {
    icon: HiOutlineDocumentText,
    titleKey: 'howItWorks.step1Title',
    descKey:  'howItWorks.step1Desc'
  },
  {
    icon: HiOutlineChatAlt2,
    titleKey: 'howItWorks.step2Title',
    descKey:  'howItWorks.step2Desc'
  },
  {
    icon: HiOutlineTruck,
    titleKey: 'howItWorks.step3Title',
    descKey:  'howItWorks.step3Desc'
  }
]

const HowItWorks = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="open-sans-700 text-3xl mb-12">
          {t('howItWorks.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map(step => {
            const IconComponent = step.icon
            return (
              <div key={step.titleKey} className="flex flex-col items-center">
                <div className="p-4 bg-[#005377] text-white rounded-full mb-4">
                  <IconComponent size={32} />
                </div>
                <h3 className="open-sans-600 text-xl mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="open-sans-400 text-gray-600">
                  {t(step.descKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
