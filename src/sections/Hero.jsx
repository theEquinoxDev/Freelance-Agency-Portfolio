import { motion } from "framer-motion"
import Button from "../components/Button"
import AnimatedCounter from "../components/AnimatedCounter"
import heroImg from "../assets/hero.svg"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-20 lg:pl-64 flex items-center bg-linear-to-br from-white via-gray-50 to-gray-100 text-black px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8 md:space-y-10 py-16 md:py-0">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-black/5 border border-black/10 rounded-full text-sm font-medium text-black/70">
              Entrepreneur & Visionary
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-black">
            Building Ventures That{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Transform</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-black/10 z-0"></span>
            </span>{" "}
            Industries
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
            Combining strategic thinking with execution excellence to create lasting impact in business and innovation.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button>View My Work</Button>
            <Button variant="outline">Get In Touch</Button>
          </div>

          <div className="flex gap-8 pt-8 border-t border-black/10">
            <div>
              <AnimatedCounter end={15} suffix="+" />
              <div className="text-sm text-gray-600">Ventures Founded</div>
            </div>
            <div>
              <AnimatedCounter end={50} suffix="M+" />
              <div className="text-sm text-gray-600">Capital Raised</div>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="K+" />
              <div className="text-sm text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <img 
              src={heroImg} 
              alt="Portfolio illustration" 
              className="relative w-full max-w-lg rounded-2xl" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
