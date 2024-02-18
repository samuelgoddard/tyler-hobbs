import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import Link from 'next/link'
const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {  
  const { data: { home, contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  
  let randomisedArray = []
  
  for(let i = 0; i < home.randomisedImagesBucket.length; i++) {
    randomisedArray.push(i);
  }

  function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  
  shuffle(randomisedArray)


  return (
    <Layout>
      <NextSeo title={home.title} />

      <Header contact={contact} worksCats={firstWorksCatSlug} />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade} className="w-full h-screen pb-4 lg:pb-8">
            <div className="grid grid-cols-10 md:grid-cols-9 lg:grid-cols-8 xl:grid-cols-10 md:grid-rows-4 w-full h-full px-4 lg:px-8 gap-4 md:gap-6 lg:gap-8 pt-28 lg:pt-40">
              <m.div
                className="col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[0]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>

              <m.div
                className="col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                <SanityImage
                  priority={true}
                  image={home.randomisedImagesBucket[randomisedArray[1]]}
                  className="w-full h-full object-cover object-center"
                  sizes={`(max-width: 1024px) 80vw,25vw`}
                />
                </Link>
              </m.div>

              <div className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[2]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>

              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[3]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <m.div
                className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent lg:bg-gray lg:bg-opacity-50 xl:bg-transparent relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/about" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[4]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <div className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>

              <m.div
                className="col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[5]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <m.div
                className="col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden lg:bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[6]]}
                    className="w-full h-full object-cover object-center lg:hidden"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <m.div
                className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[7]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <div className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[8]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <m.div
                className="md:hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[9]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              
              <div className="hidden md:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden lg:bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/about" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedHeadshotsBucket[Math.floor(Math.random() * (home.randomisedHeadshotsBucket.length - 0) + 0)]}
                    className="w-full h-full object-cover object-center lg:hidden"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>

              <div className="hidden lg:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="hidden lg:block col-span-5 md:col-span-3 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.65, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[10]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>

              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative  overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/about" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedHeadshotsBucket[Math.floor(Math.random() * (home.randomisedHeadshotsBucket.length - 0) + 0)]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>

              <m.div
                className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.35, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[11]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent relative overflow-hidden">
              </div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              <div className="hidden lg:block col-span-5 lg:col-span-1 row-span-1 bg-transparent"></div>
              
              <m.div
                className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.75, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[12]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              
              </m.div>
              
              <m.div
                className="hidden xl:block col-span-5 lg:col-span-1 row-span-1 bg-gray/30 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.35, ease: [0.71,0,0.17,1]} }}
                exit={{ opacity: 0, }}
              >
                <Link href="/works/categories/digital" className="block">
                  <SanityImage
                    priority={true}
                    image={home.randomisedImagesBucket[randomisedArray[13]]}
                    className="w-full h-full object-cover object-center"
                    sizes={`(max-width: 1024px) 80vw,25vw`}
                  />
                </Link>
              </m.div>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}