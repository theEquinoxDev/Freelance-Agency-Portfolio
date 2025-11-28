import { motion } from "framer-motion"

export default function Button({ children, variant = "primary", onClick }) {
  const base = "relative px-8 py-4 rounded-full font-semibold transition-all duration-300 tracking-wide uppercase text-sm overflow-hidden group"
  const styles = {
    primary: "bg-linear-to-r from-primary to-[#1c415f] text-white shadow-dope hover:shadow-[0_25px_45px_rgba(15,43,70,0.35)]",
    outline: "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-primary-900 hover:border-accent hover:shadow-[0_15px_30px_rgba(201,139,73,0.25)]"
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className={`${base} ${styles[variant]} z-10`}
      onClick={onClick}
    >
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-primary-600 via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === "primary" && (
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        )}
      </span>
    </motion.button>
  )
}
