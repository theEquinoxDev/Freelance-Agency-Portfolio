import { motion } from "framer-motion"
import ServiceCard from "../components/ServiceCard"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"

export default function Services() {
  return (
    <section id="services" className="relative py-32 lg:pl-64 bg-white px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="inline-block px-4 py-2 bg-black/5 border border-black/10 rounded-full text-black/70 font-medium text-sm uppercase tracking-wider mb-4">
            What I Offer
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
            Areas of{" "}
            <span className="italic">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategic guidance and hands-on execution for ambitious leaders and organizations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-10">
          <ServiceCard
            icon={icon1}
            title="Business Strategy"
            description="Developing comprehensive growth strategies that align with market dynamics and organizational capabilities for sustainable success."
            index={0}
          />
          <ServiceCard
            icon={icon2}
            title="Leadership Consulting"
            description="Empowering executives and teams with frameworks and insights to navigate complex challenges and drive meaningful change."
            index={1}
          />
          <ServiceCard
            icon={icon3}
            title="Public Speaking"
            description="Delivering keynotes and workshops on entrepreneurship, innovation, and building high-performance organizations."
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
