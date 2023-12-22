import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import BodyRich from './body-rich';
import { AnimatePresence, m } from 'framer-motion';
import ConditionalWrap from 'conditional-wrap';
import Link from 'next/link';

export default function SanityImageResponsive({ image, className, alt, priority, quality, sizes }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(priority ? priority : false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  const lightboxToggle = () => {
    lightboxOpen ? setLightboxOpen(false) : setLightboxOpen(true)
  }

  const imageProps = useNextSanityImage(
		sanity.config,
		image
	);
  
  let route = '/'

  image?.linksTo?._type == 'work' && (route = '/works')
  image?.linksTo?._type == 'words' && (route = '/words')
  image?.linksTo?._type == 'exhibitions' && (route = '/exhibitions')
  image?.linksTo?._type == 'pages' && (route = '/pages')

	return (
    <ConditionalWrap
      condition={image?.linksTo}
      wrap={children => (
        <Link href={`${route}/${image.linksTo?.slug.current}`}>
          {children}
        </Link>
      )}
    >
      <figure className={`block relative image w-full ${className ? className : ''}`}>
        <div className={`w-full ${imageProps?.src.includes('.png') ? '' : 'bg-black/10'}`}>
          <Image
            src={imageProps?.src}
            sizes={sizes ? sizes : `(max-width: 1024px) 100vw,80vw`}
            className={`${className ? className : '' } w-full ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-[1000ms]`}
            quality={quality ? quality : 90}
            width={image?.asset?.metadata.dimensions.width / 2}
            height={image?.asset?.metadata.dimensions.height / 2}
            {...(priority ? {priority: true} : {})}
            alt={image.alt ? image.alt : 'MISSING ALT TEXT'}
            
            onLoad={event => {
              const target = event.target;
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true)
              }
            }}
          />
        </div>

        {/* FULL SCREEN / LIGHTBOX */}
        {image.fullScreenToggle && (
          <>
            <button onClick={()=>lightboxToggle()} className="absolute inset-0 w-full h-full z-10 group a11y-focus">
              <div className="rotate-45 transition-transform ease-in-out duration-300 group-hover:rotate-0 group-focus:ouline-none a11y-focus w-6 absolute bottom-6 right-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M2 9H0v5h5v-2H2V9ZM0 5h2V2h3V0H0v5Zm12 7H9v2h5V9h-2v3ZM9 0v2h3v3h2V0H9Z"/></svg>
              </div>
            </button>

            <AnimatePresence>
              { lightboxOpen && (
                <m.div
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                  exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]} }}
                  className="fixed inset-0 z-[100] bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-[6px] flex flex-col items-center justify-center p-3"
                  onClick={()=>lightboxToggle()}
                >
                  <button onClick={()=>lightboxToggle()} className="absolute p-2 top-5 right-5 transition-transform ease-in-out duration-300 lg:hover:-translate-x-1">
                    Close
                  </button>

                  <div className="w-full lg:w-full max-w-[100vh]">
                    <Image
                      src={imageProps?.src}
                      sizes={`(max-width: 1024px) 100vw,90vw`}
                      className={`w-full`}
                      quality={90}
                      width={image?.asset?.metadata.dimensions.width / 2}
                      height={image?.asset?.metadata.dimensions.height / 2}
                      alt={image.alt ? image.alt : 'MISSING ALT TEXT'}
                    />
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </>
        )}
        
        {image.caption && (
          <figcaption className="block text-sm/snug lg:text-base/snug text-gray py-2">
            <BodyRich content={image.caption} />
          </figcaption>
        )}
      </figure> 
    </ConditionalWrap>
  )
}