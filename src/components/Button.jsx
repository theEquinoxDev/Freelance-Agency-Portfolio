import { motion } from "framer-motion"

export default function Button({ children, variant = "primary", onClick }) {
  const base = "relative px-8 py-4 rounded-full font-semibold transition-all duration-300 tracking-wide uppercase text-sm"
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
