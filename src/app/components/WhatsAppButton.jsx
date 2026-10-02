'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phoneNumber = '233598025207'
  const message = encodeURIComponent('Hello Century Property Investment, I would like to make an inquiry.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-white/80"
      aria-label="Contact us on WhatsApp"
    >
      <span className="relative flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/90"></span>
      </span>
      <FaWhatsapp className="w-7 h-7 text-white" />
      <div className="hidden md:flex flex-col text-left pr-1">
        <span className="text-[10px] uppercase font-bold tracking-wider opacity-90 leading-tight">Chat with us</span>
        <span className="text-xs font-semibold leading-tight">+233 59 802 5207</span>
      </div>
    </motion.a>
  )
}

export default WhatsAppButton
