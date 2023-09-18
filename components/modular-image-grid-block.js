import SanityImage from "./sanity-image"

export default function ModularImageGridBlock({ images, columns }) {
  let cols = 'col-span-4'
  let height = 'h-[40vw] lg:h-[22vw]'
  let sizes = '(max-width: 1024px) 100vw,33vw'

  columns == 'two' && ( cols = 'col-span-6', height = 'h-[60vw] lg:h-[33vw]', sizes = '(max-width: 1024px) 100vw,25vw' )
  columns == 'four' && ( cols = 'col-span-3', height = 'h-[30vw] lg:h-[16vw]', sizes = '(max-width: 1024px) 100vw,16vw' )

  return (
    <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 grid grid-cols-12 gap-x-4">
        {images.map((e,i) => {
          return (
            <div className={cols} key={i}>
              <div className={`w-full relative overflow-hidden ${height}`}>
                <SanityImage
                  image={e}
                  sizes={sizes}
                  className={`w-full h-full absolute inset-0 object-center object-cover`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}