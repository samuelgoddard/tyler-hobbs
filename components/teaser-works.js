import Link from "next/link";
import SanityImage from "./sanity-image";

export default function TeaserWorks({ href, heading, series, image }) {
  return (
    <Link href={href} className="block w-full a11y-focus group">
      <div className="bg-gray/30 aspect-[8/10] mb-3 lg:mb-5 relative overflow-hidden">
        {image && (
          <SanityImage
            image={image}
            className="absolute inset-0 w-full h-full object-center"
          />
        )}
      </div>
      <div className="flex flex-wrap text-base/tight text-gray">
        <span className="block w-full lg:flex-1 transition-all ease-in-out duration-300 lg:group-hover:text-black dark:lg:group-hover:text-white lg:group-hover:translate-x-1">{heading}</span>
        
        {series && (
          <span className="block w-full lg:w-auto transition-all ease-in-out duration-300 lg:group-hover:text-black dark:lg:group-hover:text-white lg:group-hover:-translate-x-1">[Series]</span>
        )}
      </div>
    </Link>
  )
}