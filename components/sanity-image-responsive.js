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

	return (
    <figure className={`block image w-full ${className ? className : ''}`}>
      <Image
        src={imageProps?.src}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,80vw`}
        className={`${className ? className : '' } bg-black/10 w-full ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-[1000ms]`}
        quality={quality ? quality : 85}
        width={image?.asset.metadata.dimensions.width / 1.5}
        height={image?.asset.metadata.dimensions.height / 1.5}
        {...(priority ? {priority: true} : {})}
        alt={image.alt ? image.alt : 'MISSING ALT TEXT'}
        
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
      
      {image.caption && (
        <figcaption className="block text-sm/snug lg:text-base/snug text-gray py-2">
          <BodyRich content={image.caption} />
        </figcaption>
      )}
    </figure> 
  )
}