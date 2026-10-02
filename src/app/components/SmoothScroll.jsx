'use client'

import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.085, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  )
}
