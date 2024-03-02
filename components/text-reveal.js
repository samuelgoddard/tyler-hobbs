import React from 'react'
import { m } from 'framer-motion'

export function TextReveal({ children, className, delay }) {
  return (
    <span className="block relative overflow-hidden">
      <m.span
        className={`block will-change-transform ${className}`}
        initial={{ y: '100%' }}
        animate={{ y: 0, transition: { delay: delay ? delay: 0, type: "spring", stiffness: 250, damping: 45, mass: 1}}}
        exit={{ opacity: 0, transition: { delay: -0.1, duration: 0.5, ease: [0.71,0,0.17,1] }}}
      >
        {children}
      </m.span>
    </span>
  )
}