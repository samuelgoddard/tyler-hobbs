import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import TeaserWorks from '@/components/teaser-works'
import { worksCatSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
const pageService = new SanityPageService(worksCatSlugQuery)

export default function WorksCatSlug(initialData) {
  const { data: { cat, cats, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={cat.title} />

      <Header contact={contact} worksCats={firstWorksCatSlug} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="p-4 lg:p-8 lg:absolute top-0 left-0 right-0 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 pt-12 lg:pt-0">
              <div className="col-span-2 lg:col-start-3 block">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  ><Link className="a11y-focus inline-block" href="/works/cat">Works</Link></m.span>
                </span>
              </div>


              <div className="col-span-2 block leading-[0.9] text-gray">
                {cats.map((e,i) => {
                  return (
                    <span className="block relative overflow-hidden" key={i}>
                      <m.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                        className="block leading-none"
                      ><Link className={`a11y-focus inline-block ${cat.slug.current == e.slug.current ? 'text-black dark:text-white' : '' }`} href={`/works/categories/${e.slug.current}`}>{e.title}</Link></m.span>
                    </span>
                  )
                })}
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  ><Link className="a11y-focus inline-block" href="/works">Index</Link></m.span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-20 lg:pt-64 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-4 lg:pt-[25vw]">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-8">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" series />
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-4 lg:col-start-3 lg:pt-[25vw]">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" />
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-4 lg:pt-[25vw]">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" series />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-8">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" />
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-4 lg:col-start-3 lg:pt-[25vw]">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <TeaserWorks href="/works/slug" heading="Artwork Title, Year" />
              </div>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('workCategories')
  return {
    paths: paths,
    fallback: false,
  };
}