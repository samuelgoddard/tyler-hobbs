import Refractor from 'react-refractor'

import js from 'refractor/lang/javascript'
import java from 'refractor/lang/java'
import clojure from 'refractor/lang/clojure'
import csharp from 'refractor/lang/csharp'


Refractor.registerLanguage(js)
Refractor.registerLanguage(java)
Refractor.registerLanguage(clojure)
Refractor.registerLanguage(csharp)

export default function ModularCodeBlock({ code }) {
  let lang = 'java'
  if (code.language == 'clojure') {
    lang = 'clojure'
  }
  if (code.language == 'processing') {
    lang = 'java'
  }
  if (code.language == 'csharp') {
    lang = 'csharp'
  }

  return code && (
    <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 content order-1 lg:order-2">
        <div className="text-base lg:text-lg">
          <Refractor
            language={lang } value={code.code} />
        </div>
      </div>
    </div>
  )
}