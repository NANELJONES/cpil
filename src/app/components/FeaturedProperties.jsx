'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

let featuredRequest

export default function FeaturedProperties({ variant = 'section' }) {
  const [properties, setProperties] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let active = true
    featuredRequest ||= fetch('/api/properties/featured?limit=5')
      .then(response => response.ok ? response.json() : Promise.reject(new Error('Unable to load listings')))
    featuredRequest
      .then(data => { if (active) setProperties(data.properties || []) })
      .catch(() => { if (active) setProperties([]) })
      .finally(() => { if (active) setLoaded(true) })
    return () => { active = false }
  }, [])

  if (!loaded) return <p className={`featured-empty featured-${variant}`}>Loading available properties…</p>
  if (!properties.length) return <p className={`featured-empty featured-${variant}`}>New property listings will appear here as they are published.</p>

  return <div className={`featured-listings featured-${variant}`}><Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={18} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
    {properties.map(property => <SwiperSlide key={property.id}>
      <motion.div className="featured-card" whileHover={{ y: -4 }}>
        <Link href={`/properties/${property.slug || property.id}`} className="block h-full" aria-label={`View ${property.title}`}>
          <div className="featured-card-image">
            {property.image && <Image src={property.image} alt={property.title || 'Property listing'} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" />}
            <span className="property-pill">{property.type === 'sale' ? 'For sale' : 'For rent'}</span>
          </div>
          <div className="featured-card-copy">
            <h3>{property.title || 'Property listing'}</h3>
            <p>{property.location}</p>
            <strong>{property.price || 'Price on request'}</strong>
          </div>
        </Link>
      </motion.div>
    </SwiperSlide>)}
  </Swiper></div>
}
