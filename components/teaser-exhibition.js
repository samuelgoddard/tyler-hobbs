import Link from "next/link";
import SanityImage from "./sanity-image";

export default function TeaserExhibition({ href, heading, location, year, image, priority }) {
  return (
    <Link href={href} className="block w-full a11y-focus group">
      <div className="aspect-[14/10] mb-2 lg:mb-4 relative overflow-hidden">
        <SanityImage
          image={image}
          priority={priority ? true : false}
        />
      </div>
      <div className="flex flex-wrap text-base/tight text-gray transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] group-hover:translate-x-2 group-hover:text-black dark:group-hover:white">
        <span className="block w-full mb-1">{heading}</span>
        <span className="block w-full mb-1">{location}</span>
        <span className="block w-full mb-1">{year}</span>
      </div>
    </Link>
  )
}