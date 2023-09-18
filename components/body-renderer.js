import BlockContentWrapper from '@/components/block-content-wrapper'
import ModularTextBlock from '@/components/modular-text-block'
import ModularBlockquoteBlock from './modular-blockquote-block'
import ModularEmbedBlock from './modular-embed-block'
import ModularImageBlock from './modular-image-block'
import ModularImageGridBlock from './modular-image-grid-block'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

let bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div className="mb-16 lg:mb-24">
        {children}
      </div>
  },
  textBlock: {
    component: ModularTextBlock,
    wrapper: ({ children }) => 
      <div className="mb-16 lg:mb-24">
        {children}
      </div>
  },
  blockquoteBlock: {
    component: ModularBlockquoteBlock,
    wrapper: ({ children }) => 
      <div className="mb-16 lg:mb-24">
        {children}
      </div>
  },
  imageBlock: {
    component: ModularImageBlock,
    wrapper: ({ children }) => 
      <div className="mb-16 lg:mb-24">
        {children}
      </div>
  },
  imageGridBlock: {
    component: ModularImageGridBlock,
    wrapper: ({ children }) => 
      <div className="mb-16 lg:mb-24">
        {children}
      </div>
  },
  embedBlock: {
    component: ModularEmbedBlock,
    wrapper: ({ children }) => 
      <div className="mb-16 lg:mb-24">
        {children}
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