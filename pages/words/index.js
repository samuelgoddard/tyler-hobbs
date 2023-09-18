import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useState } from 'react'
import { wordsQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
const pageService = new SanityPageService(wordsQuery)

export default function Words(initialData) {
  const { data: { words, cats }  } = pageService.getPreviewHook(initialData)()
  const [imageActive, setImageActive] = useState(false)
  
  const imageToggle = () => {
    imageActive ? setImageActive(false) : setImageActive(true)
  }

  return (
    <Layout>
      <NextSeo title="Words" />

      <Header />
      
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
                  >Words</m.span>
                </span>
              </div>


              <div className="col-span-2 block leading-[0.9] text-gray">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  >All</m.span>
                </span>
                {cats.map((e,i) => {
                  return (
                    <span className="block relative overflow-hidden" key={i}>
                      <m.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                        className="block leading-none"
                      >{e.title}</m.span>
                    </span>
                  )
                })}
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 fixed bottom-4 lg:bottom-8 left-0 hidden lg:grid pointer-events-none">
              <div className={`col-span-4 transition-opacity ease-in-out duration-[300ms] ${imageActive !== false ? 'opacity-100' : 'opacity-0' }`}>
                <div className="aspect-square bg-gray bg-opacity-30 relative overflow-hidden max-w-[550px]">
                  {words.map((e, i) => {
                    return (
                      <SanityImage
                        image={e.teaserImage}
                        sizes={`(max-width: 1024px) 100vw,12vw`}
                        className={`w-full h-full absolute inset-0 object-center object-cover transition-opacity ease-in-out duration-[400ms] ${imageActive == i ? 'opacity-100' : 'opacity-0' }`}
                      />
                      )
                    })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-20 lg:pt-64">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <ul className="border-t border-gray">
                  {words.map((e, i) => {
                    return (
                      <li className="block" key={i}><Link href={`words/${e.slug.current}`} onMouseEnter={()=> setImageActive(i)} onMouseLeave={()=> setImageActive(false)} className="block py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 relative group">{e.title}<span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></Link></li>
                    )
                  })}
                  {Array.from(Array(20), (e, i) => {
                    return (
                      <li className="block" key={i}><Link href="/words/qql-post" onMouseEnter={()=> setImageActive(0)} onMouseLeave={()=> setImageActive(false)} className="block py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 relative group">The Rise of Long-Form Generative Art<span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></Link></li>
                    )
                  })}
                </ul>
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