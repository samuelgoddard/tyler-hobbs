import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { NextSeo } from 'next-seo'
import BodyRenderer from '@/components/body-renderer'
import { wordsSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImageResponsive from '@/components/sanity-image-responsive'
import Link from 'next/link'
import useDetectScroll from "@smakss/react-scroll-direction";
import { useRef, useState } from 'react'

const pageService = new SanityPageService(wordsSlugQuery)

export default function WordsSlug(initialData) {
  const { data: { article, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  const [headerShown, setHeaderShown] = useState(false)
  const { scrollY } = useScroll()
  const scrollDir = useDetectScroll();

  // Published Date
  let mainPublishedD = new Date(article.publishedDate);
  let mainPublishedDa = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(mainPublishedD);
  let mainPublishedMo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(mainPublishedD);
  let mainPublishedYe = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(mainPublishedD);
  
  // Last Updated Date
  let mainUpdatedD = ''
  let mainUpdatedDa = ''
  let mainUpdatedMo = ''
  let mainUpdatedYe = ''

  article.lastUpdatedDate && (
    mainUpdatedD = new Date(article.lastUpdatedDate),
    mainUpdatedDa = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(mainUpdatedD),
    mainUpdatedMo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(mainUpdatedD),
    mainUpdatedYe = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(mainUpdatedD)
  )

  useMotionValueEvent(scrollY, "change", (latest) => {
    (latest > 500 &&  scrollDir == 'up') ? (setHeaderShown(true)) : (setHeaderShown(false))
  })

  return (
    <Layout>
      <NextSeo title={article.title} />

      <Header contact={contact} worksCats={firstWorksCatSlug} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="p-4 lg:p-8 lg:fixed top-0 left-0 right-0 w-full z-[100] pointer-events-none">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 pt-12 lg:pt-0">
              <div className="col-span-2 lg:col-start-3 block">
                <span className={`hidden lg:block relative overflow-hidden transition-opacity ease-in-out duration-300 ${headerShown ? 'opacity-100' : 'opacity-0' }`}>
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >{article.title}</m.span>
                </span>
              </div>

              {/* <div className="col-span-2 lg:col-start-5 block">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  ><Link href={`/words/categories/${article.category.slug.current}`}>{article.category.title}</Link></m.span>
                </span>
              </div> */}
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-64 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h1 className="text-5xl lg:text-7xl w-[90%] lg:w-[80%] max-w-[80%] mb-0">{article.title}</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-2 order-2 lg:order-1">
                <div className="mb-3 lg:mb-5">
                  <span className="block text-base/none mb-1">Back To</span>
                  <span className="block leading-none text-gray"><Link className="text-gray transition-colors ease-in-out duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white a11y-focus" href="/words">Words</Link>{article.category && (<>: <Link className="text-gray transition-colors ease-in-out duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white a11y-focus" href={`/words/categories/${article.category.slug.current}`}>{article.category.title}</Link></>)}</span>
                </div>
                {article.author && (
                  <div className="mb-3 lg:mb-5">
                    <span className="block text-base/none mb-1">By</span>
                    <span className="block">{article.author.name}</span>
                  </div>
                )}
                {article.publishedDate && (
                  <div className="mb-3 lg:mb-5">
                    <span className="block text-base/none mb-1">Published</span>
                    <span className="block">{mainPublishedYe}.{mainPublishedMo}.{mainPublishedDa}</span>
                  </div>
                )}
                {article.lastUpdatedDate && (
                  <div className="mb-3 lg:mb-5">
                    <span className="block text-base/none mb-1">Last Updated</span>
                    <span className="block">{mainUpdatedYe}.{mainUpdatedMo}.{mainUpdatedDa}</span>
                  </div>
                )}
                {article.links && (
                  <div className="">
                    <span className="block text-base/none mb-1">Links</span>
                    
                    {article.links.map((e,i) => {
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
              
              {article.heroImage && (
                <div className="col-span-12 lg:col-span-10 lg:col-start-3 order-1 lg:order-2">
                  <SanityImageResponsive
                    priority={true}
                    image={article.heroImage}
                    sizes={`(max-width: 1024px) 100vw,90vw`}
                    className={`w-full`}
                  />
                </div>
              )}
            </div>

            <div className="" id="content">
              <div className="">
                <BodyRenderer body={article.contentBlocks} />
                  
                <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-20">
                  <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                    <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
                      <div className="col-span-12 lg:col-span-7 lg:col-start-6 content">
                        <div className="w-8 text-[#DA442F]"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207 248"><path fill="currentColor" fillRule="evenodd" d="m103.3 123.8 103.3 61.9V61.9L103.3 0v123.8zm0 123.7V123.8L0 61.9v123.8l103.3 61.8z" clipRule="evenodd"></path></svg></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-20 lg:pt-64">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
                  <div className="col-span-12 lg:col-span-9 lg:col-start-4">
                    <h2 className="block text-3xl/none lg:text-4xl/none mb-4 pb-0">Continue Reading</h2>
                    <ul className="border-t border-gray">
                      {article.relatedArticles?.length ? (
                        <>
                          {article.relatedArticles.map((e, i) => {
                            return (
                              <li className="block" key={i}><Link href={`/words/${e.slug.current}`} className="block py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 relative group">{e.title}<span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></Link></li>
                            )
                          })}
                        </>
                      ) : (
                        <>
                          {article.further?.length < 1 ? (
                            <>
                            {article.furtherReset?.map((e, i) => {
                              return (
                                <li className="block" key={i}><Link href={`/words/${e.slug.current}`} className="block py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 relative group">{e.title}<span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></Link></li>
                              )
                            })}
                            </>
                          ) : (
                            <>
                              {article.further?.map((e, i) => {
                                return (
                                  <li className="block" key={i}><Link href={`/words/${e.slug.current}`} className="block py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 relative group">{e.title}<span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></Link></li>
                                )
                              })}
                            </>
                          )}
                        </>
                      )}
                    </ul>
                  </div>
                </div>
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
  const paths = await pageService.fetchPaths('words')
  return {
    paths: paths,
    fallback: false,
  };
}