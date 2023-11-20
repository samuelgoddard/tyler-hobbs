import BodyRich from '@/components/body-rich'

export default function ModularTextBlock({ text, annotationNotesRich }) {
  return (
    <>
      {annotationNotesRich && (
        <div className="col-span-12 lg:col-span-3 lg:col-start-4 content order-2 lg:order-1 pt-12 lg:pt-0 lg:pr-12">
          {annotationNotesRich.map((e, i) => {
            return (
              <div key={i} className={i+1 < annotationNotesRich.length ? 'mb-6' : '' }>
                <span className="w-7 h-7 bg-gray/30 flex items-center justify-center text-xs/none lg:text-sm/none rounded-full mb-3">{i + 1}</span>
                {e && (
                  <div className="text-sm/normal lg:text-base/normal">
                    <BodyRich content={e.content} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      { text && (
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 content order-1 lg:order-2">
          <BodyRich content={text} />
        </div>
      )}
    </>
  )
}