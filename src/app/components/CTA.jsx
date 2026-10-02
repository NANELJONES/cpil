'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from './Button'

export default function CTA() {
  return <motion.section className="owner-cta" id="property-owners" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
    <div className="owner-cta-inner">
      <div><span className="eyebrow" style={{ color: '#d2bd98' }}>For property owners</span><h2>Have a property to sell, lease or manage?</h2><p>Tell us what you are looking to achieve. Our team will help you explore the right next step for your property.</p></div>
      <Link href="/contactUs"><Button variant="primary">Talk to our team <span aria-hidden="true">↗</span></Button></Link>
    </div>
  </motion.section>
}
