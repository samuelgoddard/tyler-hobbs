import localFont from 'next/font/local'

export const PolySans = localFont({
  src: [
    {
      path: '../public/fonts/PolySansTrial-Neutral.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PolySansTrial-NeutralItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  subsets: ['latin'],
  variable: '--font-PolySans',
})