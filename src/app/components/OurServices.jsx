'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  ['01', 'Buy or rent', 'Find a home or workspace that fits your priorities, with guidance through each step of the search.'],
  ['02', 'Sell or lease', 'Position your property thoughtfully and connect with people looking for the right place.'],
  ['03', 'Property management', 'Practical support to help owners care for their property and manage the day-to-day.'],
  ['04', 'Investment guidance', 'Make informed property decisions with clear conversations about your goals and options.'],
]

export default function OurServices() {
  return <section className="services-section">
    <div className="section-shell">
      <div className="section-heading"><div><span className="eyebrow">How we can help</span><h2>Property, made more personal.</h2></div><p>Whether you are moving, investing or looking after a property, we are here to make the next step feel clear.</p></div>
      <div>{services.map(([number, title, body], index) => <motion.article key={number} className="service-row" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><b>{number}</b><h3>{title}</h3><p>{body}</p></motion.article>)}</div>
      <Link href="/contactUs" className="text-link">Discuss what you need <span aria-hidden="true">↗</span></Link>
    </div>
  </section>
}
