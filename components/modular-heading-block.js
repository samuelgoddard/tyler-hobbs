export default function ModularHeadingBlock({ text }) {
  return text && (
    <h2 className="text-4xl/none lg:text-5xl/none w-[90%] lg:w-[75%] max-w-6xl mb-0">{text}</h2>
  )
}