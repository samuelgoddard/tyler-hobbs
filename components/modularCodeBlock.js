import Refractor from 'react-refractor'

import js from 'refractor/lang/javascript'
import java from 'refractor/lang/java'


Refractor.registerLanguage(js)
Refractor.registerLanguage(java)

export default function ModularCodeBlock({ code }) {
  return code && (
    <div className="grid grid-cols-12 items-end gap-8 lg:gap-0">
      <div className="col-span-12 lg:col-span-7 lg:col-start-6 content order-1 lg:order-2">
        <div className="text-base lg:text-lg">
          <Refractor language={code.language == 'java' || code.language == 'clojure' ? 'java' : 'js' } value={code.code} />
        </div>
      </div>
    </div>
  )
}