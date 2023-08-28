import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade} className="w-full h-screen pb-4 lg:pb-8">
            <div className="grid grid-cols-10 grid-rows-4 w-full h-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-40">
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>

              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>

              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-transparent"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
              <div className="col-span-1 row-span-1 bg-gray bg-opacity-50"></div>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
