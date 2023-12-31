import SanityImageResponsive from "./sanity-image-responsive"
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import SanityImage from "./sanity-image"

export default function Carousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 33 })
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
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return(
    <>
      <div className={`w-full relative overflow-hidden ${images.length > 1 && 'mb-3'} embla`}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((e,i) => {
              return (
                <div className="embla__slide relative w-full h-[53vw]" key={i}>
                  <SanityImage
                    image={e}
                    sizes={`(max-width: 1024px) 100vw,80vw`}
                    className="w-full h-full absolute inset-0"
                    priority={i == 0 ? true : false}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full flex items-center z-10">
          <button
            className="w-1/2 h-full block lg:opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300"
            type="button"
            onClick={scrollPrev}
          >
            <svg className="w-5 lg:w-6 ml-2 lg:ml-4" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>

          <button
            className="w-1/2 h-full block lg:opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300"
            type="button"
            onClick={scrollNext}
          >
            <svg className="w-5 lg:w-6 mr-2 lg:mr-4 rotate-180 ml-auto" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </button>

          {/* <NextButton onClick={scrollNext} disabled={nextBtnDisabled} /> */}
        </div>
      </div>
      
      {images.length > 1 && (
        <div className="flex text-base/none lg:text-base/none text-gray space-x-2">
          {scrollSnaps.map((_, i) => (
            <button className={'embla__dot'.concat(i === selectedIndex ? ' text-black dark:text-white' : '' )} key={i} onClick={() => scrollTo(i)} type="button">{i + 1}</button>
          ))}
        </div>
        // <ul className="flex text-base/none lg:text-base/none text-gray space-x-2">
        //   {images.map((e, i) => {
        //     return (
        //       <li key={i} className={i == 1 ? 'text-black dark:text-white' : '' }>{i + 1}</li>
        //     )
        //   })}
        // </ul>
      )}
    </>
  )
}