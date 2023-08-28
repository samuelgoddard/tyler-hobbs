import Link from "next/link";

export default function MenuTray({}) {
  return (
    <>
      <button className="fixed inset-0 bg-black z-[100]"></button>
      <div className="fixed top-0 right-0 bottom-0 w-[33vw] h-full bg-white bg-opacity-50 border-l border-black backdrop-blur-[6px] z-[1000]">
      </div>
    </>
  )
}