import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Working with this entrepreneur opened doors I never knew existed. Their strategic insights and network transformed my business trajectory completely.",
    author: "James Wilson",
    role: "CEO, GrowthTech"
  },
  {
    quote: "A true visionary who doesn't just talk strategy—they execute. The guidance I received was instrumental in scaling our venture from 5 to 50 employees.",
    author: "Emma Thompson",
    role: "Founder, InnovateCo"
  },
  {
    quote: "Their speaking engagement at our conference was the highlight. Practical wisdom delivered with authenticity—our team still references those lessons today.",
    author: "David Brown",
    role: "Director, Tech Summit"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 lg:pl-64 bg-gray-900 text-white px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/70 font-medium text-sm uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Trusted by{" "}
            <span className="italic">Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real impact, real results—from those who've experienced it firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-white/20 mb-4" />
              
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                "{testimonial.quote}"
              </p>

              <div className="pt-6 border-t border-white/10">
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
