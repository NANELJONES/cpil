'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const items = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#aboutUs' },
  { name: 'Properties', href: '/properties' },
  { name: 'Contact', href: '/contactUs' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
        <div className="site-nav-inner">
          <Link href="/" className="brand-lockup" aria-label="Century Property Investment home">
            <Image src="/logo.png" alt="Century Property Investment Limited" width={180} height={72} className="nav-logo" priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {items.map(item => <Link key={item.name} href={item.href} className={pathname === item.href ? 'active' : ''}>{item.name}</Link>)}
            <Link href="/contactUs" className="nav-inquire">Make an enquiry <span>↗</span></Link>
          </nav>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && <>
          <motion.button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 240 }}>
            <div className="mobile-menu-head">
              <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
                <Image src="/logo.png" alt="Century Property Investment Limited" width={180} height={72} className="nav-logo" />
              </Link>
              <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><HiX /></button>
            </div>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {items.map((item, index) => <motion.div key={item.name} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.07 }}><Link href={item.href} onClick={() => setOpen(false)}>{item.name}<span>↗</span></Link></motion.div>)}
            </nav>
            <p className="mobile-menu-note">Property, considered differently.</p>
          </motion.aside>
        </>}
      </AnimatePresence>
    </>
  )
}
