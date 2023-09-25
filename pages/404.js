import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

import { errorQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
const pageService = new SanityPageService(errorQuery)

export default function Error(initialData) {
  const { data: { contact, firstWorksCatSlug }  } = pageService.getPreviewHook(initialData)()
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
          <m.article variants={fade} className="w-full h-screen pb-4 lg:pb-8 px-4 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full">
              <h1 className="text-center">404 Error</h1>
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