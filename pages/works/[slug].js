import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, AnimatePresence, LayoutGroup } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { SplitText } from '@/components/splitText'
import { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { worksSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImageResponsive from '@/components/sanity-image-responsive'
import BodyRich from '@/components/body-rich'
import Link from 'next/link'
import ConditionalWrap from 'conditional-wrap';
import GalleryImages from '@/components/gallery-images'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMousePosition } from '@/helpers/mousePosition'
import { useRouter } from 'next/router'
import useKeypress from 'react-use-keypress';
import { GalleryContext } from '@/context/gallery'
import Div100vh, { use100vh } from 'react-div-100vh'

const pageService = new SanityPageService(worksSlugQuery)

export default function WorkSlug(initialData) {
  const { data: { work, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  const router = useRouter()
  const pathname = usePathname()
  // const [mode, setMode] = useState('info' )

  const mousePosition = useMousePosition();
  const [textExpanded, setTextExpanded] = useState(false)
  // const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  // const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const searchParams = useSearchParams();
  const [galleryContext, setGalleryContext] = useState(0)  
  const [modeState, setModeState] = useState('gallery')
  const mode = searchParams.get('mode')

  const textExpandToggle = () => {
    textExpanded ? setTextExpanded(false) : setTextExpanded(true)
  }

  const scrollNext = () => {
    galleryContext != (work.gallerySlides?.length) && setGalleryContext(galleryContext + 1)
  }

  const scrollNextMob = () => {
    galleryContext != (mobileSlides?.length) && setGalleryContext(galleryContext + 1)
  }

  const scrollPrev = () => {
    galleryContext != 0 && setGalleryContext(galleryContext - 1)
  }

  useKeypress('ArrowLeft', () => {
    scrollPrev();
  });

  useKeypress('ArrowRight', () => {
    if (galleryContext == work.gallerySlides?.length) {
      if (work.next) {
        router.push(`/works/${work.next.slug.current}`)
      } else {
        router.push(`/works/${work.first.slug.current}`)
      }
    } else {
      scrollNext();
    }
  });

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const goToSpecificIndex = (index) => {
    setModeState('gallery')
    setGalleryContext(index)
  }

  let dimsArray = work.dims.split("(")
  let mobileSlides = []
  
  if (work.gallerySlides) {
    for (let slide of work.gallerySlides) {
      if (!slide.videoEmbed && slide.images) {
        if (slide._type == 'itemCustomizable') {
          for (let image of slide.images) {
            mobileSlides.push(image.image);
          }
        } else if (slide._type == 'defaultImage') {
          for (let image of slide.images) {
            mobileSlides.push(image);
          }
        } else if (slide._type == 'item') {
          for (let image of slide.images) {
            mobileSlides.push(image);
          }
        }
      }
    }
  }
  const screenHeight = use100vh()
  const splitNextTitle = work.next?.title.split(' ')
  const splitFirstTitle = work.first?.title.split(' ')

  return (
    <Layout>
      <NextSeo title={work.title} />

      <Header contact={contact} worksCats={firstWorksCatSlug} />
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="p-4 lg:p-8 absolute top-0 left-0 right-0 w-full z-[10]">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 pt-12 lg:pt-0">
              <div className="col-span-2 lg:col-start-3 block">
                <div className="hidden lg:block leading-[1]">
                  <ConditionalWrap
                    condition={galleryContext == work.gallerySlides?.length}
                    wrap={children => (
                      <button aria-label="Scroll to previous slide" className="a11y-focus text-left appearance-none" onClick={scrollPrev}>
                        {children}
                      </button>
                    )}
                  >
                    <span className="flex flex-wrap overflow-hidden relative xl:pr-[20%] leading-[1]">
                      {galleryContext == work.gallerySlides?.length && (<>
                        <SplitText
                          animate="enter"
                          exit="exit"
                          initial={{ y: '100%' }}
                          transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                          variants={{
                            enter: i => ({ y: 0 }),
                            exit: i => ({ y: '100%' })
                          }}
                        >
                          Back To&nbsp;
                        </SplitText></>)}
                      <span className={`flex flex-wrap transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${galleryContext == work.gallerySlides?.length ? 'text-gray' : 'text-black dark:text-white'}`}>
                        <SplitText
                          animate="enter"
                          exit="exit"
                          initial={{ y: '100%' }}
                          transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                          variants={{
                            enter: i => ({ y: 0 }),
                            exit: i => ({ y: '100%' })
                          }}
                        >
                          {work.title}
                        </SplitText>
                      </span>
                    </span>
                  </ConditionalWrap>
                </div>

                <div className="block lg:hidden">
                  <ConditionalWrap
                    condition={galleryContext == mobileSlides?.length}
                    wrap={children => (
                      <button aria-label="Scroll to previous slide" className="a11y-focus text-left appearance-none leading-[1] mb-0 pb-0" onClick={scrollPrev}>
                        {children}
                      </button>
                    )}
                  >
                    <span className="flex flex-wrap overflow-hidden relative xl:pr-[30%] leading-[1]">
                      
                      {galleryContext == mobileSlides?.length && (<>
                        <SplitText
                          animate="enter"
                          exit="exit"
                          initial={{ y: '100%' }}
                          transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                          variants={{
                            enter: i => ({ y: 0 }),
                            exit: i => ({ y: '100%' })
                          }}
                        >
                          Back To&nbsp;
                        </SplitText></>)}
                      </span>
                      <span className={`flex flex-wrap transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] leading-[1] ${galleryContext == mobileSlides?.length ? 'text-gray' : 'text-black dark:text-white'}`}>
                        <SplitText
                          animate="enter"
                          exit="exit"
                          initial={{ y: '100%' }}
                          transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                          variants={{
                            enter: i => ({ y: 0 }),
                            exit: i => ({ y: '100%' })
                          }}
                        >
                          {work.title}
                        </SplitText>
                      </span>
                  </ConditionalWrap>
                </div>
              </div>


              <div className="col-span-1 lg:col-span-2 leading-[0.9] text-gray hidden lg:block">
                { work.gallerySlides && (
                  <span className="block relative overflow-hidden">
                    <span className={`block transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${ galleryContext + 1 > work.gallerySlides?.length ? 'translate-y-full' : 'translate-y-0' }`}>
                      <m.button
                        onClick={()=> {
                          setModeState('gallery')
                        }}
                        aria-label="Change to gallery mode"
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                        className={`block leading-none a11y-focus ${(modeState == 'gallery') && 'text-black dark:text-white'}`}
                      >Gallery</m.button>
                    </span>
                  </span>
                )}
                <span className="block relative overflow-hidden">
                  <span className={`block transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${ galleryContext + 1 > work.gallerySlides?.length ? 'translate-y-full' : 'translate-y-0' }`}>
                    <m.button
                      onClick={()=> {
                        setModeState('info')
                      }}
                      aria-label="Change to info mode"
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      className={`block leading-none a11y-focus ${modeState == 'info' && 'text-black dark:text-white'}`}
                    >Info</m.button>
                  </span>
                </span>
              </div>

              <div className="col-span-1 lg:col-span-2 block leading-[0.9] text-gray lg:hidden">
                { work.gallerySlides && (
                  <span className="block relative overflow-hidden">
                    <span className={`block transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${ galleryContext + 1 > mobileSlides?.length ? 'translate-y-full' : 'translate-y-0' }`}>
                      <m.button
                        onClick={()=> {
                          setModeState('gallery')
                        }}
                        aria-label="Change to gallery mode"
                        initial={{ y: '100%' }}
                        animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                        exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                        className={`block leading-none a11y-focus ${(modeState == 'gallery') && 'text-black dark:text-white'}`}
                      >Gallery</m.button>
                    </span>
                  </span>
                )}
                <span className="block relative overflow-hidden">
                  <span className={`block transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${ galleryContext + 1 > mobileSlides?.length ? 'translate-y-full' : 'translate-y-0' }`}>
                    <m.button
                      onClick={()=> {
                        setModeState('info')
                      }}
                      aria-label="Change to info mode"
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      className={`block leading-none a11y-focus ${modeState == 'info' && 'text-black dark:text-white'}`}
                    >Info</m.button>
                  </span>
                </span>
              </div>
              
              <div className={`col-span-1 text-right lg:text-left lg:col-span-2 block leading-[0.9] text-gray transition-opacity`}>
                <span className={`block relative overflow-hidden`}>
                  <span className={`hidden lg:block transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${ (galleryContext + 1 > work.gallerySlides?.length || modeState == 'info') ? 'translate-y-full' : 'translate-y-0' }`}>
                    <m.span
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      className="block leading-none text-black dark:text-white"
                    >{work.gallerySlides && (`${galleryContext + 1 > work.gallerySlides?.length ? galleryContext : galleryContext + 1} — ${work.gallerySlides?.length}`)}</m.span>
                  </span>

                  <span className={`block lg:hidden transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] ${ (galleryContext + 1 > mobileSlides?.length || modeState == 'info') ? 'translate-y-full' : 'translate-y-0' }`}>
                    <m.span
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                      className="block leading-none text-black dark:text-white"
                    >{mobileSlides && (`${galleryContext + 1 > mobileSlides?.length ? galleryContext : galleryContext + 1} — ${mobileSlides?.length}`)}</m.span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full">
            <div className="w-full">
              <AnimatePresence mode="wait">
                {modeState == 'gallery' ? (
                  <m.div
                    key="gallery"
                    initial={{ opacity: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    animate={{ opacity: 1, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    className="w-full h-[calc(100dvh-208px)] lg:h-[calc(100dvh-128px)] mt-52 lg:mt-32"
                  >
                    {(galleryContext !== 0 && galleryContext !== work.gallerySlides?.length) && (
                      <button onClick={scrollPrev} aria-label="Scroll to previoous slide" className={`fixed bottom-10 lg:bottom-0 lg:top-28 left-3 lg:left-0 w-8 lg:w-1/2 z-[100] text-black dark:text-white focus:border-none focus:outline-none group lg:cursor-none overflow-hidden hidden lg:block`}>
                        <svg style={{ left: mousePosition.x, top: mousePosition.y}} className="fixed w-8 lg:w-10 rotate-180 hidden lg:group-hover:block" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                        <svg className="fixed w-8 lg:w-10 rotate-180 block lg:hidden" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                      </button>
                    )}
                    
                    {(galleryContext !== work.gallerySlides?.length) && (
                      <button onClick={scrollNext} aria-label="Scroll to next slide" className={`absolute bottom-10 lg:bottom-0 lg:top-28 right-3 lg:right-0 w-8 lg:w-1/2 z-[100] text-black dark:text-white focus:border-none focus:outline-none group lg:cursor-none hidden lg:block`}>
                        <svg style={{ left: mousePosition.x, top: mousePosition.y}} className="fixed w-8 lg:w-10 hidden lg:group-hover:block" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                        <svg className="fixed w-8 lg:w-10 block lg:hidden" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                      </button>
                    )}

                    {(galleryContext !== 0 && galleryContext !== mobileSlides?.length) && (
                      <button onClick={scrollPrev} aria-label="Scroll to previous slide" className={`fixed bottom-10 lg:bottom-0 lg:top-28 left-3 lg:left-0 w-8 lg:w-1/2 z-[100] text-black dark:text-white focus:border-none focus:outline-none group lg:cursor-none overflow-hidden block lg:hidden`}>
                        <svg className="fixed w-8 lg:w-10 rotate-180 block lg:hidden" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                      </button>
                    )}
                    
                    {(galleryContext !== mobileSlides?.length) && (
                      <button onClick={scrollNextMob} aria-label="Scroll to next slide" className={`absolute bottom-10 lg:bottom-0 lg:top-28 right-3 lg:right-0 w-8 lg:w-1/2 z-[100] text-black dark:text-white focus:border-none focus:outline-none group lg:cursor-none block lg:hidden`}>
                        <svg className="fixed w-8 lg:w-10 block lg:hidden" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                      </button>
                    )}

                    {work.gallerySlides && (
                      <div className={`overflow-hidden h-full`}>
                        <div className="w-full h-full">
                          <div className="h-full w-full relative ">
                            <div className="hidden lg:block">
                              {work.gallerySlides.map((e, i) => {
                                return (
                                  <GalleryImages
                                    containerWidth={e.containerWidth}
                                    alignment={e.alignment}
                                    images={e.images}
                                    key={i}
                                    i={i}
                                    type={e._type}
                                    video={e.videoEmbed}
                                    layout={e.layout}
                                    selectedIndex={galleryContext}
                                  />
                                )
                              })}
                            </div>

                            <div className="flex gap-4 lg:hidden">
                              {mobileSlides.map((e, i) => {
                                return (
                                  <div className={`absolute inset-0 top-[50px] bottom-8 w-full px-4 lg:px-8 dark:bg-black transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] overflow-hidden items-center ${ i == galleryContext ? 'opacity-100' : 'opacity-0' }`} key={i}>
                                    <div className={`w-full relative overflow-hidden`}>
                                      <SanityImageResponsive
                                        image={e}
                                        sizes={`(max-width: 1024px) 90vw,60vw`}
                                        className="w-1/2"
                                      />
                                    </div>
                                  </div>
                                )
                              })}
                            </div>

                            <Link aria-label="Navigate to next project" href={`/works/${work.next?.slug ? work.next.slug.current : work.first.slug.current}`} className={`absolute inset-0 w-full h-full px-4 lg:px-8 bg-white dark:bg-black transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hidden lg:block ${ galleryContext == work.gallerySlides?.length ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}>
                              <div className="flex h-full items-end justify-start">
                                <div className="mb-6 lg:mb-[12vh] max-w-[75%] lg:max-w-[75%] xl:max-[65%] 2xl:max-w-[880px]">
                                  <span className="block overflow-hidden">
                                    { galleryContext == work.gallerySlides?.length && (
                                      <m.span
                                        initial={{ y: '100%' }}
                                        animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                                        exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                                        className="grey block mb-3"
                                      >Next</m.span>
                                    )}
                                  </span>
                                  
                                  <span className={`flex flex-wrap text-4xl/none lg:text-7xl text-gray ${work.next && splitNextTitle?.map((e,i) => { return (` text-${i + 1}-highlight `) })} ${!work.next && splitFirstTitle?.map((e,i) => { return (` text-${i + 1}-highlight `) })}`}>
                                    {work.next ? (
                                      <>
                                      { galleryContext == work.gallerySlides?.length && (
                                        <SplitText
                                          animate="enter"
                                          exit="exit"
                                          initial={{ y: '100%' }}
                                          transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                                          variants={{
                                            enter: i => ({ y: 0 }),
                                            exit: i => ({ y: '100%' })
                                          }}
                                        >
                                          {`${work.next.title + ' — ' + work.next.year + ', ' + work.next.media + ', ' + work.next.dims.replaceAll('x', '×').replaceAll('x', '×')}`}
                                        </SplitText>
                                      )}
                                      </>
                                    ) : (
                                      <>
                                      { galleryContext == work.gallerySlides?.length && (
                                        <SplitText
                                          animate="enter"
                                          exit="exit"
                                          initial={{ y: '100%' }}
                                          transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                                          variants={{
                                            enter: i => ({ y: 0 }),
                                            exit: i => ({ y: '100%' })
                                          }}
                                        >
                                          {`${work.first.title + ' — ' + work.first.year + ', ' + work.first.media + ', ' + work.first.dims.replaceAll('x', '×').replaceAll('x', '×')}`}
                                        </SplitText>
                                      )}
                                      </>
                                    )}
                                  </span>

                                </div>
                              </div>    
                            </Link>

                            <Link aria-label="Navigate to next project" href={`/works/${work.next?.slug ? work.next.slug.current : work.first.slug.current}`} className={`absolute inset-0 w-full h-full px-4 lg:px-8 bg-white dark:bg-black transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] block lg:hidden ${ galleryContext == mobileSlides?.length ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}>
                              <div className="flex h-full items-end justify-start">
                                <div className="mb-6 lg:mb-[10vh] max-w-[80%] lg:max-w-[65%]">
                                  <span className="block overflow-hidden">
                                    { galleryContext == mobileSlides?.length && (
                                      <m.span
                                        initial={{ y: '100%' }}
                                        animate={{ y: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                                        exit={{ y: '100%', transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                                        className="grey block mb-3"
                                      >Next</m.span>
                                    )}
                                  </span>

                                  <span className={`flex flex-wrap text-4xl/none lg:text-7xl text-gray ${ work.next && splitNextTitle?.map((e,i) => { return (` text-${i + 1}-highlight `) })} ${!work.next && splitFirstTitle?.map((e,i) => { return (` text-${i + 1}-highlight `) })}`}>
                                    {work.next ? (
                                      <>
                                        { galleryContext == mobileSlides?.length && (
                                          <SplitText
                                            animate="enter"
                                            exit="exit"
                                            initial={{ y: '100%' }}
                                            transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                                            variants={{
                                              enter: i => ({ y: 0 }),
                                              exit: i => ({ y: '100%' })
                                            }}
                                          >
                                            {`${work.next.title + ' — ' + work.next.year + ', ' + work.next.media + ', ' + work.next.dims.replaceAll('x', '×')}`}
                                          </SplitText>
                                        )}
                                      </>
                                    ) : (
                                      <>
                                        { galleryContext == mobileSlides?.length && (
                                          <SplitText
                                            animate="enter"
                                            exit="exit"
                                            initial={{ y: '100%' }}
                                            transition={{ duration: 0.35, ease: [0.71,0,0.17,1]}}
                                            variants={{
                                              enter: i => ({ y: 0 }),
                                              exit: i => ({ y: '100%' })
                                            }}
                                          >
                                            {`${work.first.title + ' — ' + work.first.year + ', ' + work.first.media + ', ' + work.first.dims.replaceAll('x', '×')}`}
                                          </SplitText>
                                        )}
                                      </>
                                    )}
                                  </span>
                                </div>
                              </div>    
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </m.div>
                ) : (
                  <m.div
                    key="info"
                    initial={{ opacity: 0, transition: { duration: 0.175, ease: [0.71,0,0.17,1]}}}
                    animate={{ opacity: 1, transition: { duration: 0.175, ease: [0.71,0,0.17,1]}}}
                    exit={{ opacity: 0, transition: { duration: 0.175, ease: [0.71,0,0.17,1]}}}
                    className="w-full min-h-screen pt-64 lg:pt-80 px-4 lg:px-8"
                  >
                    <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8">
                      <div className="col-span-1 lg:col-span-2">
                        {work.yearFormatted && (
                          <div className="mb-3 lg:mb-5">
                            <span className="block text-base/none mb-1">Year</span>
                            {work.yearFormatted ? (
                              <span className="block">{new Intl.DateTimeFormat('en-GB', {year: 'numeric'}).format(new Date(work.yearFormatted))}</span>
                            ) : (
                              <span className="block">{work.year}</span>
                            )}
                          </div>
                        )}
                        {work.dims && (
                          <div className="mb-3 lg:mb-5 math">
                            <span className="block text-base/none mb-1">Dimensions</span>
                            {dimsArray.length > 1 ? (
                              <span className="block leading-[1.2]">{dimsArray[0].replaceAll('x', '×')}<br/>({dimsArray[1].replaceAll('x', '×')}</span>
                            ) : (
                              <span className="block leading-[1.2]">{dimsArray[0].replaceAll('x', '×')}</span>
                            )}
                          </div>
                        )}
                        {work.links && (
                          <div className="mb-3 lg:mb-5">
                            <span className="block text-base/none mb-1">Links</span>
                            
                            {work.links.map((e,i) => {
                              let route = '/'
                              e?.internalLink?._type == 'work' && (route = '/works')
                              e?.internalLink?._type == 'words' && (route = '/words')
                              e?.internalLink?._type == 'exhibitions' && (route = '/exhibitions')
                              e?.internalLink?._type == 'pages' && (route = '/pages')

                              return e.internalLink ? (
                                <Link href={`${route}/${e.internalLink.slug.current}`} className="block leading-none text-gray transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white mb-1 a11y-focus" key={i}>{e.linkText}</Link>
                              ) : (
                                <a href={e.externalLink} rel="noopener noreferrer" target="_blank" className="block leading-none text-gray transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white mb-1 a11y-focus" key={i}>{e.linkText}</a>
                              )
                            })}
                          </div>
                        )}

                        <div className="">
                          <span className="block text-base/none mb-1">Back To</span>
                          <span className="block leading-none text-gray"><Link className="text-gray transition-colors ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] hover:text-black dark:hover:text-white focus-visible:text-black dark:focus-visible:text-white a11y-focus" href={`/works/categories/${work.category?.slug.current}/#${work.slug?.current}`} scroll={false}>{work.category?.title}</Link></span>
                        </div>
                      </div>

                      <div className="col-span-1 lg:col-span-2">
                        {work.media && (
                          <div className="mb-3 lg:mb-5">
                            <span className="block text-base/none mb-1">Medium</span>
                            <span className="block leading-[1.2]">{work.media}</span>
                          </div>
                        )}
                        {work.iterations && (
                          <div className="mb-3 lg:mb-5">
                            <span className="block text-base/none mb-1">Iterations</span>
                            <span className="block">{work.iterations}</span>
                          </div>
                        )}
                      </div>

                      <div className="col-span-2 lg:col-span-5 lg:col-start-7 mt-16 lg:mt-0">
                        {work.text && (
                          <>
                            <div className={`content mb-4 lg:mb-6 w-[90%] lg:w-full`}>
                              {work.text?.length > 2 && !textExpanded ? (
                                <BodyRich content={work.text?.slice(0,2)} />
                              ) : (
                                <BodyRich content={work.text} />
                              )}
                            </div>

                            {work.text?.length > 2 && (
                              <button aria-label="Expand text" onClick={textExpandToggle} className="text-gray block">{textExpanded ? '- Read Less' : '+ Read more'}</button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    
                    {work.gallerySlides && (
                      <>
                        <ul className="grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 lg:gap-y-12 mt-16 lg:mt-28 mb-4 lg:mb-32 hidden lg:grid">
                          {work.gallerySlides.map((e, index) => {
                            return (
                              <Fragment key={index}>
                              {e.images?.map((img, i) => {
                                return (
                                  <li key={i} className="block col-span-1">
                                    <button aria-label="Scroll to specific slide" onClick={ ()=> goToSpecificIndex(index)} className="w-full text-left block">
                                      <SanityImageResponsive
                                        image={img.image ? img.image : img}
                                        sizes={`(max-width: 1024px) 100vw,25vw`}
                                        />
                                    </button>
                                  </li>
                                  )
                                })}
                              </Fragment>
                            )
                          })}
                        </ul>

                        <ul className="grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 lg:gap-y-12 mt-16 lg:mt-28 mb-4 lg:mb-32 grid lg:hidden">
                        {mobileSlides.map((e, i) => {
                          return (
                            <li key={i} className="block col-span-1">
                              <button aria-label="Go to specific slide" onClick={ ()=> goToSpecificIndex(i)} className="w-full text-left block">
                                <SanityImageResponsive
                                  image={e}
                                  sizes={`(max-width: 1024px) 100vw,25vw`}
                                  />
                              </button>
                            </li>
                            )
                        })}
                        </ul>
                      </>
                    )}
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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('work')
  return {
    paths: paths,
    fallback: false,
  };
}