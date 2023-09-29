import React from 'react'
import { m } from 'framer-motion'

export function SplitText({ children, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className="block overflow-hidden mb-0 pb-0"
      >
        <m.span
          {...rest}
          className={`block overflow-hidden will-change-transform`}
          custom={i}
        >{word + (i !== words.length - 1 ? '\u00A0' : '')}
        </m.span>
      </span>
    )
  })
}