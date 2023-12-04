// Internal Vars
const seo = `seo { ..., shareGraphic { asset-> } }`
const image = `
  asset-> { ... },
  linksTo-> {
    _type,
    slug {
      current
    }
  },
  fullScreenToggle,
  vimeoVideoOverrideUrl,
  caption[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug,
        "type": @.reference->_type,
        "title": @.reference->title
      }
    }
  }
`
const slug = `slug { current }`
const firstWorksCatSlug = `"firstWorksCatSlug": *[_type == "workCategories"][0]{ slug {current}}`
const contentBlocks = `
  contentBlocks[] {
    ...,
    annotationNotes[],
    annotationNotesRich[] {
      number,
      content[] {
        ...,
        markDefs[] {
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug,
            "type": @.reference->_type,
            "title": @.reference->title
          }
        }
      }
    },
    image {
      ${image}
    },
    images[] {
      ${image}
    },
    text[] {
      ...,
      markDefs[] {
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug,
          "type": @.reference->_type,
          "title": @.reference->title
        }
      }
    },
    listItems[] {
      ...,
      internalLink->{
        _type,
        slug {
          current
        }
      }
    }
  }
`
const contact = `"contact": *[_type == "contact"][0]{ emailAddress, socials[] { platform, url }}`

// External Queries
export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    randomisedImagesBucket[] {
      ${image}
    },
    randomisedHeadshotsBucket[] {
      ${image}
    },
    heroVideoPosterDesktop {
      ${image},
    }
  },
  ${seo},
  ${contact},
  ${firstWorksCatSlug}
}`

export const worksQuery = `{
  "works": *[_type == "work"] | order(_createdAt desc) {
    title,
    year,
    teaserImage {
      ${image},
    },
    gallerySlides[] {
      images[] {
        ${image}
      },
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
  "work": *[_type == "work" && slug.current == $slug][0]{
    title,
    year,
    dims,
    media,
    iterations,
    links[] {
      ...,
      internalLink->{
        _type,
        slug {
          current
        }
      }
    },
    text[] {
      ...,
      markDefs[] {
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug,
          "type": @.reference->_type,
          "title": @.reference->title
        }
      }
    },
    gallerySlides[] {
      images[] {
        ${image}
      },
      videoEmbed,
      alignment,
      containerWidth,
    },
    _createdAt,
    _id,
    ${slug},
    "next": *[_type == "work" && ^._createdAt < _createdAt] | order(_createdAt asc)[0] {
      title,
      year,
      media,
      dims,
      ${slug}
    },
    "first": *[_type == "work"] | order(_createdAt asc)[0] {
      title,
      year,
      media,
      dims,
      ${slug}
    }
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const worksCatSlugQuery = `{
  "works": *[_type == "work" && category->slug.current == $slug]{
    title,
    year,
    series,
    teaserImage {
      ${image}
    },
    category-> {
      ${slug}
    },
    ${slug}
  },
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

export const wordsCatQuery = `{
  "words": *[_type == "words" && category->slug.current == $slug] | order(publishedDate desc) {
    title,
    publishedDate,
    teaserImage {
      ${image},
    },
    ${slug}
  },
  "currentCat": *[_type == "wordsCategories" && slug.current == $slug][0] {
    title,
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
    lastUpdatedDate,
    links[] {
      ...,
      internalLink->{
        _type,
        slug {
          current
        }
      }
    },
    heroImage {
      ${image},
    },
    ${contentBlocks},
    author-> {
      name
    },
    category-> {
      title,
      ${slug}
    },
    ${slug},
    ${seo},
    relatedArticles[]-> {
      title,
      slug
    },
    "further": *[_type == "words" && slug.current != $slug && publishedDate < ^.publishedDate] | order(publishedDate desc)[0..6] {
      title,
      ${slug}
    },
    "furtherReset": *[_type == "words"] | order(publishedDate desc)[0..6] {
      title,
      ${slug}
    },
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
    ${contentBlocks},
    ${slug},
    ${seo}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const aboutQuery = `{
  "about": *[_type == "about"][0]{
    title,
    ${contentBlocks},
    ${seo}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const pagesSlugQuery = `{
  "page": *[_type == "pages" && slug.current == $slug][0]{
    title,
    ${contentBlocks},
    ${seo}
  },
  ${contact},
  ${firstWorksCatSlug}
}`

export const errorQuery = `{
  ${contact},
  ${firstWorksCatSlug}
}`