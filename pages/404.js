import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useMotionValueEvent, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { errorQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import { useMousePosition } from '@/helpers/mousePosition'
import { useRef, useState } from 'react'
const pageService = new SanityPageService(errorQuery)

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  };
}

export default function Error(initialData) {
  const { data: { contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  // const x = useTransform(mousePosition.x,[0, 1],[20, 0],{ clamp: true })
  // const y = mousePosition.y;


  const styles = { 
    
  };

  return (
    <Layout>
      <NextSeo title="404 Error: Page Not Found" />

      <Header contact={contact} worksCats={firstWorksCatSlug} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade} className="w-full h-[100dvh] px-4 lg:px-8 flex flex-col items-center justify-center relative" ref={boxRef} onMouseMove={e => handleMouseMove(e)}>
            <div className="w-[30dvh] lg:w-[40dvh] overflow-visible max-w-[140px] lg:max-w-[170px]">
              <svg className="w-full overflow-visible" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <m.path
                    style={{ y: -mousePosition.centerY * 4, x: -mousePosition.centerX * 4 }}
                    className="transition-all ease-out duration-300"
                    d="M16.9943 0L34 9.99709V30.0029L16.9943 19.9942V0Z"
                    fill="currentColor"
                  />
                  <m.path
                    style={{ y: mousePosition.centerY * 4, x: mousePosition.centerX * 4 }}
                    className="transition-all ease-out duration-300"
                    d="M0 9.9971L16.9943 19.9942V40L0 30.0029V9.9971Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <h1 className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 mb-0 pb-0">404 Error — <br/>Page Not Found</h1>
            <Link href="/" className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 mb-0 pb-0 underline z-[100000]">
              Home</Link>
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