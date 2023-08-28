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

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}