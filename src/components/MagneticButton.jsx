import { useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MagneticButton({ children, variant = "primary", onClick }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const base = "relative px-8 py-4 rounded-full font-semibold transition-all duration-300 tracking-wide uppercase text-sm"
  const styles = {
    primary: "bg-white text-black border-2 border-white/40 hover:bg-gray-100",
    outline: "border-2 border-white/40 text-white bg-transparent hover:bg-white/10"
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${base} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
