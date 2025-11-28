import { motion } from "framer-motion"
import PortfolioCard from "../components/PortfolioCard"
import project1 from "../assets/Project1.webp"
import project2 from "../assets/Project2.webp"
import project3 from "../assets/Project3.webp"

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 lg:pl-64 bg-gray-50 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="inline-block px-4 py-2 bg-black/5 border border-black/10 rounded-full text-black/70 font-medium text-sm uppercase tracking-wider mb-4">
            Ventures & Projects
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
            Built to{" "}
            <span className="italic">Last</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Impactful ventures and initiatives that have created value across industries.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-10">
          <PortfolioCard
            image={project1}
            title="TechVentures Capital"
            category="Investment Fund"
            index={0}
          />
          <PortfolioCard
            image={project2}
            title="Scale Academy"
            category="Education Platform"
            index={1}
          />
          <PortfolioCard
            image={project3}
            title="InnovateCo"
            category="SaaS Startup"
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
