import React from 'react'
import {PortableText} from '@portabletext/react'
import slugify from 'slugify'
import Link from 'next/link'

export default function BodyRich({ content }) {
  const components = {
    marks: {
      internalLink: ({value, children}) => {
        const {slug = {}} = value
        
        // Prefix
        let prefix = '/'
        value.type == 'marketingPages' && (prefix = '/marketing/')
        value.type == 'products' && (prefix = '/homa-lab/')

        // HREF
        const href = `${prefix}${ slug ? slug.current : slugify(value.title, { lower: true })}`

        return <Link href={href}><a>{children}</a></Link>
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
    <div className="content">
      <PortableText
        value={content}
        components={components}
      />
    </div>
  )
}