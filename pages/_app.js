import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo';
import { PolySans } from '@/helpers/fonts';
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class">
      <div className={`${PolySans.variable} font-sans`}>
        <DefaultSeo {...SEO} /> 

        { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-2 py-2 text-white bg-[#DA442F] justify-center flex z-[1000000] uppercase text-xs m-3 font-mono tracking-wide'}>Preview Mode - <a className={'px-1 underline underline-offset-2'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}