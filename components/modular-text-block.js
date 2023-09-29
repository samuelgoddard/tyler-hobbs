import BodyRich from '@/components/body-rich'

export default function ModularTextBlock({ text, annotationNotes }) {
  return (
    <>
      {annotationNotes && (
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 content order-2 lg:order-1 pt-12 lg:pt-0">
          {annotationNotes.map((e, i) => {
            return (
              <div key={i} className={i+1 < annotationNotes.length ? 'mb-6' : '' }>
                <span className="w-7 h-7 bg-gray/30 flex items-center justify-center text-xs/none lg:text-sm/none rounded-full mb-3">{i + 1}</span>
                {e && (
                  <p className="text-sm/normal lg:text-base/normal">{e}</p>
                )}
              </div>
            )
          })}
        </div>
      )}

      { text && (
        <div className="col-span-12 lg:col-span-7 lg:col-start-6 content order-1 lg:order-2">
          <BodyRich content={text} />
        </div>
      )}
    </>
  )
}