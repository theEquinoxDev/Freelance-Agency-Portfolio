import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Partnering with Agency was a game-changer. They didn't just deliver code; they delivered a vision. The design is impeccable, and the performance is flawless. True professionals.",
    author: "Alex Chen",
    role: "CTO, Vertex Corp.",
    avatar: "https://i.pravatar.cc/80?img=32"
  },
  {
    quote: "The team's attention to detail and creative approach transformed our brand identity. Our engagement rates increased by 300% after the redesign. Absolutely outstanding work!",
    author: "Sarah Martinez",
    role: "Marketing Director, TechFlow",
    avatar: "https://i.pravatar.cc/80?img=47"
  },
  {
    quote: "Working with Agency exceeded all expectations. They understood our vision and brought it to life with innovative solutions. The best investment we've made for our digital presence.",
    author: "Michael Johnson",
    role: "Founder, StartupHub",
    avatar: "https://i.pravatar.cc/80?img=12"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-linear-to-br from-dark-bg via-[#132a3c] to-[#1c3a4f] text-white px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Client Success
          </motion.p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Words That{" "}
            <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
              Matter
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it—hear from the clients we've helped succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.481.967-4.996 2.848-4.996 7.153 0 3.69 2.581 5.757 5.015 6.786v4.659h-9.998zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.482.967-5 2.848-5 7.153 0 3.69 2.58 5.757 5.015 6.786v4.659h-10.011z"/>
                </svg>
              </div>

              <p className="text-lg italic leading-relaxed text-gray-200 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/50 group-hover:ring-accent transition-all"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
                  <p className="text-accent text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
