"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Layers, Zap, Mail, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

import { Button } from "@/components/ui/button"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
}

const wordVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 12 } }
}

export default function Home() {
  return (
    <div className="relative flex flex-col items-center flex-1 w-full overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-chart-2 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-32 flex flex-col items-center text-center relative z-10 flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm text-foreground mb-8 shadow-sm">
            <span className="relative flex h-2 w-2 mr-2 sm:mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-3 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-3"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <Image
              src="/avatar.jpg"
              alt="Kelvin Atsu Djayouri"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1] overflow-hidden">
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">IT</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">student</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">by</motion.span>
            <motion.span variants={wordVariants} className="inline-block">day,</motion.span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-2 to-chart-4 pb-2">
              <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">frontend</motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">architect</motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-[0.25em]">by</motion.span>
              <motion.span variants={wordVariants} className="inline-block">night.</motion.span>
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            At Accra Technical University, I&apos;m learning how technology really works then using that knowledge to build premium, high-performance web applications with modern tools. IT taught me to see the full picture not just the interface, but the systems, networks, and data behind it. That&apos;s why my frontend isn&apos;t just pretty; it&apos;s built to last. Scroll down to see what I&apos;m building.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full shadow-lg hover:shadow-primary/20 group relative overflow-hidden transition-all duration-300 hover:scale-105">
              <Link href="/projects">
                <span className="relative z-10 flex items-center">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full group transition-all duration-300 hover:scale-105 hover:bg-muted">
              <Link href="/playground">
                <Code2 className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> Code Playground
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-full gap-3 mt-8">
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto rounded-full shadow-sm group transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary hover:border-primary/20">
              <a href="mailto:kelvinatsu213@gmail.com" aria-label="Email Me">
                <Mail className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" /> Email
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto rounded-full shadow-sm group transition-all duration-300 hover:scale-105 hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/20 text-foreground">
              <a href="https://wa.me/233592921133" target="_blank" rel="noreferrer" aria-label="WhatsApp Me">
                <FaWhatsapp className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto rounded-full shadow-sm group transition-all duration-300 hover:scale-105 hover:bg-chart-2/10 hover:text-chart-2 hover:border-chart-2/20">
              <a href="tel:0592921133" aria-label="Call Me">
                <Phone className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" /> Call
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full max-w-5xl"
        >
          {[
            {
              icon: <Layers className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />,
              title: "Design Systems",
              desc: "Creating scalable and maintainable component libraries using Tailwind, Radix UI, and Framer Motion.",
              color: "bg-primary/10"
            },
            {
              icon: <Zap className="h-6 w-6 text-chart-4 group-hover:scale-110 transition-transform duration-300" />,
              title: "Performance",
              desc: "Optimizing Core Web Vitals, implementing server components, reducing bundle sizes, and enhancing accessibility.",
              color: "bg-chart-4/10"
            },
            {
              icon: <Code2 className="h-6 w-6 text-chart-2 group-hover:scale-110 transition-transform duration-300" />,
              title: "Interactive UIs",
              desc: "Building complex interfaces with rich transitions, live playgrounds, and state-driven dynamic visuals.",
              color: "bg-chart-2/10"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-3xl border bg-card/40 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300"
            >
              <div className={`h-12 w-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
