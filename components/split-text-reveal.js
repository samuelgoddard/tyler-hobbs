import React from 'react'
import { m } from 'framer-motion'

export function SplitTextReveal({ children, className, delay }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className={`block overflow-hidden mb-0 pb-0 ${className}`}
      >
        <m.span
          className={`block overflow-hidden will-change-transform`}
          initial={{ y: '100%' }}
          animate={{ y: 0, transition: { delay: delay ? delay : 0, type: "spring", stiffness: 250, damping: 45, mass: 1}}}
          exit={{ opacity: 0, transition: { delay: -0.1, duration: 0.5, ease: [0.71,0,0.17,1] }}}
          custom={i}
        >{word + (i !== words.length - 1 ? '\u00A0' : '')}
        </m.span>
      </span>
    )
  })
}