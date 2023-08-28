import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { SplitText } from '@/components/splitText'

export default function WorksSlug() {
  return (
    <Layout>
      <NextSeo title="Works Slug" />

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
                <span className="flex flex-wrap overflow-hidden relative xl:pr-[30%] leading-[1]">
                  <SplitText
                    animate="enter"
                    exit="exit"
                    initial={{ y: '100%' }}
                    transition={{ duration: 0.45, ease: [0.71,0,0.17,1]}}
                    variants={{
                      enter: i => ({ y: 0 }),
                      exit: i => ({ y: '100%' })
                    }}
                  >
                    Connected, For the Moment
                  </SplitText>
                </span>
              </div>


              <div className="col-span-2 block leading-[0.9] text-gray">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  >Gallery</m.span>
                </span>
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Info</m.span>
                </span>
              </div>
              
              <div className="col-span-2 block leading-[0.9] text-gray">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  >1 — 8</m.span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-4 lg:mb-8 pt-28 lg:pt-80">
              Work slug carousel...
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
