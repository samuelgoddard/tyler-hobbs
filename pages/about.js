import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

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
                  <m.a
                    href="#artist-statement"
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none text-black dark:text-white"
                  >Artist Statement</m.a>
                </span>
                <span className="block relative overflow-hidden">
                  <m.a
                    href="#bio"
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Bio</m.a>
                </span>
                <span className="block relative overflow-hidden">
                  <m.a
                    href="#process"
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Process</m.a>
                </span>
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none cursor-not-allowed"
                  >CV</m.span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-80 mb-16 lg:mb-24" id="artist-statement">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h1 className="text-4xl lg:text-6xl w-[95%] lg:w-[80%] mb-0">What separates man from machine? How are the two artistically related, and when they are inevitably brought closer by technological progress, what will the result be? My work explores these questions.</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-2 gap-4 lg:gap-4">
                <div className="col-span-1">
                  <div className="aspect-square bg-gray/30"></div>
                </div>
                <div className="col-span-1">
                  <div className="aspect-square bg-gray/30"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24 scroll-mt-16 lg:scroll-mt-24" id="bio">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-7 lg:col-start-6 content">
                    <p>I want to find new ways to deeply merge the hand with the algorithm, to make the logical and illogical processes interact. The generative analysis of drawings reveals that even the &ldquo;human&rdquo; flaws in our work have patterns and structure.</p>
                    
                    <p>What can the machine capture and reproduce about those flaws, and what differences will always remain? Can the cold, rigid defaults of programmed systems truly merge with our analog mess? I try to see, visually, what the answer is.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-1 gap-4 lg:gap-4">
                <div className="col-span-1">
                  <div className="aspect-[16/10] bg-gray/30"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24 scroll-mt-16 lg:scroll-mt-24" id="process">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h2 className="text-4xl lg:text-6xl w-[95%] lg:w-[80%] mb-0">Tyler Hobbs is a visual artist from Austin, Texas who works primarily with algorithms, plotters, and paint.</h2>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-7 lg:col-start-6 content">
                    <p>His artwork focuses on computational aesthetics, how they are shaped by the biases of modern computer hardware and software, and how they relate to and interact with the natural world around us. Tyler develops and programs custom algorithms that are used to generate visual imagery. Often, these strike a balance between the cold, hard structure that computers excel at, and the messy, organic chaos we can observe in the natural world around us.</p>
                    
                    <p>Tyler&rsquo;s work has been shown internationally, and has been collected in more than a dozen countries around the world.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-1 gap-4 lg:gap-4">
                <div className="col-span-1">
                  <div className="aspect-[16/10] bg-gray/30"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h3 className="text-3xl lg:text-4xl block leading-none mb-5">Online Projects</h3>
                <ul className="border-t border-gray">
                  {Array.from(Array(3), (e, i) => {
                    return (
                      <li className="block" key={i}><Link href="/words/slug" className="flex py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 group"><span className="block pr-6 lg:pr-12">Year</span><span className="flex-1 relative lg:pr-12">Exhibition Title, Gallery, City, State, Country<span className="absolute top-[-3px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></span></Link></li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h3 className="text-3xl lg:text-4xl block leading-none mb-5">Solo Exhibitions</h3>
                <ul className="border-t border-gray">
                  {Array.from(Array(5), (e, i) => {
                    return (
                      <li className="block" key={i}><Link href="/words/slug" className="flex py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 group"><span className="block pr-6 lg:pr-12">Year</span><span className="flex-1 relative lg:pr-12">Exhibition Title, Gallery, City, State, Country<span className="absolute top-[-3px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></span></Link></li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h3 className="text-3xl lg:text-4xl block leading-none mb-5">Group Exhibitions</h3>
                <ul className="border-t border-gray">
                  {Array.from(Array(8), (e, i) => {
                    return (
                      <li className="block" key={i}><Link href="/words/slug" className="flex py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 group"><span className="block pr-6 lg:pr-12">Year</span><span className="flex-1 relative lg:pr-12">Exhibition Title, Gallery, City, State, Country<span className="absolute top-[-3px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></span></Link></li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h3 className="text-3xl lg:text-4xl block leading-none mb-5">Other</h3>
                <ul className="border-t border-gray">
                  {Array.from(Array(3), (e, i) => {
                    return (
                      <li className="block" key={i}><Link href="/words/slug" className="flex py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-in-out duration-300 lg:hover:pl-1 group"><span className="block pr-6 lg:pr-12">Year</span><span className="flex-1 relative lg:pr-12">Exhibition Title, Gallery, City, State, Country<span className="absolute top-[-3px] right-0 w-7 transition-opacity ease-in-out duration-300 opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span></span></Link></li>
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
