import SanityImage from "./sanity-image"
import SanityImageResponsive from "./sanity-image-responsive"

export default function GalleryImages({ layout1, layout2, layout3, layout4, layout5, images, i, selectedIndex }) {
  
  let currentLayout = 'unknown'
  let image1Class = ''
  let image2Class = ''
  let image3Class = ''

  let fill = false
  let centeredX = true
  let centeredY = true

  images.length == 1 && (currentLayout = layout1)
  images.length == 2 && (currentLayout = layout2)
  images.length == 3 && (currentLayout = layout3)
  images.length == 4 && (currentLayout = layout4)
  images.length == 5 && (currentLayout = layout5)
  
  currentLayout == '12' && (
    image1Class = 'w-full h-full',
    fill = true
  )

  currentLayout == '4' && (
    image1Class = 'w-full w-[33.3%] max-w-[50vh]',
    fill = false
  )

  currentLayout == '4x2' && (
    image1Class = 'w-[32.1%] max-w-[45vh]',
    image2Class = 'w-[32.1%] max-w-[45vh]',
    fill = false
  )

  currentLayout == '6x3' && (
    image1Class = 'w-full w-[50%] max-w-[60vh] mr-auto',
    image2Class = 'w-[25vw] max-w-[50vh] ml-auto',
    fill = false
  )

  return(
    <div className={`absolute inset-0 top-[50px] bottom-8 w-full px-4 lg:px-8 dark:bg-black transition-opacity ease-in-out duration-300 overflow-hidden ${ i == selectedIndex ? 'opacity-100' : 'opacity-0' }`}>
      <div className="fixed bottom-0 left-0 bg-red-500 z-[10000] text-sm font-mono">Debug:{currentLayout}</div>
      
      {images && (
        <div className={`h-full flex flex-wrap space-x-6 ${centeredY && 'items-center'} ${centeredX && 'justify-center'}`}>
          {images.map((img, i) => {
            return (
              <div className={`${i == 0 && image1Class} ${i == 1 && image2Class} ${i == 2 && image3Class} relative overflow-hidden`} key={i}>
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
                    className="w-full"
                  />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}