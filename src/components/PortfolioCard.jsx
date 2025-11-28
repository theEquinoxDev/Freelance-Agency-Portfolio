import { motion } from "framer-motion"

export default function PortfolioCard({ image, title, category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="relative cursor-pointer overflow-hidden rounded-2xl shadow-card bg-white group border border-gray-100 hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="text-white">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{category}</p>
            <h3 className="font-extrabold text-2xl mb-2">{title}</h3>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2 text-sm font-semibold"
            >
              View Project
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="p-6 group-hover:hidden transition-all duration-300">
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{category}</p>
        <h3 className="font-extrabold text-xl text-dark-bg group-hover:text-primary transition-colors duration-300">{title}</h3>
      </div>

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
    </motion.div>
  )
}
