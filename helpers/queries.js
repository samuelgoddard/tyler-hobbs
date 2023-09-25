// Internal Vars
const seo = `seo { ..., shareGraphic { asset-> } }`
const image = `asset-> { ... }, caption, alt, hotspot { x, y }`
const slug = `slug { current }`
const firstWorksCatSlug = `"firstWorksCatSlug": *[_type == "workCategories"][0]{ slug {current}}`
const contentBlocks = `contentBlocks[] { ..., annotationNotes[], image { ${image} }, }`
const contact = `"contact": *[_type == "contact"][0]{ emailAddress, socials[] { platform, url }}`

// External Queries
export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroVideoPosterDesktop {
      ${image},
    }
  },
  ${seo},
  ${contact},
  ${firstWorksCatSlug}
}`

export const worksQuery = `{
  "works": *[_type == "work"] {
    title,
    teaserImage {
      ${image},
    },
    ${slug}
  },
  "cats": *[_type == "workCategories"] {
    title,
    ${slug}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const worksSlugQuery = `{
  "work": *[_type == "work"][0]{
    title,
    ${slug}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const worksCatSlugQuery = `{
  "cat": *[_type == "workCategories" && slug.current == $slug][0]{
    title,
    ${slug}
  },
  "cats": *[_type == "workCategories"] {
    title,
    ${slug}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const wordsQuery = `{
  "words": *[_type == "words"] | order(publishedDate desc) {
    title,
    publishedDate,
    teaserImage {
      ${image},
    },
    ${slug}
  },
  "cats": *[_type == "wordsCategories"] {
    title,
    ${slug}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const wordsSlugQuery = `{
  "article": *[_type == "words" && slug.current == $slug][0]{
    title,
    _updatedAt,
    publishedDate,
    heroImage {
      ${image},
    },
    ${contentBlocks},
    author-> {
      name
    },
    ${slug},
    ${seo}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const exhibitionsQuery = `{
  "exhibitions": *[_type == "exhibitions"] | order(year desc) {
    title,
    gallery,
    location,
    year,
    teaserImage {
      ${image},
    },
    ${slug}
  },
  ${contact},
  ${firstWorksCatSlug}
}`


export const exhibitionsSlugQuery = `{
  "exhibition": *[_type == "exhibitions" && slug.current == $slug][0]{
    title,
    gallery,
    location,
    year,
    links[] {
      ...,
      internalLink->{
        _type,
        slug {
          current
        }
      }
    },
    heroImages[] {
      ${image},
    },
    ${slug},
    ${seo}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const aboutQuery = `{
  "about": *[_type == "about"][0]{
    title,
    ${seo}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const errorQuery = `{
  ${contact},
  ${firstWorksCatSlug}
}`