export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.71,0,0.17,1]}
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.5, ease: [0.71,0,0.17,1]}
	}
}