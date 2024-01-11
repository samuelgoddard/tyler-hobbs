import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImageCarousel({ image, className, alt, priority, quality, sizes }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const imageProps = useNextSanityImage(
		sanity.config,
		image
	);

	return (
    <div className="relative overflow-hidden h-full">
      {/* LQIP */}
      <div
        // style={{ backgroundColor: image.asset.metadata.palette ? image.asset.metadata.palette.dominant.background : '#000'  }}
        className={`absolute inset-0 bg-black z-[10] scale-[1.025] transition-opacity ease-in-out duration-[1500ms] ${imageIsLoaded  ? 'opacity-0 delay-[350ms]' : 'opacity-100' }`}
      >
        <img width="100" height="100" src={image.asset?.metadata?.lqip} className="w-full h-full absolute inset-0 object-cover object-center" />
      </div>
      {/* LQIP */}

      <div className={`w-full h-full ${imageProps?.src.includes('.png') ? '' : 'bg-black/10'}`}>
        <Image
          src={imageProps?.src}
          sizes={sizes ? sizes : `(max-width: 1024px) 100vw,80vw`}
          className={`${className ? className : '' } w-full`}
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
    </div>
  )
}