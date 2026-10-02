'use client'

import React from 'react'
import { HiPhone, HiChat } from 'react-icons/hi'
import Image from 'next/image'

const ContactForm = ({ property }) => {
  // Company information - you can move this to a config file or env variables
  const companyInfo = {
    name: 'Century Property Investment Limited',
    logo: '/brand/1.png',
    phone: '+233 59 802 5207',
    whatsapp: '+233 59 802 5207',
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello, I'm interested in this property: ${property?.title || ''}`)
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${companyInfo.phone}`
  }

  return (
    <div className="bg-white border border-[#e8e5df] p-6">
      <div className="flex items-center gap-4 mb-6">
        {companyInfo.logo && (
          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
            <Image
              src={companyInfo.logo}
              alt={companyInfo.name}
              fill
              className="object-contain p-2"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-slate-900">{companyInfo.name}</h3>
          <p className="text-slate-500 text-sm">Contact us today</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-slate-700">
          <HiPhone className="w-5 h-5 text-secondary flex-shrink-0" />
          <a 
            href={`tel:${companyInfo.phone}`}
            className="hover:text-primary transition-colors"
          >
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#293a2e] hover:bg-primary text-white px-6 py-3 font-medium transition-all flex items-center justify-center gap-2"
        >
          <HiChat className="w-5 h-5" />
          Contact via WhatsApp
        </button>
        <button
          onClick={handleCall}
          className="w-full bg-white hover:bg-[#f4f1eb] text-slate-800 px-6 py-3 font-medium transition-all border border-slate-200 flex items-center justify-center gap-2"
        >
          <HiPhone className="w-5 h-5" />
          Call Now
        </button>
      </div>
    </div>
  )
}

export default ContactForm

