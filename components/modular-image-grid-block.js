import SanityImageResponsive from "./sanity-image-responsive"
import { m } from "framer-motion"
export default function ModularImageGridBlock({ images, columns, width }) {
  let containerWidth = 'col-span-12 lg:col-span-6 lg:col-start-7'
  let innerGridCols = 'grid-cols-12 gap-4 lg:gap-8'

  width == 'six' && (
    containerWidth = 'col-span-12 lg:col-span-6 lg:col-start-7'
  )
  width == 'ten' && (
    containerWidth = 'col-span-12 lg:col-span-10 lg:col-start-3'
  )

  let cols = 'col-span-4'
  let sizes = '(max-width: 1024px) 100vw,33vw'
  
  columns == 'one' && (
    cols = 'col-span-12',

    images.length > 1 ? (
      sizes = '(max-width: 1024px) 100vw,50vw'
     ) : (
      width == 'ten' ? (
        sizes = '(max-width: 1024px) 100vw,80vw'
      ) : (
        sizes = '(max-width: 1024px) 100vw,55vw'
      )
    )
  )
  columns == 'two' && (
    cols = 'col-span-6',
    images.length > 1 ? (
      sizes = '(max-width: 1024px) 100vw,55vw'
     ) : (
      width == 'ten' ? (
        sizes = '(max-width: 1024px) 100vw,80vw'
      ) : (
        sizes = '(max-width: 1024px) 100vw,55vw'
      )
    )
  )
  columns == 'three' && (
    cols = 'col-span-4 lg:col-span-4',
    images.length > 1 ? (
      sizes = '(max-width: 1024px) 100vw,33vw'
     ) : (
      sizes = '(max-width: 1024px) 100vw,80vw'
     )
  )
  columns == 'four' && (
    cols = 'col-span-4 lg:col-span-3',
    images.length > 1 ? (
      sizes = '(max-width: 1024px) 100vw,25vw'
     ) : (
      sizes = '(max-width: 1024px) 100vw,80vw'
     )
  )
  
  columns == 'five' && (
    cols = 'col-span-1',
    width == 'six' && (
      innerGridCols = 'grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8'
    ),
    width == 'ten' && (
      innerGridCols = 'grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8'
    ),
    images.length > 1 ? (
      sizes = '(max-width: 1024px) 100vw,25vw'
     ) : (
      sizes = '(max-width: 1024px) 100vw,80vw'
     )
  )

  return images && (
    <div className={`${containerWidth} grid ${innerGridCols} px-0`}>
      {images.map((e,i) => {
        return (
          <div className={cols} key={i}>
            <div className={`w-full relative overflow-hidden`}>
              <m.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2, type: "spring", stiffness: 250, damping: 45, mass: 1 }}}
              >
                <SanityImageResponsive
                  image={e}
                  sizes={sizes}
                  noCaption={images.length > 8}
                  className={`w-full`}
                  fancyHover={true}
                />
              </m.div>
            </div>
          </div>
        )
      })}
    </div>
  )
}