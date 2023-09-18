export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroVideoPosterDesktop {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    }
  }
}`

export const wordsQuery = `{
  "words": *[_type == "words"] | order(publishedDate desc) {
    title,
    publishedDate,
    teaserImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  },
  "cats": *[_type == "wordsCategories"] {
    title,
    slug {
      current
    }
  }
}`

export const wordsSlugQuery = `{
  "article": *[_type == "words" && slug.current == $slug][0]{
    title,
    slug {
      current
    },
    _updatedAt,
    publishedDate,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    contentBlocks[] {
      ...,
      annotationNotes[],
      image {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
    },
    author-> {
      name
    }
  }
}`

export const exhibitionsQuery = `{
  "exhibitions": *[_type == "exhibitions"] | order(year desc) {
    title,
    gallery,
    location,
    year,
    teaserImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  }
}`


export const exhibitionsSlugQuery = `{
  "exhibition": *[_type == "exhibitions" && slug.current == $slug][0]{
    title,
    gallery,
    location,
    year,
    heroImages[] {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  }
}`