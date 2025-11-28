import { motion } from "framer-motion"

export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-8 bg-linear-to-br from-white to-[#f7f4ee] rounded-2xl border border-gray-100/80 shadow-card hover:shadow-[0_30px_70px_rgba(15,43,70,0.12)] cursor-pointer group overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mb-6 p-4 bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-linear-to-br group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300"
        >
          <img src={icon} alt={title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-dark-bg group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileHover={{ x: 5, opacity: 1 }}
          className="mt-6 text-primary font-bold text-sm flex items-center gap-2"
        >
          Learn more
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
