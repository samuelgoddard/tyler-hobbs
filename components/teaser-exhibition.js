import Link from "next/link";
import SanityImage from "./sanity-image";
import { m } from "framer-motion"
import SanityImageResponsive from "./sanity-image-responsive";
import { TextReveal } from "./text-reveal";

export default function TeaserExhibition({ href, heading, location, year, image, priority, delay }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0, transition: { delay: delay ? delay : 0.1, type: "spring", stiffness: 250, damping: 75, mass: 1 }}}
    >
      <Link href={href} className="block w-full a11y-focus group">
        <div className="mb-2 lg:mb-4 relative overflow-hidden">
          <SanityImageResponsive
            image={image}
            priority={priority ? true : false}
          />
        </div>
        <div className="flex flex-wrap text-base/tight text-gray transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[500ms] group-hover:translate-x-2 group-hover:text-black dark:group-hover:white">
          <span className="block w-full mb-[2px] lg:mb-1">
            <TextReveal delay={delay ? delay : 0}>{heading}</TextReveal>
          </span>
          <span className="block w-full mb-[2px] lg:mb-1">
            <TextReveal delay={delay ? delay : 0}>{location}</TextReveal>
          </span>
          <span className="block w-full mb-[2px] lg:mb-1">
            <TextReveal delay={delay ? delay : 0}>{year}</TextReveal>
          </span>
        </div>
      </Link>
    </m.div>
  )
}