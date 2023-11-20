export default function ModularEmbedBlock({ embedCode, width }) {
  let wrapper = 'col-span-12 lg:col-span-10 lg:col-start-3'
  width == '6' && (wrapper = 'col-span-12 lg:col-span-6 lg:col-start-7')
  width == '10' && (wrapper = 'col-span-12 lg:col-span-10 lg:col-start-3')

  return embedCode && (
    <div className={wrapper} dangerouslySetInnerHTML={{ __html: embedCode}} />
  )
}