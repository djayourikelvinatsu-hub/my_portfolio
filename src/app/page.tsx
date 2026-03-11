"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Layers, Zap, MonitorSmartphone, Server, Database, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projects = [
  {
    title: "Campus Marketplace",
    slug: "campus-marketplace",
    label: "FEATURED PROJECT",
    description: "A mobile-first web app designed to help users buy, sell, and trade textbooks and electronics locally.",
    stats: [
      { label: "App Type", value: "Mobile-First" },
      { label: "Stack", value: "Next.js" },
      { label: "Database", value: "Supabase" },
    ],
    tags: ["Next.js", "Supabase", "Prisma", "Tailwind CSS"],
    link: "https://campus-marketplace-umber.vercel.app"
  },
  {
    title: "Meditrack Pro",
    slug: "meditrack-pro",
    label: "FEATURED PROJECT",
    description: "A comprehensive healthcare management and tracking system.",
    stats: [
      { label: "Industry", value: "Healthcare" },
      { label: "Platform", value: "Web App" },
      { label: "Security", value: "HIPAA Ready" },
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Interactive Portfolio",
    slug: "interactive-portfolio",
    label: "PORTFOLIO",
    description: "A dynamic developer portfolio with custom animations and MDX blog support.",
    stats: [
      { label: "Design", value: "Custom" },
      { label: "Animations", value: "Framer" },
      { label: "Content", value: "MDX" },
    ],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://my-portfolio.vercel.app"
  }
]

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Leading the development of scalable microservices, improving system performance by 40%, and mentoring junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Edge Agency",
    period: "2023 - 2025",
    description: "Developed and maintained multiple enterprise web applications using React, Node.js, and PostgreSQL.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Built responsive and interactive user interfaces for client websites, focusing on performance and accessibility.",
  }
]

const skills = [
  { name: "Frontend Development", progress: 95 },
  { name: "Backend Development", progress: 90 },
  { name: "Database Architecture", progress: 85 },
  { name: "System Design", progress: 80 },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <motion.div
              className="w-full md:w-[60%] flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="flex items-center space-x-2 mb-6">
                <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} SOFTWARE ENGINEER</span>
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Kelvin Atsu Djayouri
                </span>
                <br />
                I build things for the web.
              </motion.h1>

              <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                A software engineer with 5 years of experience specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at scale.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8 text-sm font-mono tracking-widest uppercase">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-sm font-mono tracking-widest uppercase border-white/10 hover:bg-white/5">
                  <a href="/#contact">Get in Touch</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-[40%] flex justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-teal-500/20 blur-3xl" />
                <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden bg-slate-900 flex items-center justify-center p-2">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src="/avatar.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-slate-900/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeIn} className="mb-12">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} ABOUT EXPERTISE</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">What I bring to the table</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layers, title: "Architecture", desc: "Scalable, maintainable system design." },
                { icon: Zap, title: "Performance", desc: "Optimized for speed and efficiency." },
                { icon: Server, title: "Backend", desc: "Robust data models and APIs." },
                { icon: MonitorSmartphone, title: "Frontend", desc: "Pixel-perfect, responsive UIs." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-0" />
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-10">
                <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} EXPERIENCE</span>
                <h2 className="text-3xl font-bold mt-4">Where I've worked</h2>
              </motion.div>

              <div className="relative border-l border-white/10 ml-3 space-y-10 pb-4">
                {experiences.map((exp, i) => (
                  <motion.div key={i} variants={fadeIn} className="relative pl-8">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6px] top-2 shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-3 text-sm font-mono text-primary">
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-10">
                <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} SKILLS</span>
                <h2 className="text-3xl font-bold mt-4">Technical Proficiency</h2>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {skills.map((skill, i) => {
                  const radius = 54;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (skill.progress / 100) * circumference;

                  return (
                    <motion.div key={i} variants={fadeIn} className="flex flex-col items-center">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle
                            cx="64"
                            cy="64"
                            r={radius}
                            className="stroke-slate-800"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <motion.circle
                            cx="64"
                            cy="64"
                            r={radius}
                            className="stroke-primary drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-xl font-bold text-white shadow-black drop-shadow-md">{skill.progress}%</span>
                        </div>
                      </div>
                      <span className="font-mono text-sm mt-6 text-center text-muted-foreground font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 bg-slate-900/30 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeIn} className="mb-12 sm:mb-16">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} WORK</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">Selected Projects</h2>
            </motion.div>

            <div className="flex flex-col space-y-12">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group relative flex flex-col p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900 border border-white/5 hover:border-white/10 transition-all overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <span className="text-xs font-mono tracking-widest text-primary mb-4 uppercase">{project.label}</span>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed text-base sm:text-lg">{project.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 py-6 border-y border-white/5">
                      {project.stats.map((stat, j) => (
                        <div key={j} className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase mb-1 tracking-wider">{stat.label}</span>
                          <span className="font-semibold">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 mt-auto pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 text-xs font-mono bg-white/5 rounded-full border border-white/5">{tag}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-2 sm:mt-0">
                        <Button asChild variant="outline" className="w-full sm:w-auto rounded-full px-6 font-mono text-xs tracking-widest uppercase border-white/10 hover:bg-white/5">
                          <Link href={`/projects/${project.slug}`}>
                            Case Study <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" className="w-full sm:w-auto rounded-full px-6 font-mono text-xs tracking-widest uppercase hover:bg-primary/10 hover:text-primary transition-colors">
                          <a href={project.link} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2">
                            View Live <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="mt-16 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-sm font-mono tracking-widest uppercase border-white/10 hover:bg-white/5">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeIn} className="mb-8">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} LET'S TALK</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">Work Together</h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                I'm currently available for new opportunities. Send me a message and I'll get back to you soon.
              </p>
            </motion.div>

            <motion.form
              variants={fadeIn}
              className="w-full space-y-6 text-left"
              onSubmit={(e) => {
                e.preventDefault();
                // Form handling logic would go here
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-muted-foreground ml-1">Name</label>
                  <Input id="name" placeholder="John Doe" required className="bg-slate-950 border-white/10 text-white placeholder:text-muted-foreground/50 rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-muted-foreground ml-1">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-slate-950 border-white/10 text-white placeholder:text-muted-foreground/50 rounded-xl h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-muted-foreground ml-1">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Hi Kelvin, I'd like to talk about..."
                  required
                  className="flex w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl font-mono text-sm tracking-widest uppercase py-6 hover:scale-[1.02] transition-transform">
                Send Message <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
