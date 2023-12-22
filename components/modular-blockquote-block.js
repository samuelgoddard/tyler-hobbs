import BodyRich from "./body-rich";

export default function ModularBlockquoteBlock({ text }) {
  return text && (
    <blockquote className="text-4xl/none lg:text-5xl/none w-[90%] lg:w-[75%] max-w-6xl mb-0 pl-4 border-l border-gray tracking-[-0.015em] lg:tracking-[-0.015em]">
      <BodyRich content={text} />
    </blockquote>
  )
}