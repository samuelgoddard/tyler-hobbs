import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

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
                  >About</m.span>
                </span>
              </div>

              <div className="col-span-2 block leading-[0.9] text-gray">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  >Artist Statement</m.span>
                </span>
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Bio</m.span>
                </span>
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Process</m.span>
                </span>
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >CV</m.span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-80 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h1 className="text-4xl lg:text-6xl w-[95%] lg:w-[80%] mb-0">What separates man from machine? How are the two artistically related, and when they are inevitably brought closer by technological progress, what will the result be? My work explores these questions.</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">              
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-2 gap-4 lg:gap-8">
                <div className="col-span-1">
                  <div className="aspect-square bg-gray/30"></div>
                </div>
                <div className="col-span-1">
                  <div className="aspect-square bg-gray/30"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8">              
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-7 lg:col-start-6 content">
                    <p>There’s a new art form on the rise. Generative art has existed since the 1960s, but the new on-chain generative art platforms are pushing the medium in an exciting new direction. While many of the generative techniques are the same, the goals for the program output are wildly different from before. The direct path from the script to the viewer, as well as the large number of iterations, encourages artists to create a special class of artistic algorithm, what I’ll refer to here as long-form generativism. In this essay, I’ll discuss what makes these algorithms different, and how we can analyze their quality.</p>

                    <h2>Generative Art in the Past</h2>
                    
                    <p>Historically, generative art had some typical qualities that were taken for granted.</p>
                    
                    <p>First, there was almost always a &ldquo;curation&rdquo; step. The artist could generate as many outputs as they pleased and then filter those down to a small set of favorites. Only this curated set of output would be presented to the public.</p>
                    
                    <p>Second, the size of that final curated set was generally small. In fact, it was extremely common to choose just a single best output to show. At most, perhaps a dozen iterations would be shown.
                    There have been exceptions [1], but this was the way things were usually done. For an example from my own work, here are three iterations from Lines 1, a program from 2017. I initially generated about 200 images from the program, and then curated that down to a final set of just 10 images that I felt captured most of the interesting characteristics.</p>
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
