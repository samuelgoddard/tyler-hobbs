import SanityImage from "./sanity-image"
import SanityImageResponsive from "./sanity-image-responsive"
import { m } from "framer-motion"

export default function GalleryImages({ containerWidth, images, i, selectedIndex, alignment, type, video, layout, tall, veryTall }) {
  
  let innerCols = 'col-span-6'
  let alignClass = 'justify-center'

  let fill = false
  let centeredY = true

  let sizes = `(max-width: 1024px) 90vw,66vw`

  let maxW = ''
  
  alignment == 'left' && (alignClass = 'justify-start')
  alignment == 'right' && (alignClass = 'justify-end')

  containerWidth == 4 && ( 
    innerCols = 'w-[32.11%]',

    tall && (
      innerCols = 'w-[32.11%] max-w-[45dvh]'
    ),
    veryTall && (
      innerCols = 'w-[32.11%] max-w-[35dvh]'
    )
  )
  containerWidth == 6 && (
    innerCols = 'w-[49.33%]',

    (tall && images.length == 1) && (
      innerCols = 'w-[49.33%] max-w-[50dvh]'
    ),
    (tall && images.length > 1) && (
      innerCols = 'w-[49.33%] max-w-[88dvh]'
    ),
    (veryTall && images.length == 1) && (
      innerCols = 'w-[49.33%] max-w-[35dvh]'
    ),
    (veryTall && images.length > 1) && (
      innerCols = 'w-[49.33%] max-w-[72dvh]'
    )
  )
  containerWidth == 8 && (
    innerCols = 'w-[66.11%]',
    sizes = `(max-width: 1024px) 90vw,75vw`,

    (tall && images.length > 1) && (
      innerCols = 'w-[66.11%] max-w-[110dvh]'
    ),
    (tall && images.length > 2) && (
      innerCols = 'w-[66.11%] max-w-[80dvh]'
    ),
    (veryTall && images.length > 1) && (
      innerCols = 'w-[66.11%] max-w-[90dvh]'
    ),
    (veryTall && images.length > 2) && (
      innerCols = 'w-[66.11%] max-w-[100dvh]'
    )
  )
  containerWidth == 10 && (
    innerCols = 'w-[83%]',
    sizes = `(max-width: 1024px) 90vw,80vw`,

    (tall && images.length == 1) && (
      innerCols = 'w-[83%] max-w-[45vh]'
    ),
    (tall && images.length > 1) && (
      innerCols = 'w-[83%] max-w-[120vh]'
    ),
    (tall && images.length > 2) && (
      innerCols = 'w-[83%] max-w-[145dvh]'
    ),

    (veryTall && images.length == 1) && (
      innerCols = 'w-[83%] max-w-[35vh]'
    ),
    (veryTall && images.length > 1) && (
      innerCols = 'w-[83%] max-w-[100vh]'
    ),
    (veryTall && images.length > 2) && (
      innerCols = 'w-[83%] max-w-[125dvh]'
    )
  )
  containerWidth == 12 && (
    innerCols = 'w-[100%]',
    fill = images.length == 1 ? true : false,
    sizes = `(max-width: 1024px) 90vw,99vw`,

    (images.length > 1) && (
      sizes = `(max-width: 1024px) 90vw,50vw`
    ),
    
    (tall && images.length == 1) && (
      innerCols = 'w-[100%] max-w-[45vh]'
    ),
    (tall && images.length > 1) && (
      innerCols = 'w-[100%] max-w-[155vh]'
    ),
    (tall && images.length > 3) && (
      innerCols = 'w-[100%] max-w-[180dvh]'
    ),
    (veryTall && images.length == 1) && (
      innerCols = 'w-[100%] max-w-[35vh]'
    ),
    (veryTall && images.length > 1) && (
      innerCols = 'w-[100%] max-w-[125vh]'
    ),
    (veryTall && images.length > 3) && (
      innerCols = 'w-[100%] max-w-[150dvh]'
    )
  )

  return(
    <m.div
      initial={{ y: 45 }}
      animate={{ y: 0, transition: { type: "spring", stiffness: 250, damping: 75, mass: 1 }}}
      className={`absolute inset-0 bottom-8 w-full px-4 lg:px-8 dark:bg-black transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] overflow-hidden items-center ${ i == selectedIndex ? 'opacity-100' : 'opacity-0' }`}>
      {/* <div className="fixed bottom-0 left-0 z-[10000] text-sm font-mono">Debug:{containerWidth}</div> */}

      {/* <div className="fixed bottom-0 left-0 z-[10000] text-sm font-mono">Debug:{layout}</div> */}
      
      <div className={`h-full flex flex-wrap items-center ${alignClass}`}>
        {(type == 'item' && images) && (
          <div className={`h-full ${innerCols}`}>
            <div className={`flex h-full space-x-6 ${centeredY && 'items-center'} ${alignClass}`}>
              <div className={`flex w-full items-start justify-center space-x-6 ${containerWidth == 12 && images.length == 1 && 'h-full'}`}>
                {images.map((img, i) => {
                  return (
                    <div className={`${fill ? 'h-full' : '' } w-full relative overflow-hidden  ${maxW}`} key={i}>
                      { fill ? (
                        <SanityImage
                          image={img}
                          sizes={sizes}
                          className="w-full h-full object-cover object-center absolute inset-0"
                          focalPoint={img.hotspot}
                          crop={img.crop}
                        />
                      ) : (
                        <SanityImageResponsive
                          image={img}
                          className="w-full"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {type == 'itemCustomizable' && (
          <div className={`h-full w-full`}>
            <div className={`flex w-full space-x-6 h-full`}>
              {images.map((img, i) => {
                let imageW = 'w-auto'
                let sizesinner = `(max-width: 1024px) 90vw,66vw`

                if (i == 0 && layout == '5050') {
                  imageW = 'w-[50%]'
                }
                if (i == 1 && layout == '5050') {
                  imageW = 'w-[50%]'
                }

                if (i == 0 && layout == '7030') {
                  imageW = 'w-[70%]',
                  sizesinner = `(max-width: 1024px) 90vw,85vw`
                }
                if (i == 1 && layout == '7030') {
                  imageW = 'w-[30%]',
                  `(max-width: 1024px) 90vw,45vw`
                }

                if (i == 0 && layout == '3070') {
                  imageW = 'w-[30%]',
                  `(max-width: 1024px) 90vw,45vw`
                }
                if (i == 1 && layout == '3070') {
                  imageW = 'w-[70%]',
                  `(max-width: 1024px) 90vw,85vw`
                }
                return (
                  <div className={`${img.fillMode ? 'h-full' : '' } relative overflow-hidden ${imageW}`} key={i}>
                    { img.fillMode ? (
                      <SanityImage
                        image={img.image}
                        sizes={sizesinner}
                        className="w-full h-full object-cover object-center absolute inset-0"
                        focalPoint={img.image.hotspot}
                        crop={img.image.crop}
                      />
                    ) : (
                      <SanityImageResponsive
                        image={img.image}
                        className="w-full"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {type == 'itemVideo' && (
          <div className={`h-full ${innerCols}`}>
            <div className={`flex h-full space-x-6 ${centeredY && 'items-center'} ${alignClass}`}>
              <div className="slideIframe w-full relative z-[999]">
                <div className="w-full" dangerouslySetInnerHTML={{ __html: video }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </m.div>
  )
}