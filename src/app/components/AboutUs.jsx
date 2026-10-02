'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const achievements = [
  { value: '15', suffix: '+', label: 'Years of experience' },
  { value: '100', suffix: '+', label: 'Properties' },
  { value: '195', suffix: '+', label: 'Closed deals' },
  { value: '200', suffix: '+', label: 'Clients' },
]

export default function AboutUs() {
  return (
    <section id="aboutUs" className="about-editorial">
      <div className="about-editorial-inner">
        <motion.div className="about-editorial-top" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
          <span className="eyebrow">About CPIL</span>
          <p>Property investment and real estate, guided by local knowledge.</p>
        </motion.div>

        <div className="about-editorial-feature">
          <motion.div className="about-editorial-image" initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}>
            <Image src="/brand/3.jpg" alt="A contemporary property representing CPIL’s real estate portfolio" fill sizes="(max-width: 800px) 100vw, 44vw" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}>
            About<br />Century Property<br /><em>Investment Limited</em>
          </motion.h2>
          <motion.div className="about-editorial-copy" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .12 }}>
            <p>Century Property Investment Limited (CPIL) is a Ghanaian real estate company helping people make confident property decisions. We bring together property sales, letting, investment guidance and management under one considered approach.</p>
            <p>From finding the right opportunity to caring for a property over time, our team works with clarity, local insight and attention to each client’s goals.</p>
            <a href="/contactUs" className="about-editorial-link">Get to know us <span aria-hidden="true">↗</span></a>
          </motion.div>
        </div>

        <div className="about-achievements" aria-label="CPIL at a glance">
          {achievements.map((item, index) => (
            <motion.div className="about-achievement" key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .08 }}>
              <strong>{item.value}<span>{item.suffix}</span></strong>
              <span className="about-achievement-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
