import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { SplitText } from '@/components/splitText'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

export default function WorksSlug() {
  const [mode, setMode] = useState('gallery')
  const [carouselReady, setCarouselReady] = useState(false)
  const classNamesOptions = { selected: 'my-selected-class', inView: 'is-in-view'  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, inViewThreshold: 1, skipSnaps: false }, [
    ClassNames(classNamesOptions)
  ])

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
    setCarouselReady(true)
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

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
          <div className="p-4 lg:p-8 absolute top-0 left-0 right-0 w-full z-[10]">
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
                  <m.button
                    onClick={()=> setMode('gallery')}
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className={`block leading-none a11y-focus ${mode == 'gallery' && 'text-black dark:text-white'}`}
                  >Gallery</m.button>
                </span>
                <span className="block relative overflow-hidden">
                  <m.button
                    onClick={()=> setMode('info')}
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className={`block leading-none a11y-focus ${mode == 'info' && 'text-black dark:text-white'}`}
                  >Info</m.button>
                </span>
              </div>
              
              <div className={`col-span-2 block leading-[0.9] text-gray transition-opacity ease-in-out duration-[330ms] delay-[330ms] ${ mode == 'info' && 'opacity-0 delay-[0ms]' }`}>
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

          <m.article variants={fade} className="w-full">
            <div className="w-full">
              <AnimatePresence mode="wait">
                {mode == 'gallery' ? (
                  <m.div
                    key="gallery"
                    initial={{ opacity: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1]}}}
                    animate={{ opacity: 1, transition: { duration: 0.33, ease: [0.71,0,0.17,1]}}}
                    exit={{ opacity: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1]}}}
                    className="w-full h-screen pt-52 lg:pt-16"
                  >
                    <button onClick={scrollPrev} disabled={prevBtnDisabled} type="submit" className={`block absolute bottom-3 lg:bottom-auto lg:top-[calc(50%-20px)] left-3 lg:left-8 w-8 lg:w-10 text-gray z-[100] ${prevBtnDisabled ? 'opacity-20 cursor-not-allowed' : 'a11y-focus lg:hover:text-black focus-visible:text-black dark:lg:hover:text-white dark:focus-visible:text-white' }`}>
                      <svg className="w-full rotate-180" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                    </button>

                    <button onClick={scrollNext} disabled={nextBtnDisabled} type="submit" className={`block absolute bottom-3 lg:bottom-auto lg:top-[calc(50%-20px)] right-3 lg:right-8 w-8 lg:w-10 text-gray z-[100] ${nextBtnDisabled ? 'opacity-20 cursor-not-allowed' : 'a11y-focus lg:hover:text-black focus-visible:text-black dark:lg:hover:text-white dark:focus-visible:text-white' }`}>
                      <svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                    </button>

                    <div className={`carousel overflow-hidden h-full ${carouselReady && 'carousel--ready' }`}>
                      <div className="carousel-viewport w-full h-full" ref={emblaRef}>
                        <div className="carousel-container h-full w-full">
                          <div className="slide px-4 lg:px-0">
                            <div className="flex h-full items-center justify-center">
                              <div className="w-[35vh] lg:w-[40vh]">
                                <div className="aspect-[9/12] bg-gray/30 mb-4"></div>
                                <span className="block text-sm/none lg:text-base/none text-gray">Slide 1</span>
                              </div>
                            </div>
                          </div>

                          <div className="slide px-4 lg:px-0">
                            <div className="flex h-full items-center justify-center">
                              <div className="w-[35vh] lg:w-[40vh]">
                                <div className="aspect-[9/12] bg-gray/30 mb-4"></div>
                                <span className="block text-sm/none lg:text-base/none text-gray">Slide 2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                ) : (
                  <m.div
                    key="info"
                    initial={{ opacity: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1]}}}
                    animate={{ opacity: 1, transition: { duration: 0.33, ease: [0.71,0,0.17,1]}}}
                    exit={{ opacity: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1]}}}
                    className="w-full min-h-screen pt-64 lg:pt-80 px-4 lg:px-8"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8">
                      <div className="col-span-1 lg:col-span-2">
                        <div className="mb-3 lg:mb-5">
                          <span className="block text-base/none mb-1">Year</span>
                          <span className="block">2023</span>
                        </div>
                        <div className="mb-3 lg:mb-5">
                          <span className="block text-base/none mb-1">Dimensions</span>
                          <span className="block">4:5</span>
                        </div>
                        <div className="">
                          <span className="block text-base/none mb-1">Links</span>
                          <span className="block text-gray">Opensea</span>
                          <span className="block text-gray">Exhibit</span>
                        </div>
                      </div>

                      <div className="col-span-1 lg:col-span-2">
                        <div className="mb-3 lg:mb-5">
                          <span className="block text-base/none mb-1">Medium</span>
                          <span className="block">Generative Art</span>
                        </div>
                        <div className="mb-3 lg:mb-5">
                          <span className="block text-base/none mb-1">Iterations</span>
                          <span className="block">4+ Iterations</span>
                        </div>
                      </div>

                      <div className="col-span-2 lg:col-span-5 lg:col-start-7 mt-16 lg:mt-0">
                        <div className="content mb-4 lg:mb-6 w-[90%] lg:w-full">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <button className="text-gray block">Read more</button>
                      </div>
                    </div>

                    <ul className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 lg:gap-y-16 mt-16 lg:mt-28 mb-4 lg:mb-32">
                      {Array.from(Array(9), (e, i) => {
                        return (
                          <li key={i} className="block col-span-1">
                            <div className="w-full h-[60vw] lg:h-[20vw] bg-gray/30 mb-3"></div>
                            <span className="block text-sm lg:text-base text-gray">Artwork Caption</span>
                          </li>
                        )
                      })}
                    </ul>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
