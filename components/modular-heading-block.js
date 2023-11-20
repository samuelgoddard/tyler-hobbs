import BodyRich from "./body-rich";

export default function ModularHeadingBlock({ text }) {
  return text && (
    <h2 className="text-4xl lg:text-5xl xl:text-6xl w-[90%] lg:w-[80%] mb-0">
      <BodyRich content={text} />
    </h2>
  )
}