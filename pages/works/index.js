import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { worksQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import SanityImageResponsive from '@/components/sanity-image-responsive'
const pageService = new SanityPageService(worksQuery)

export default function Works(initialData) {
  const { data: { works, cats, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title="Works" />

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
                      ><Link className="a11y-focus inline-block" href={`/works/categories/${e.slug.current}`}>{e.title}</Link></m.span>
                    </span>
                  )
                })}
                
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  ><Link className="a11y-focus inline-block" href="/works">Index</Link></m.span>
                </span>
              </div>

              <div className="col-span-2 block leading-[0.9] text-gray">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  >Chronological</m.span>
                </span>
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Random</m.span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-5 pt-28 lg:pt-80">
              {works.map((e, i) => {
                return (
                  <>
                  {e.gallerySlides?.map((ee, i) => {
                    return (
                      <>
                        {ee.images?.map((eee, i) => {
                          return (
                            <div className="col-span-6 lg:col-span-2" key={i}>
                              <Link href={`/works/${e.slug.current}`} className="block w-full a11y-focus group">
                                <div className="block">
                                  <SanityImageResponsive
                                    image={eee}
                                    className="w-full mb-3"
                                    sizes={`(max-width: 1024px) 100vw, 15vw`}
                                  />
                                  <div className="flex flex-wrap text-base/tight text-gray opacity-0 lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                                    <span className="block w-full lg:flex-1 transition-all ease-in-out duration-300 lg:group-hover:text-black dark:lg:group-hover:text-white">{e.title}, {e.year}</span>
                                    
                                    {/* <span className="block w-full lg:w-auto transition-all ease-in-out duration-300 lg:group-hover:text-black dark:lg:group-hover:text-white">[{i}]</span> */}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          )
                        })}
                      </>
                      )
                    })}
                  </>
                )
              })}
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