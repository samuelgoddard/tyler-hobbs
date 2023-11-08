import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { exhibitionsSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImageResponsive from '@/components/sanity-image-responsive'
import BodyRenderer from '@/components/body-renderer'
import Carousel from '@/components/carousel'
const pageService = new SanityPageService(exhibitionsSlugQuery)

export default function ExhibitionsSlug(initialData) {
  const { data: { exhibition, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={exhibition.title} />

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
                <Link href="/exhibitions" className="block relative overflow-hidden a11y-focus">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Exhibitions</m.span>
                </Link>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-80 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h1 className="text-5xl lg:text-7xl w-[90%] lg:w-[60%] max-w-3xl mb-0">{exhibition.title}</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-2 order-2 lg:order-1">
                {exhibition.gallery && (
                  <div className="mb-3 lg:mb-5">
                    <span className="block text-base/none mb-1">Gallery</span>
                    <span className="block leading-none">{exhibition.gallery}</span>
                  </div>
                )}
                {exhibition.location && (
                  <div className="mb-3 lg:mb-5">
                    <span className="block text-base/none mb-1">Location</span>
                    <span className="block leading-none">{exhibition.location}</span>
                  </div>
                )}
                {exhibition.year && (
                  <div className="mb-3 lg:mb-5">
                    <span className="block text-base/none mb-1">Year</span>
                    <span className="block leading-none">{exhibition.year}</span>
                  </div>
                )}
                {exhibition.links && (
                  <div className="">
                    <span className="block text-base/none mb-1">Links</span>
                    
                    {exhibition.links.map((e,i) => {
                      let route = '/'
                      e?.internalLink?._type == 'work' && (route = '/works')
                      e?.internalLink?._type == 'words' && (route = '/words')
                      e?.internalLink?._type == 'exhibitions' && (route = '/exhibitions')
                      e?.internalLink?._type == 'pages' && (route = '/pages')

                      return e.internal ? (
                        <Link href={`${route}/${e.internalLink?.slug.current}`} className="block leading-none text-gray transition-colors ease-in-out duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white mb-1 a11y-focus" key={i}>{e.linkText}</Link>
                      ) : (
                        <a href={e.externalLink} rel="noopener noreferrer" target="_blank" className="block leading-none text-gray transition-colors ease-in-out duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white mb-1 a11y-focus" key={i}>{e.linkText}</a>
                      )
                    })}
                  </div>
                )}
                
              </div>
              
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 order-1 lg:order-2 mb-16 lg:mb-0">
                {exhibition.heroImages && (
                  <Carousel images={exhibition.heroImages} />
                )}
              </div>
            </div>

            <div>
              <div>
                <BodyRenderer body={exhibition.contentBlocks} />
                
                {/* <div className="grid grid-cols-12 gap-x-8 lg:gap-0 -mt-8 lg:-mt-12">
                  <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                    <div className="w-8 text-[#DA442F]"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207 248"><path fill="currentColor" fillRule="evenodd" d="m103.3 123.8 103.3 61.9V61.9L103.3 0v123.8zm0 123.7V123.8L0 61.9v123.8l103.3 61.8z" clipRule="evenodd"></path></svg></div>
                  </div>
                </div> */}
              </div>
            </div>


            {/* <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">              
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 order-1 lg:order-2">
                <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
                  <div className="col-span-12 grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-4 lg:gap-y-8">
                    {Array.from(Array(12), (e, i) => {
                      return (
                        <div className="col-span-1" key={i}>
                          <div className="h-[55vw] lg:h-[20vw] bg-gray/30 mb-2"></div>
                          <span className="block text-sm lg:text-base text-gray">Artwork Caption</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div> */}
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
  const paths = await pageService.fetchPaths('exhibitions')
  return {
    paths: paths,
    fallback: false,
  };
}