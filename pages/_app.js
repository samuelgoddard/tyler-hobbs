import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo';
import { PolySans } from '@/helpers/fonts';
import useKeypress from 'react-use-keypress'
import { ThemeProvider } from 'next-themes'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [grid, setGrid] = useState(false);
  
  useKeypress('g', () => {
    setGrid(!grid)
  })

  return (
    <ThemeProvider attribute="class">
      <div className={`${PolySans.variable} font-sans`}>
        <DefaultSeo {...SEO} /> 

        { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-2 py-2 text-white bg-[#DA442F] justify-center flex z-[1000000] uppercase text-xs m-3 font-mono tracking-wide'}>Preview Mode - <a className={'px-1 underline underline-offset-2'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>

      { grid && (
          <div className="p-2 fixed inset-0 w-full h-full z-[50] pointer-events-none grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 px-4 lg:px-8">
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
            <div className="bg-gray bg-opacity-[15%] col-span-1"></div>
          </div>
        )}
    </ThemeProvider>
  )
}