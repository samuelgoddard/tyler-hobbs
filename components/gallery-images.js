import SanityImage from "./sanity-image"
import SanityImageResponsive from "./sanity-image-responsive"

export default function GalleryImages({ containerWidth, images, i, selectedIndex, alignment, video }) {
  
  let innerCols = 'col-span-6'
  let alignClass = 'justify-center'

  let fill = false
  let centeredX = true
  let centeredY = true
  
  alignment == 'left' && (alignClass = 'justify-start')
  alignment == 'right' && (alignClass = 'justify-end')

  containerWidth == 4 && ( 
    innerCols = 'w-[32.11%]'
  )
  containerWidth == 6 && (
    innerCols = 'w-[49.33%]'
  )
  containerWidth == 8 && (
    innerCols = 'w-[66.11%]'
  )
  containerWidth == 10 && (
    innerCols = 'w-[83%]'
  )
  containerWidth == 12 && (
    innerCols = 'w-[100%]',
    fill = images.length == 1 ? true : false
  )

  return(
    <div className={`absolute inset-0 top-[50px] bottom-8 w-full px-4 lg:px-8 dark:bg-black transition-opacity ease-in-out duration-300 overflow-hidden items-center ${ i == selectedIndex ? 'opacity-100' : 'opacity-0' }`}>
      {/* <div className="fixed bottom-0 left-0 z-[10000] text-sm font-mono">Debug:{containerWidth}</div> */}
      
      <div className={`h-full flex flex-wrap items-center ${alignClass}`}>
        {images && (
          <div className={`h-full ${innerCols}`}>
            <div className={`flex h-full space-x-6 ${centeredY && 'items-center'} ${alignClass}`}>
              <div className={`flex w-full items-start space-x-6 ${containerWidth == 12 && images.length == 1 && 'h-full'}`}>
                {images.map((img, i) => {
                  // let portrait = (img.asset.metadata.dimensions.height > img.asset.metadata.dimensions.width)
                  return (
                    <div className={`${fill ? 'h-full' : '' } w-full relative overflow-hidden`} key={i}>
                      { fill ? (
                        <SanityImage
                          image={img}
                          sizes={`(max-width: 1024px) 90vw,60vw`}
                          className="w-full h-full object-cover object-center absolute inset-0"
                        />
                      ) : (
                        <SanityImageResponsive
                          image={img}
                          sizes={`(max-width: 1024px) 90vw,60vw`}
                          className="w-1/2"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {video && (
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