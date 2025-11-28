import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../components/Button"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 left-0 z-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/60 shadow-lg"
          : "bg-white/70 backdrop-blur-md border-b border-gray-100/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-black bg-linear-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight"
        >
          AGENCY.
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              whileHover={{ y: -2 }}
              className="relative uppercase text-sm tracking-wider hover:text-primary transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="primary">Get Started</Button>
          </motion.div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-3xl text-gray-800 p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={`mobile-${link.name}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-primary py-2 border-b border-gray-100 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <Button variant="primary">Get Started</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
