'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiShieldCheck, 
  HiLightningBolt, 
  HiUserGroup, 
  HiChartBar,
  HiStar,
  HiClock
} from 'react-icons/hi'

// Reasons data
const reasons = [
  {
    id: 1,
    title: "Transparency",
    description: "Clear conversations and straightforward guidance at every stage of your property journey.",
    icon: HiShieldCheck
  },
  {
    id: 2,
    title: "Innovation Always",
    description: "Thoughtful use of digital tools helps make property discovery and communication more convenient.",
    icon: HiLightningBolt
  },
  {
    id: 3,
    title: "Client Focused",
    description: "We take time to understand what matters to you and tailor our support to your priorities.",
    icon: HiUserGroup
  },
  {
    id: 4,
    title: "Local Perspective",
    description: "Our work is grounded in the Ghanaian property market and the needs of the people who use it.",
    icon: HiChartBar
  },
  {
    id: 5,
    title: "Excellence in Service",
    description: "A considered, personal approach keeps each conversation focused on your needs.",
    icon: HiStar
  },
  {
    id: 6,
    title: "Timely Execution",
    description: "We aim to keep each step organised and make the next action easy to understand.",
    icon: HiClock
  }
]

const WhyUs = () => {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Question */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="huge_text text-slate-900 leading-tight">
              Why work with
              <br />
              CPIL?
            </h2>
          </motion.div>

          {/* Right Side - Reasons Grid (2x3) */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon
                
                return (
                  <motion.div
                    key={reason.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Title */}
                      <h5 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                        {reason.title}:
                      </h5>
                      
                      {/* Description */}
                      <p className="!text-[0.8em] text-slate-600 leading-relaxed mb-3">
                        {reason.description}
                      </p>
                      
                      {/* Underline */}
                      <div className="w-full h-px bg-slate-200"></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
