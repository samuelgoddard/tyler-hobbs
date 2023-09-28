export default function ModularEmbedBlock({ embedCode }) {
  return embedCode && (
    <div dangerouslySetInnerHTML={{ __html: embedCode}} />
  )
}