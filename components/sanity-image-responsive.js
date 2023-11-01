import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import BodyRich from './body-rich';

export default function SanityImageResponsive({ image, className, alt, priority, quality, sizes }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(priority ? priority : false)
  const imageProps = useNextSanityImage(
		sanity.config,
		image
	);

	return image.vimeoVideoOverrideUrl ? (
    <figure className={`block image w-full relative overflow-hidden ${className ? className : ''}`}>
      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 z-[10] transition ease-[cubic-bezier(0.65,0,0.35,1)] duration-[500ms] motion-safe:block hidden ${imageIsLoaded ? 'opacity-100' : 'opacity-0' }`}>
        <source src={ image.vimeoVideoOverrideUrl } type="video/mp4" />

        Sorry. Your browser does not support the video tag.
      </video>

      <div className={`w-full ${imageProps.src.includes('.png') ? '' : 'bg-black/10'}`}>
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
      
      {image.caption && (
        <figcaption className="block text-sm/snug lg:text-base/snug text-gray py-2">
          <BodyRich content={image.caption} />
        </figcaption>
      )}
    </figure> 
  ) : (
    <figure className={`block image w-full ${className ? className : ''}`}>
      <div className={`w-full ${imageProps.src.includes('.png') ? '' : 'bg-black/10'}`}>
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
      
      {image.caption && (
        <figcaption className="block text-sm/snug lg:text-base/snug text-gray py-2">
          <BodyRich content={image.caption} />
        </figcaption>
      )}
    </figure> 
  )
}