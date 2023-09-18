export default function ModularEmbedBlock({ embedCode }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: embedCode}} />
  )
}