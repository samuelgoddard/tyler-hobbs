import BlockContentWrapper from '@/components/block-content-wrapper'
import ModularTextBlock from '@/components/modular-text-block'
import ModularBlockquoteBlock from './modular-blockquote-block'
import ModularEmbedBlock from './modular-embed-block'
import ModularHeadingBlock from './modular-heading-block'
import ModularImageBlock from './modular-image-block'
import ModularImageGridBlock from './modular-image-grid-block'
import ModularCodeBlock from './modularCodeBlock'
import ModularJumpNavSectionBlock from './modular-jump-nav-section-block'
import ModularListBlock from './modularListBlock'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

let bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div className="mb-12 lg:mb-20">
        {children}
      </div>
  },
  textBlock: {
    component: ModularTextBlock,
    wrapper: ({ children }) => 
    <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-4 lg:gap-8 mb-12 lg:mb-20 items-end">
      {children}
    </div>
  },
  jumpNavSectionBlock: {
    component: ModularJumpNavSectionBlock,
    wrapper: ({ children }) => 
    <>
      {children}
    </>
  },
  headingBlock: {
    component: ModularHeadingBlock,
    wrapper: ({ children }) => 
    <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
      <div className="col-span-12 lg:col-span-10 lg:col-start-3">
        {children}
      </div>
    </div>
  },
  blockquoteBlock: {
    component: ModularBlockquoteBlock,
    wrapper: ({ children }) => 
    <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
      <div className="col-span-12 lg:col-span-10 lg:col-start-3">
        {children}
      </div>
    </div>
  },
  imageBlock: {
    component: ModularImageBlock,
    wrapper: ({ children }) => 
    <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
      <div className="col-span-12 lg:col-span-12">
        {children}
      </div>
    </div>
  },
  imageGridBlock: {
    component: ModularImageGridBlock,
    wrapper: ({ children }) => 
      <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
        {children}
      </div>
  },
  embedBlock: {
    component: ModularEmbedBlock,
    wrapper: ({ children }) => 
    <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
        {children}
    </div>
  },
  codeBlock: {
    component: ModularCodeBlock,
    wrapper: ({ children }) => 
    <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
      <div className="col-span-12 lg:col-span-10 lg:col-start-3">
        {children}
      </div>
    </div>
  },
  listBlock: {
    component: ModularListBlock,
    wrapper: ({ children }) => 
      <div className="grid grid-cols-12 w-full px-4 lg:px-8 gap-x-4 lg:gap-x-8 mb-12 lg:mb-20">
        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          {children}
        </div>
      </div>
  },
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body, caseStudy, careerPosts, successStories }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? <Wrapper key={item._key}><Component {...item} {...args} successStories={successStories} /></Wrapper> : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;