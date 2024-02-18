import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImageCarousel({ image, className, alt, priority, quality, sizes, widthOverride, focalPoint, }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

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

	return (
    <div className="relative overflow-hidden h-full">
      {/* LQIP */}
      <div
        // style={{ backgroundColor: image.asset.metadata.palette ? image.asset.metadata.palette.dominant.background : '#000'  }}
        className={`absolute inset-0 bg-black z-[10] scale-[1.025] transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[700ms] ${imageIsLoaded  ? 'opacity-0 delay-[350ms]' : 'opacity-100' }`}
      >
        <img width="100" height="100" src={image.asset?.metadata?.lqip} className="w-full h-full absolute inset-0 object-cover object-center" />
      </div>
      {/* LQIP */}

      <div className={`w-full h-full ${imageProps?.src.includes('.png') ? '' : 'bg-black/10'}`}>
        <Image
          className={`${className ? className : '' } w-full`}
          quality={quality ? quality : 90}
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
    </div>
  )
}