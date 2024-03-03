import slugify from "slugify";
import handleViewport from 'react-in-viewport';
import { JumpNavContext } from "@/context/jumpNav";
import { useContext } from "react";

const Block = ({ inViewport, forwardedRef } ) => {
  return (<div className="viewport-block" ref={forwardedRef}></div>);
};

const ViewportBlock = handleViewport(Block);

export default function ModularJumpNavSectionBlock({ title }) {
  const [jumpNavContext, setJumpNavContext] = useContext(JumpNavContext);

  return title && (
    <>
      <ViewportBlock onEnterViewport={() => setJumpNavContext(title)} />
      <div id={slugify(title)} className="scroll-mt-6"></div>
    </>
  )
}