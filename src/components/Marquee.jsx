import { motion } from "framer-motion"

export default function Marquee() {
  const skills = [
    "Strategic Planning",
    "Business Development",
    "Leadership",
    "Innovation",
    "Market Analysis",
    "Venture Capital",
    "Public Speaking",
    "Team Building",
    "Growth Strategy",
    "Product Development"
  ]

  return (
    <div className="relative py-6 bg-black overflow-hidden border-y border-white/10">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1920]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <span key={index} className="text-white/40 text-lg font-medium uppercase tracking-wider">
            {skill} <span className="text-white/20 mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
