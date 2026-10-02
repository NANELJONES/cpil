'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiOutlineSearch, HiOutlineMail } from 'react-icons/hi'
import Button from './Button'
import FeaturedProperties from './FeaturedProperties'

export default function Header() {
  return (
    <section className="home-hero">
      <div className="hero-rule" aria-hidden="true"><span /><i /></div>
      <motion.div className="home-hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <h1>Century <span>Property</span><br />Investment <span>Limited</span></h1>
        <p>Your trusted partner in real estate and property investment. We help you find, manage and make the most of property opportunities across Ghana.</p>
        <div className="hero-actions">
          <Link href="/properties"><Button variant="primary"><HiOutlineSearch />Explore Properties</Button></Link>
          <Link href="/#contactUs"><Button variant="secondary"><HiOutlineMail />Contact Us</Button></Link>
        </div>
      </motion.div>
      <div className="home-featured">
        <div className="home-featured-label"><span className="eyebrow">Featured properties</span><Link href="/properties">View all ↗</Link></div>
        <FeaturedProperties variant="hero" />
      </div>
    </section>
  )
}
