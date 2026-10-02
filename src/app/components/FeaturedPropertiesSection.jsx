'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FeaturedProperties from './FeaturedProperties'

export default function FeaturedPropertiesSection() {
  return (
    <motion.section
      className="property-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .65 }}
    >
      <div className="section-shell">
        <div className="section-heading">
          <div><span className="eyebrow">From our collection</span><h2>Featured properties</h2></div>
          <p>Explore current homes, land and investment opportunities listed with CPIL.</p>
        </div>
        <FeaturedProperties variant="section" />
        <Link href="/properties" className="text-link">Explore all properties <span aria-hidden="true">↗</span></Link>
      </div>
    </motion.section>
  )
}
