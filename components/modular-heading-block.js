import BodyRich from "./body-rich";

export default function ModularHeadingBlock({ text }) {
  return text && (
    <h2 className="text-4xl lg:text-5xl xl:text-6xl w-[90%] lg:w-[80%] mb-0 tracking-[-0.025em] lg:tracking-[-0.025em]">
      <BodyRich content={text} />
    </h2>
  )
}