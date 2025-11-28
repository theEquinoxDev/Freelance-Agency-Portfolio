import { motion } from "framer-motion"
import Button from "../components/Button"
import heroImg from "../assets/hero.svg"

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="relative w-full min-h-screen pt-20 flex items-center bg-linear-to-br from-dark-bg via-[#102539] to-[#18344c] text-white px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-10 py-16 md:py-0"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-white/80 backdrop-blur-sm">
              ✨ Premium Digital Partner
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight"
          >
            Elevating Brands with{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-accent via-[#e7b06a] to-accent bg-clip-text text-transparent animate-gradient">
                Innovative
              </span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-4 bg-accent/25 z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              />
            </span>{" "}
            Digital Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed"
          >
            We help ambitious businesses grow with elegant design, robust strategy, and cutting-edge technology.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Button>Start a Project</Button>
            <Button variant="outline">Our Expertise</Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-8 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl -z-10 scale-110"></div>
            <img 
              src={heroImg} 
              alt="Digital illustration" 
              className="relative w-full max-w-lg  shadow-2xl rounded-2xl border border-white/10 backdrop-blur-sm bg-[#102032]/80" 
            />
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-linear-to-br from-primary to-[#1c415f] rounded-2xl shadow-dope flex items-center justify-center text-2xl"
            >
              Let's
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-linear-to-br from-accent to-primary rounded-xl shadow-dope flex items-center justify-center text-xl"
            >
              Start
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
