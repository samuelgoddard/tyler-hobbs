import Link from "next/link"
import BodyRich from "./body-rich"

export default function ModularListBlock({ heading, listItems }) {
  return listItems && (
    <>
      {heading && (
        <h2 className="block text-3xl/none lg:text-4xl/none mb-4 pb-0 tracking-[-0.015em] lg:tracking-[-0.015em]">{heading}</h2>
      )}

      <ul className="border-t border-gray">
        {listItems.map((e, i) => {
          let route = '/'
          e?.internalLink?._type == 'work' && (route = '/works')
          e?.internalLink?._type == 'words' && (route = '/words')
          e?.internalLink?._type == 'exhibitions' && (route = '/exhibitions')
          e?.internalLink?._type == 'pages' && (route = '/pages')
          e?.internalLink?._type == 'workIndex' && (route = '/works')

          return e.internal ? (
            <li className="block" key={i}>
              <Link href={`${route}${e.internalLink?.slug ? `/${e.internalLink?.slug?.current}` : `` }`} className="flex items-start py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] lg:hover:pl-1 relative group">
                {e.year && (
                  <span className="block pr-3 tabular-nums w-[60px] lg:w-[80px]">{e.year}</span>
                )}
                
                {!e.textRich && (
                  <span className="flex-1 leading-[1.075] lg:pr-12 lg:max-w-[800px]">{e.text}</span>
                )}
                
                {e.textRich && (
                  <span className="flex-1 leading-[1.075] lg:pr-12 lg:max-w-[800px]">
                    <BodyRich content={e.textRich} />
                  </span>
                )}

                <span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] opacity-0 lg:group-hover:opacity-100"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span>
              </Link>
            </li>
          ) : (
            <li className="block" key={i}>
              <a href={e.externalLink} target="_blank" rel="noopener noreferrer" className="flex items-start py-3 lg:py-4 border-b border-gray text-lg/none lg:text-2xl/none transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] lg:hover:pl-1 relative group">
                {e.year && (
                  <span className="block pr-3 tabular-nums w-[60px] lg:w-[80px]">{e.year}</span>
                )}
                
                {!e.textRich && (
                  <span className="flex-1 leading-[1.075] lg:pr-12 lg:max-w-[800px]">{e.text}</span>
                )}

                {e.textRich && (
                  <span className="flex-1 leading-[1.075] lg:pr-12 lg:max-w-[800px]">
                    <BodyRich content={e.textRich} />
                  </span>
                )}

                <span className="absolute top-2 lg:top-[13px] right-0 w-7 transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[350ms] opacity-0 lg:group-hover:opacity-100 -rotate-45"><svg className="w-full" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.152 13.32V11.784H17.096C17.552 11.784 17.744 11.832 18.152 11.928C18.344 11.976 18.44 11.904 18.44 11.784C18.44 11.688 18.32 11.64 18.176 11.592C17.936 11.52 17.672 11.472 17.36 11.232L13.328 7.944V6.024L20.048 11.784V13.32L13.328 19.08V17.16L17.36 13.872C17.672 13.632 17.936 13.584 18.176 13.512C18.32 13.464 18.44 13.416 18.44 13.32C18.44 13.2 18.344 13.128 18.152 13.176C17.744 13.272 17.552 13.32 17.096 13.32H3.152Z" fill="currentColor"/></svg></span>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}