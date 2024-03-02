import SanityImage from "./sanity-image"
import SanityImageResponsive from "./sanity-image-responsive"

export default function GalleryImages({ containerWidth, images, i, selectedIndex, alignment, type, video, layout }) {
  
  let innerCols = 'col-span-6'
  let alignClass = 'justify-center'

  let fill = false
  let centeredY = true

  let sizes = `(max-width: 1024px) 90vw,66vw`

  let maxW = ''
  
  alignment == 'left' && (alignClass = 'justify-start')
  alignment == 'right' && (alignClass = 'justify-end')

  containerWidth == 4 && ( 
    innerCols = 'w-[32.11%]'
  )
  containerWidth == 6 && (
    innerCols = 'w-[49.33%]'
  )
  containerWidth == 8 && (
    innerCols = 'w-[66.11%]',
    sizes = `(max-width: 1024px) 90vw,75vw`,

    images?.length == 2 && (
      maxW = 'max-w-[50vh]'
    )
  )
  containerWidth == 10 && (
    innerCols = 'w-[83%]',
    sizes = `(max-width: 1024px) 90vw,80vw`
  )
  containerWidth == 12 && (
    innerCols = 'w-[100%]',
    fill = images.length == 1 ? true : false,
    sizes = `(max-width: 1024px) 90vw,99vw`

    // images?.length == 2 && (
    //   maxW = 'max-w-[90ch]'
    // )
  )

  return(
    <div className={`absolute inset-0 bottom-8 w-full px-4 lg:px-8 dark:bg-black transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[500ms] overflow-hidden items-center ${ i == selectedIndex ? 'opacity-100' : 'opacity-0' }`}>
      {/* <div className="fixed bottom-0 left-0 z-[10000] text-sm font-mono">Debug:{containerWidth}</div> */}

      {/* <div className="fixed bottom-0 left-0 z-[10000] text-sm font-mono">Debug:{layout}</div> */}
      
      <div className={`h-full flex flex-wrap items-center ${alignClass}`}>
        {(type == 'item' && images) && (
          <div className={`h-full ${innerCols}`}>
            <div className={`flex h-full space-x-6 ${centeredY && 'items-center'} ${alignClass}`}>
              <div className={`flex w-full items-start justify-center space-x-6 ${containerWidth == 12 && images.length == 1 && 'h-full'}`}>
                {images.map((img, i) => {
                  // let portrait = (img.asset.metadata.dimensions.height > img.asset.metadata.dimensions.width)
                  // max-w-[45vh]

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
                          sizes={`(max-width: 1024px) 90vw,66vw`}
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
                        sizes={sizesinner}
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
    </div>
  )
}