import Button from "../components/Button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-linear-to-br from-primary via-[#1c415f] to-[#254d64] text-white px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.25, 0.4],
            rotate: [45, 0, 45]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/15 rounded-full blur-3xl"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative max-w-7xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-2 bg-white/20 border border-white/40 rounded-full text-sm font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm"
        >
          Let's Get Started
        </motion.div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Ready to{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Ignite</span>
            <motion.span
              className="absolute bottom-2 left-0 right-0 h-6 bg-white/30 z-0"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>{" "}
          Your Brand?
        </h2>

        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-xl md:text-2xl leading-relaxed">
          Let's discuss your vision and craft a strategy that achieves your ambitious goals.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="outline">Schedule a Free Consultation</Button>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/60 hover:bg-white/10 transition-all duration-300 uppercase text-sm tracking-wide"
          >
            Explore Services
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/85 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>No Commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Expert Team</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
