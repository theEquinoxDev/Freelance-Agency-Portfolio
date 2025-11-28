import { motion } from "framer-motion"
import PortfolioCard from "../components/PortfolioCard"
import project1 from "../assets/Project1.webp"
import project2 from "../assets/Project2.webp"
import project3 from "../assets/Project3.webp"

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 bg-white px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/25 rounded-full text-primary font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Selected Projects
          </motion.p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-bg mb-4 leading-tight">
            Our{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Best Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing excellence through innovative design and cutting-edge development.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-10">
          <PortfolioCard
            image={project1}
            title="Corporate Website Transformation"
            category="Web Development"
            index={0}
          />
          <PortfolioCard
            image={project2}
            title="E-Commerce UX Overhaul"
            category="UI/UX Design"
            index={1}
          />
          <PortfolioCard
            image={project3}
            title="Fintech Mobile App Strategy"
            category="Product Design"
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
