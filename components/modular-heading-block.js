import BodyRich from "./body-rich";
import { SplitTextReveal } from "./split-text-reveal";
import { SplitText } from "./splitText";

export default function ModularHeadingBlock({ text }) {
  return text && (
    <h2 className="text-4xl lg:text-5xl xl:text-6xl w-[90%] lg:w-[80%] mb-0 tracking-[-0.025em] lg:tracking-[-0.025em] flex flex-wrap">
      <SplitTextReveal>
        {text[0].children[0].text}
      </SplitTextReveal>
      {/* <BodyRich content={text} /> */}
    </h2>
  )
}