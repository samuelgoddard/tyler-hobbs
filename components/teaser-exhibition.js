import Link from "next/link";

export default function TeaserExhibition({ href, heading, location, year }) {
  return (
    <Link href={href} className="block w-full a11y-focus group">
      <div className="bg-gray/30 aspect-[14/10] mb-2 lg:mb-4"></div>
      <div className="flex flex-wrap text-base/tight text-gray transition-all ease-in-out duration-300 group-hover:translate-x-2 group-hover:text-black dark:group-hover:white">
        <span className="block w-full mb-1">{heading}</span>
        <span className="block w-full mb-1">{location}</span>
        <span className="block w-full mb-1">{year}</span>
      </div>
    </Link>
  )
}