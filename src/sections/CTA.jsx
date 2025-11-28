import MagneticButton from "../components/MagneticButton"

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 lg:pl-64 bg-black text-white px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <p className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium uppercase tracking-wider mb-6">
          Let's Connect
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Ready to{" "}
          <span className="italic">Collaborate?</span>
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-xl md:text-2xl leading-relaxed">
          Whether it's strategic guidance, speaking engagements, or exploring new ventures—let's discuss how we can create value together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="inline-block">
            <MagneticButton variant="primary">
              Schedule a Call
            </MagneticButton>
          </div>
          <a href="#services" className="inline-block">
            <MagneticButton variant="outline">
              View Services
            </MagneticButton>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <span>→</span>
            <span>Strategic Partnerships</span>
          </div>
          <div className="flex items-center gap-2">
            <span>→</span>
            <span>Speaking Opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <span>→</span>
            <span>Advisory Roles</span>
          </div>
        </div>
      </div>
    </section>
  )
}
