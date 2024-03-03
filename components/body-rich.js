import React from 'react'
import {PortableText} from '@portabletext/react'
import slugify from 'slugify'
import Link from 'next/link'

export default function BodyRich({ content, className }) {
  const components = {
    marks: {
      internalLink: ({value, children}) => {
        const {slug = {}} = value
        
        // Prefix
        let prefix = '/'
        value.type == 'work' && (prefix = '/works/')
        value.type == 'words' && (prefix = '/words/')
        value.type == 'exhibitions' && (prefix = '/exhibitions/')
        value.type == 'pages' && (prefix = '/pages/')

        // HREF
        const href = `${prefix}${ slug ? slug.current : slugify(value.title, { lower: true })}`

        return <Link href={href}>{children}</Link>
      },
      link: ({value, children}) => {
        const { blank, href } = value
        return blank ?
          <a href={href} target="_blank" rel="noopener">{children}</a>
          : <a href={href}>{children}</a>
      }
    }
  }

  return (
    <div className={`content ${className}`}>
      <PortableText
        value={content}
        components={components}
      />
    </div>
  )
}