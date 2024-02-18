import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import BodyRich from './body-rich';
import { AnimatePresence, m } from 'framer-motion';
import ConditionalWrap from 'conditional-wrap';
import Link from 'next/link';

export default function SanityImageResponsive({ image, className, alt, priority, quality, sizes, noCaption, widthOverride, focalPoint, layout }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  // const [imageIsLoaded, setImageIsLoaded] = useState(priority ? priority : false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  const lightboxToggle = () => {
    lightboxOpen ? setLightboxOpen(false) : setLightboxOpen(true)
  }

  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(quality ? quality : 85)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};

  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }
  if (sizes) { attributes.sizes = sizes }
  
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
      <figure className={`block relative overflow-hidden image w-full ${className ? className : ''}`}>
        <div className="relative overflow-hidden">
          {/* LQIP */}
          {!priority && (
            <div
              // style={{ backgroundColor: image.asset.metadata.palette ? image.asset.metadata.palette.dominant.background : '#000'  }}
              className={`absolute inset-0 bg-black z-[10] scale-[1.025] transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[750ms] ${imageIsLoaded  ? 'opacity-0 delay-[350ms]' : 'opacity-100' }`}
            >
              <Image src={image.asset?.metadata?.lqip} loading="lazy" fill role="presentation" alt="Placeholder" className="w-full h-full absolute inset-0 object-cover object-center" />
            </div>
          )}
          {/* LQIP */}

          <div className={`w-full ${imageProps?.src.includes('.png') ? 'dark:bg-white' : 'bg-black/10'}`}>
            <Image
              className={`${className ? className : '' } w-full`}
              {...imageProps}
              {...attributes}
              {...(priority ? {
                priority: true} : {}
              )}
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
                <div className="group-focus:ouline-none a11y-focus absolute p-2 lg:p-2 bg-white dark:bg-black bottom-2 lg:bottom-4 right-2 lg:right-4">
                  <div className="w-4 lg:w-[21px] transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] group-hover:scale-[1.15] leading-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" fill="currentColor" d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2Z"/></svg>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                { lightboxOpen && (
                  <m.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1, transition: { duration: 0.35, ease: [0.71,0,0.17,1]}}}
                    exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.71,0,0.17,1]} }}
                    className="fixed inset-0 z-[1000] bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur-[6px] flex flex-col items-center justify-center p-3"
                    onClick={()=>lightboxToggle()}
                  >
                    <button onClick={()=>lightboxToggle()} className="absolute p-2 top-5 right-5 transition-transform ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] lg:hover:-translate-x-1">
                      Close
                    </button>

                    <div className="w-full lg:w-full max-w-[85vh]">
                      <Image
                        {...imageProps}
                        {...attributes}
                        className={`w-full`}
                        quality={90}
                      />
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
        {!noCaption && (
          <>
            {image.caption && (
              <figcaption className="block text-sm/snug lg:text-base/snug text-gray py-2">
                <BodyRich content={image.caption} />
              </figcaption>
            )}
          </>
        )}
      </figure> 
    </ConditionalWrap>
  )
}