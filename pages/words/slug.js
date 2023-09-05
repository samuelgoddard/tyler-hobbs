import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useState } from 'react'

export default function WordsSlug() {
  const [imageActive, setImageActive] = useState(false)
  
  const imageToggle = () => {
    imageActive ? setImageActive(false) : setImageActive(true)
  }

  return (
    <Layout>
      <NextSeo title="Words Slug" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="p-4 lg:p-8 lg:absolute top-0 left-0 right-0 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 pt-12 lg:pt-0">
              <div className="col-span-2 lg:col-start-3 block">
                <span className="block relative overflow-hidden">
                  <m.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    exit={{ y: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]}}}
                    className="block leading-none"
                  >Words</m.span>
                </span>
              </div>
            </div>
          </div>

          <m.article variants={fade} className="w-full pb-4 lg:pb-8">
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 pt-28 lg:pt-80 mb-4 lg:mb-8">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <h1 className="text-5xl lg:text-7xl w-[90%] lg:w-[60%] max-w-3xl mb-0">The Rise of Long-Form Generative Art</h1>
              </div>
            </div>
            
            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-2 order-2 lg:order-1">
                <div className="mb-3 lg:mb-5">
                  <span className="block text-base/none mb-1">By</span>
                  <span className="block">Tyler Hobbs</span>
                </div>
                <div className="mb-3 lg:mb-5">
                  <span className="block text-base/none mb-1">Published</span>
                  <span className="block">22.03.22</span>
                </div>
                <div className="">
                  <span className="block text-base/none mb-1">Last Updated</span>
                  <span className="block">07.10.23</span>
                </div>
              </div>
              
              <div className="col-span-12 lg:col-span-10 lg:col-start-3 order-1 lg:order-2">
                <div className="aspect-video bg-gray/30"></div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
                  <div className="col-span-12 lg:col-span-4 xl:col-span-3 content order-2 lg:order-1">
                    <span className="w-7 h-7 bg-gray/30 flex items-center justify-center text-xs/none lg:text-sm/none rounded-full mb-3">1</span>
                    <p className="text-sm/normal lg:text-base/normal">The most notable exceptions are probably &ldquo;live&rdquo; programs that could be infinitely refreshed. These share some of the same concerns. With that said, in these new models, the fact that the artist is targeting a specific output set size, combined with the fact that every output will be put up for collection (with no skipping) makes the intent feel significantly different to me.</p>
                  </div>

                  <div className="col-span-12 lg:col-span-7 lg:col-start-6 content order-1 lg:order-2">
                    <p>There&rsquo;s a new art form on the rise. Generative art has existed since the 1960s, but the new on-chain generative art platforms are pushing the medium in an exciting new direction. While many of the generative techniques are the same, the goals for the program output are wildly different from before. The direct path from the script to the viewer, as well as the large number of iterations, encourages artists to create a special class of artistic algorithm, what I&rsquo;ll refer to here as long-form generativism. In this essay, I&rsquo;ll discuss what makes these algorithms different, and how we can analyze their quality.</p>

                    <h2>Generative Art in the Past</h2>

                    <p>Historically, generative art had some typical qualities that were taken for granted.</p>

                    <p>First, there was almost always a &ldquo;curation&rdquo; step. The artist could generate as many outputs as they pleased and then filter those down to a small set of favorites. Only this curated set of output would be presented to the public.</p>

                    <p>Second, the size of that final curated set was generally small. In fact, it was extremely common to choose just a single best output to show. At most, perhaps a dozen iterations would be shown.
                    There have been exceptions [1], but this was the way things were usually done. For an example from my own work, here are three iterations from Lines 1, a program from 2017. I initially generated about 200 images from the program, and then curated that down to a final set of just 10 images that I felt captured most of the interesting characteristics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-16 lg:mb-24">
              <div className="col-span-12 lg:col-span-10 lg:col-start-3">
                <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
                  <div className="col-span-12 lg:col-span-7 lg:col-start-6 content">
                    <h2>The New World</h2>

                    <p>Today, platforms like <a href="https://example.com" target="_blank" rel="noopener noreferrer">Art Blocks</a> (and in the future, I&rsquo;m sure many others) allow for something different. The artist creates a generative script (e.g. <a href="https://example.com" target="_blank" rel="noopener noreferrer">Fidenza</a>) that is written to the Ethereum blockchain, making it permanent, immutable, and verifiable. Next, the artist specifies how many iterations will be available to be minted by the script. A typical choice is in the 500 to 1000 range. When a collector mints an iteration (i.e. they make a purchase), the script is run to generate a new output, and that output is wrapped in an NFT and transferred directly to the collector. Nobody, including the collector, the platform, or the artist, knows precisely what will be generated when the script is run, so the full range of outputs is a surprise to everyone.</p>
                    
                    <p>Note the two key differences from earlier forms of generative art. First, the script output goes directly into the hands of the collector, with no opportunity for intervention or curation by the artist. Second, the generative algorithms are expected to create roughly 100x more iterations than before. Both of these have massive implications for the artist. They should also have massive implications for how collectors and critics evaluate the quality of a generative art algorithm.</p>

                    <h2>Analyzing Quality</h2>

                    <p>As with any art form, there are a million unpredictable ways to make something good. Without speaking in absolutes, I&rsquo;ll try to describe what I think are useful characteristics for evaluating whether a long-form generative art program is successful or not, and how this differs from previous (short) forms of generative art.</p>
                    
                    <p>Fundamentally, with long-form, collectors and viewers become much more familiar with the &ldquo;output space&rdquo; of the program. In other words, they have a clear idea of exactly what the program is capable of generating, and how likely it is to generate one output versus another. This was not the case with short-form works, where the output space was either very narrow (sometimes singular) or cherry-picked for the best highlights. By withholding most of the program output, the artist could present a particular, limited view of the algorithm. With long-form works, the artist has nowhere to hide, and collectors will get to know the scope of the algorithm almost as well as the artist.</p>
                    
                    <p>What are the implications of this? It makes the &ldquo;average&rdquo; output from the program crucial. In fact, even the worst outputs are arguably important, because they&rsquo;re just as visible. Before, this bad output could be ignored and discarded. The artist only cared about the top 5% of output, because that&rsquo;s what would make it into the final curated set to be presented to the public. The artist might have been happy to design an algorithm that produced 95% garbage and 5% gems.</p>
                  </div>
                </div>
              </div>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
