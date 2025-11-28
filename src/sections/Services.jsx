import { motion } from "framer-motion"
import ServiceCard from "../components/ServiceCard"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-linear-to-b from-[#f8f6f2] via-white to-[#f2f0ec] px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-md h-112 bg-accent/10 rounded-full blur-3xl"></div>
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
            className="inline-block px-4 py-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Our Capabilities
          </motion.p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark-bg mb-4 leading-tight">
            What We{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions that transform your digital presence and drive measurable results.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-10">
          <ServiceCard
            icon={icon1}
            title="Intuitive UI/UX Design"
            description="Crafting visually stunning, accessible, and highly intuitive digital interfaces that users love."
            index={0}
          />
          <ServiceCard
            icon={icon2}
            title="Full-Stack Development"
            description="Building fast, secure, and scalable web platforms using modern frameworks and best practices."
            index={1}
          />
          <ServiceCard
            icon={icon3}
            title="Digital Strategy & Branding"
            description="Developing unique brand narratives and market strategies that drive sustainable business growth."
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
