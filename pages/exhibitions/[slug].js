import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { exhibitionsSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImageResponsive from '@/components/sanity-image-responsive'
import useDetectScroll from "@smakss/react-scroll-direction";
import BodyRenderer from '@/components/body-renderer'
import Carousel from '@/components/carousel'
import { useState } from 'react'
const pageService = new SanityPageService(exhibitionsSlugQuery)

export default function ExhibitionsSlug(initialData) {
  const { data: { exhibition, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()

  const [headerShown, setHeaderShown] = useState(false)
  const { scrollY } = useScroll()
  const scrollDir = useDetectScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    (latest > 1 &&  scrollDir == 'up') ? (setHeaderShown(true)) : (setHeaderShown(false))
  })

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

          <div className={`p-4 lg:p-8 hidden lg:block lg:fixed top-0 left-0 right-0 w-full z-[999] transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${headerShown ? 'lg:translate-y-0' : 'lg:-translate-y-full pointer-events-none' } bg-white dark:bg-black`}>
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 pt-12 lg:pt-0">
              <div className="col-span-2 hidden lg:block">
                <Link href="/" aria-label="Navigate to the home page" className="a11y-focus w-[98px] lg:w-[120px] block translate-y-[2px] lg:translate-y-0">
                  <svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 678 129">
                    <path fill="currentColor" d="M77.043 2.263v12.448H45.886v87.134h-14.73V14.711H0V2.263h77.043Z"/>
                    <path fill="currentColor" d="m77.091 29.421 19.544 53.463a20.877 20.877 0 0 1 1.134 7.638c0 .848 0 1.84 1.132 1.84 1.133 0 1.134-.992 1.134-1.84.02-2.597.45-5.175 1.275-7.638l18.832-53.463h14.731l-31.44 81.051C98.334 123.767 91.255 129 78.225 129h-9.34v-11.881h6.509c10.764 0 12.61-2.404 14.729-7.639l1.982-4.809-29.743-75.25h14.73ZM153.109 0v101.845h-13.597V0h13.597ZM229.484 69.593H175.38c.991 11.598 8.921 20.934 22.093 20.934 9.771 0 14.586-4.81 17.136-13.155h14.019c-2.973 13.438-12.882 25.597-31.439 25.597-22.802 0-35.264-16.833-35.264-37.343 0-21.783 14.162-37.341 34.985-37.341 16.145 0 32.998 10.608 32.998 36.351a25.91 25.91 0 0 1-.424 4.957Zm-13.171-11.315c-.85-10.61-7.648-18.106-18.695-18.106-13.597 0-19.544 8.345-21.527 18.106h40.222ZM252.588 44.98c4.531-11.597 8.639-16.69 26.909-16.69v13.862c-21.103-1.414-27.193 6.082-27.193 25.036v34.657h-13.595V29.421h13.595v4.81a29.062 29.062 0 0 1-1.558 9.48c-.282 1.13-.706 2.263.426 2.546.708.138 1.132-.57 1.416-1.276ZM372.237 2.263v99.582h-14.728V58.278h-49.852v43.567h-14.729V2.263h14.729V45.83h49.852V2.263h14.728ZM452.287 65.632c0 20.51-13.172 37.342-35.12 37.342-21.949 0-35.121-16.833-35.121-37.343 0-20.51 13.172-37.34 35.121-37.34 21.948 0 35.12 16.83 35.12 37.34Zm-13.597 0c0-13.72-7.931-24.894-21.526-24.894-13.595 0-21.527 11.174-21.527 24.894 0 13.719 7.93 24.895 21.527 24.895 13.596 0 21.526-11.175 21.526-24.895ZM474.684 35.077a22.665 22.665 0 0 1-1.416 7.78c-.424 1.131-1.273 2.545 0 2.969 1.134.425 1.558-.99 1.701-1.414 4.248-9.335 12.746-16.124 24.358-16.124 18.837 0 32.001 15.845 32.001 37.34 0 21.496-13.169 37.343-32.001 37.343-11.328 0-19.967-6.648-24.358-16.409-.143-.423-.567-1.554-1.416-1.271-1.417.424-.709 1.697-.285 2.829.9 2.448 1.378 5.03 1.416 7.637v6.088h-13.595V0h13.595v35.077Zm43.056 30.552c0-13.438-7.083-24.894-21.245-24.894-12.882 0-21.811 11.456-21.811 24.894 0 13.437 8.924 24.895 21.811 24.895 14.162.003 21.245-11.454 21.245-24.892v-.003ZM553.733 35.077a22.666 22.666 0 0 1-1.417 7.78c-.424 1.131-1.274 2.545 0 2.969 1.133.425 1.557-.99 1.699-1.414 4.249-9.335 12.747-16.124 24.36-16.124 18.836 0 32.001 15.845 32.001 37.34 0 21.496-13.171 37.343-32.001 37.343-11.33 0-19.969-6.648-24.36-16.409-.135-.423-.566-1.554-1.415-1.271-1.417.424-.708 1.697-.284 2.829.9 2.448 1.379 5.03 1.417 7.637v6.088h-13.596V0h13.596v35.077Zm43.053 30.552c0-13.438-7.082-24.894-21.243-24.894-12.882 0-21.81 11.456-21.81 24.894 0 13.437 8.921 24.895 21.81 24.895 14.161.003 21.243-11.454 21.243-24.892v-.003ZM627.866 76.665c.135 5.516 4.673 14.428 18.833 14.428 13.88 0 17.704-5.516 17.704-10.185 0-6.5-6.091-8.487-22.659-10.184-18.984-1.98-24.927-10.609-24.927-20.086 0-10.892 9.915-22.346 29.741-22.346 18.27 0 28.185 10.466 29.176 24.046h-13.313c-.422-4.666-3.541-12.166-16.287-12.166-11.472 0-15.72 4.667-15.72 9.48 0 4.668 2.691 7.78 18.41 9.48C668.372 61.246 678 66.903 678 78.787c0 14.71-12.039 24.187-31.866 24.187-19.687 0-30.875-10.325-31.583-26.309h13.315Z"/>
                  </svg>
                </Link>
              </div>
              <div className="col-span-2 lg:col-start-3 lg:col-span-3 block">
                <span className={`hidden lg:block relative overflow-hidden`}>
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >{exhibition.title}</m.span>
                </span>
              </div>

              {/* <div className="col-span-2 lg:col-start-5 block">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  ><Link href={`/words/categories/${article.category.slug.current}`}>{article.category.title}</Link></m.span>
                </span>
              </div> */}
            </div>
          </div>
          {/* <div className="p-4 lg:p-8 lg:absolute top-0 left-0 right-0 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 pt-12 lg:pt-0">
              <div className="col-span-2 lg:col-start-3 block">
                <Link href="/exhibitions" className="block relative overflow-hidden a11y-focus">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Exhibitions</m.span>
                </Link>
              </div>
            </div>
          </div> */}

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-64 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h1 className="text-5xl lg:text-7xl w-[90%] lg:w-[60%] max-w-3xl mb-0 tracking-[-0.025em] lg:tracking-[-0.025em]">{exhibition.title}</h1>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24 relative">
                <div className="col-span-12 lg:col-span-2 order-2 lg:order-1  lg:sticky lg:top-32">
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
                    <div className="mb-3 lg:mb-5">
                      <span className="block text-base/none mb-1">Links</span>
                      
                      {exhibition.links.map((e,i) => {
                        let route = '/'
                        e?.internalLink?._type == 'work' && (route = '/works')
                        e?.internalLink?._type == 'words' && (route = '/words')
                        e?.internalLink?._type == 'exhibitions' && (route = '/exhibitions')
                        e?.internalLink?._type == 'pages' && (route = '/pages')

                        return e.internal ? (
                          <Link href={`${route}/${e.internalLink?.slug.current}`} className="block leading-none text-gray transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white mb-1 a11y-focus" key={i}>{e.linkText}</Link>
                        ) : (
                          <a href={e.externalLink} rel="noopener noreferrer" target="_blank" className="block leading-none text-gray transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white mb-1 a11y-focus" key={i}>{e.linkText}</a>
                        )
                      })}
                    </div>
                  )}

                  <div className="">
                    <span className="block text-base/none mb-1">Back To</span>
                    <span className="block leading-none"><Link className="text-gray transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white a11y-focus" href="/exhibitions">Exhibitions</Link></span>
                  </div>
                  
                </div>
                
                <div className="col-span-12 lg:col-span-10 lg:col-start-3 order-1 lg:order-2 mb-6 lg:mb-0">
                  {exhibition.heroImages && (
                    <Carousel images={exhibition.heroImages} />
                  )}
                </div>

                <div className="col-span-12 order-3 lg:order-3 mt-6 lg:mt-10">
                  <div className="-mx-4 lg:-mx-8">
                    <BodyRenderer body={exhibition.contentBlocks} />
                    
                    {/* <div className="grid grid-cols-12 gap-x-8 lg:gap-0 -mt-8 lg:-mt-12">
                      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                        <div className="w-8 text-[#DA442F]"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207 248"><path fill="currentColor" fillRule="evenodd" d="m103.3 123.8 103.3 61.9V61.9L103.3 0v123.8zm0 123.7V123.8L0 61.9v123.8l103.3 61.8z" clipRule="evenodd"></path></svg></div>
                      </div>
                    </div> */}
                  </div>
                </div>
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