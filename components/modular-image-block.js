import SanityImageResponsive from "@/components/sanity-image-responsive";

export default function ModularImageBlock({ image }) {
  return (
    <SanityImageResponsive
      image={image}
      sizes={`(max-width: 1024px) 100vw,80vw`}
      className={`w-full`}
    />
  )
}