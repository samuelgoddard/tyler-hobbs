import useDetectScroll from "@smakss/react-scroll-direction";
import { AnimatePresence, domAnimation, LazyMotion, m, useMotionValueEvent, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header({ contact, worksCats }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuInstaOpen, setMenuInstaOpen] = useState(false)
  const [menuShown, setMenuShown] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const router = useRouter()
  const { scrollY } = useScroll()
  const scrollDir = useDetectScroll();
  
  const menuToggle = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    menuInstaOpen ? setMenuInstaOpen(false) : setMenuInstaOpen(true)
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    (latest > 1 &&  scrollDir == 'up') ? (setMenuShown(true)) : (setMenuShown(false))
  })

  return (
    <>
      <LazyMotion features={domAnimation}>
        <header className="">
          <div className="absolute top-4 lg:top-8 left-0 leading-none w-full flex flex-wrap px-4 lg:px-8">
            <div className="block">
              <Link href="/" aria-label="Navigate to the home page" className="a11y-focus w-[98px] lg:w-[120px] block translate-y-[2px] lg:translate-y-0 z-[999] relative">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 678 129">
                  <path fill="currentColor" d="M77.043 2.263v12.448H45.886v87.134h-14.73V14.711H0V2.263h77.043Z"/>
                  <path fill="currentColor" d="m77.091 29.421 19.544 53.463a20.877 20.877 0 0 1 1.134 7.638c0 .848 0 1.84 1.132 1.84 1.133 0 1.134-.992 1.134-1.84.02-2.597.45-5.175 1.275-7.638l18.832-53.463h14.731l-31.44 81.051C98.334 123.767 91.255 129 78.225 129h-9.34v-11.881h6.509c10.764 0 12.61-2.404 14.729-7.639l1.982-4.809-29.743-75.25h14.73ZM153.109 0v101.845h-13.597V0h13.597ZM229.484 69.593H175.38c.991 11.598 8.921 20.934 22.093 20.934 9.771 0 14.586-4.81 17.136-13.155h14.019c-2.973 13.438-12.882 25.597-31.439 25.597-22.802 0-35.264-16.833-35.264-37.343 0-21.783 14.162-37.341 34.985-37.341 16.145 0 32.998 10.608 32.998 36.351a25.91 25.91 0 0 1-.424 4.957Zm-13.171-11.315c-.85-10.61-7.648-18.106-18.695-18.106-13.597 0-19.544 8.345-21.527 18.106h40.222ZM252.588 44.98c4.531-11.597 8.639-16.69 26.909-16.69v13.862c-21.103-1.414-27.193 6.082-27.193 25.036v34.657h-13.595V29.421h13.595v4.81a29.062 29.062 0 0 1-1.558 9.48c-.282 1.13-.706 2.263.426 2.546.708.138 1.132-.57 1.416-1.276ZM372.237 2.263v99.582h-14.728V58.278h-49.852v43.567h-14.729V2.263h14.729V45.83h49.852V2.263h14.728ZM452.287 65.632c0 20.51-13.172 37.342-35.12 37.342-21.949 0-35.121-16.833-35.121-37.343 0-20.51 13.172-37.34 35.121-37.34 21.948 0 35.12 16.83 35.12 37.34Zm-13.597 0c0-13.72-7.931-24.894-21.526-24.894-13.595 0-21.527 11.174-21.527 24.894 0 13.719 7.93 24.895 21.527 24.895 13.596 0 21.526-11.175 21.526-24.895ZM474.684 35.077a22.665 22.665 0 0 1-1.416 7.78c-.424 1.131-1.273 2.545 0 2.969 1.134.425 1.558-.99 1.701-1.414 4.248-9.335 12.746-16.124 24.358-16.124 18.837 0 32.001 15.845 32.001 37.34 0 21.496-13.169 37.343-32.001 37.343-11.328 0-19.967-6.648-24.358-16.409-.143-.423-.567-1.554-1.416-1.271-1.417.424-.709 1.697-.285 2.829.9 2.448 1.378 5.03 1.416 7.637v6.088h-13.595V0h13.595v35.077Zm43.056 30.552c0-13.438-7.083-24.894-21.245-24.894-12.882 0-21.811 11.456-21.811 24.894 0 13.437 8.924 24.895 21.811 24.895 14.162.003 21.245-11.454 21.245-24.892v-.003ZM553.733 35.077a22.666 22.666 0 0 1-1.417 7.78c-.424 1.131-1.274 2.545 0 2.969 1.133.425 1.557-.99 1.699-1.414 4.249-9.335 12.747-16.124 24.36-16.124 18.836 0 32.001 15.845 32.001 37.34 0 21.496-13.171 37.343-32.001 37.343-11.33 0-19.969-6.648-24.36-16.409-.135-.423-.566-1.554-1.415-1.271-1.417.424-.708 1.697-.284 2.829.9 2.448 1.379 5.03 1.417 7.637v6.088h-13.596V0h13.596v35.077Zm43.053 30.552c0-13.438-7.082-24.894-21.243-24.894-12.882 0-21.81 11.456-21.81 24.894 0 13.437 8.921 24.895 21.81 24.895 14.161.003 21.243-11.454 21.243-24.892v-.003ZM627.866 76.665c.135 5.516 4.673 14.428 18.833 14.428 13.88 0 17.704-5.516 17.704-10.185 0-6.5-6.091-8.487-22.659-10.184-18.984-1.98-24.927-10.609-24.927-20.086 0-10.892 9.915-22.346 29.741-22.346 18.27 0 28.185 10.466 29.176 24.046h-13.313c-.422-4.666-3.541-12.166-16.287-12.166-11.472 0-15.72 4.667-15.72 9.48 0 4.668 2.691 7.78 18.41 9.48C668.372 61.246 678 66.903 678 78.787c0 14.71-12.039 24.187-31.866 24.187-19.687 0-30.875-10.325-31.583-26.309h13.315Z"/>
                </svg>
              </Link>
            </div>

            <div className="text-right ml-auto">
              <div className="relative overflow-hidden pl-1">
                <button aria-label={menuOpen ? 'Close Menu' : 'Open Menu'} onClick={menuToggle} className={`a11y-focus  leading-none lg:leading-none block transition-transform ease-in-out duration-300 lg:hover:-translate-x-1`}>
                  <div className={`transition-translate ease-in-out duration-[450ms] ${menuOpen ? 'translate-y-full' : 'translate-y-0 delay-[450ms]' }`}>
                    Menu
                  </div>
                </button>
              </div>
            </div>

            <div className={`fixed top-4 lg:top-8 right-4 lg:right-8 text-right z-[1000] transition-opacity ease-in-out duration-[350ms] hidden lg:block ${menuShown ? 'opacity-100' : 'opacity-0' }`}>
              <div className="relative overflow-hidden pl-1">
                <button aria-label={menuOpen ? 'Close Menu' : 'Open Menu'} onClick={menuToggle} className={`a11y-focus  leading-none lg:leading-none block transition-transform ease-in-out duration-300 lg:hover:-translate-x-1`}>
                  <div className={`transition-translate ease-in-out duration-[450ms] ${menuOpen ? 'translate-y-full' : 'translate-y-0 delay-[450ms]' }`}>
                    Menu
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {menuOpen && (
          <button
            aria-label="Close Menu"
            onClick={menuToggle}
            className={`focus-visible:border-none focus-visible:outline-none fixed inset-0 z-[101] ${!menuOpen && 'pointer-events-none'}`}
          ></button>
        )}
        
        <button aria-label="Close Menu" onClick={menuToggle} className={`fixed top-4 lg:top-[30px] right-4 lg:right-8 a11y-focus block transition-transform ease-in-out duration-300 lg:hover:-translate-x-1 z-[100000] leading-none lg:leading-none ${!menuOpen ? 'pointer-events-none' : ''}`}>
          <span className="relative overflow-hidden block">
            <span className={`block transition-translate ease-in-out duration-[450ms] ${!menuOpen ? 'translate-y-full' : 'translate-y-0 delay-[450ms]'}`}>
              Close
            </span>
          </span>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <>
              <m.div
                initial={{ x: '100%'}}
                animate={{ x: 0, transition: { duration: 0.45, delay: 0.25, ease: [0.71,0,0.17,1]}}}
                exit={{ x: '100%', transition: { duration: 0.45, ease: [0.71,0,0.17,1]} }}

                className="fixed top-0 right-0 bottom-0 w-full lg:w-[33vw] lg:max-w-2xl h-full bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 lg:border-l lg:border-black dark:lg:border-white backdrop-blur-[6px] z-[1000] p-4 lg:p-8 flex flex-col"
              >                
                <nav className="pt-20 text-[12vw]/[0.7] lg:text-[4.3vw]/[0.7] w-full tracking-[-0.025em] lg:tracking-[-0.025em]">
                  <ul>
                    <li className="block mb-4 lg:mb-3 xl:mb-4">
                      <Link
                        onClick={menuToggle}
                        className={`inline-block a11y-focus transition-translate ease-in-out duration-300 lg:hover:translate-x-2 pb-1 lg:pb-1 ${router.asPath.includes('/works') ? 'border-b-2' : '' }`}
                        href={`/works/categories/${worksCats.slug.current}`}
                      >
                        Works
                      </Link>
                    </li>
                    <li className="block mb-4 lg:mb-3 xl:mb-4">
                      <Link
                        onClick={menuToggle}
                        className={`inline-block a11y-focus transition-translate ease-in-out duration-300 lg:hover:translate-x-2 pb-1 lg:pb-1 ${router.asPath.includes('/words') ? 'border-b-2' : '' }`}
                        href="/words"
                      >
                        Words
                      </Link>
                    </li>
                    <li className="block mb-4 lg:mb-3 xl:mb-4">
                      <Link
                        onClick={menuToggle}
                        className={`inline-block a11y-focus transition-translate ease-in-out duration-300 lg:hover:translate-x-2 pb-1 lg:pb-1 ${router.asPath.includes('/exhibitions') ? 'border-b-2' : '' }`}
                        href="/exhibitions"
                      >Exhibitions</Link>
                    </li>
                    <li className="block mb-4 lg:mb-3 xl:mb-4">
                      <Link
                        onClick={menuToggle}
                        className={`inline-block a11y-focus transition-translate ease-in-out duration-300 lg:hover:translate-x-2 pb-1 lg:pb-1 ${router.asPath.includes('/about') ? 'border-b-2' : '' }`}
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="mt-auto">
                  <form className="text-base/tight mb-[9vh] relative block w-9/12">
                    <span className="block mb-3">Newsletter:</span>
                    <input className="appearance-none text-2xl/tight placeholder:text-gray border-b border-gray w-full focus-visible:border-b focus-visible:outline-none focus-visible:border-black dark:focus-visible:border-white bg-transparent dark:bg-transparent pr-12" type="email" required placeholder="Email address"></input>

                    <button type="submit" className="block absolute bottom-0 right-0 text-lg w-7 mb-[2px] text-gray a11y-focus lg:hover:text-black focus-visible:text-black dark:lg:hover:text-white dark:focus-visible:text-white">
                      <svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg>
                    </button>
                  </form>

                  <div className="flex flex-wrap items-end">
                    <div className="w-1/2">
                      {contact?.socials && (
                        <nav className="text-base/tight">
                          <ul>
                            {contact.socials.map((e,i) => { 
                              return (
                                <li className="block mb-1" key={i}>
                                  <a
                                    className="a11y-focus lg:hover:text-gray transition-colors ease-in-out duration-300"
                                    href={e.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {e.platform}
                                  </a>
                                </li>    
                              )
                            })}
                          </ul>
                        </nav>
                      )}
                    </div>

                    <div className="w-1/2">
                      <button className="ml-auto w-10 block group" onClick={()=> setTheme( resolvedTheme === 'dark' ? 'light' : 'dark' )}>
                        <svg className="w-full" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path className="transition-transform ease-in-out duration-300 group-hover:translate-x-[-50%] group-hover:translate-y-[25%]" d="M16.9943 0L34 9.99709V30.0029L16.9943 19.9942V0Z" fill="currentColor"/>
                            <path className="transition-transform ease-in-out duration-300 group-hover:translate-x-[50%] group-hover:translate-y-[-25%]" d="M0 9.9971L16.9943 19.9942V40L0 30.0029V9.9971Z" fill="currentColor"/>
                          </g>
                        </svg>

                      </button>
                    </div>
                  </div>
                </div>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}