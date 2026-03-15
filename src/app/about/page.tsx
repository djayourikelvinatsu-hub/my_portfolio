"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, Award } from "lucide-react"
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiGit,
    SiFigma,
    SiPython,
    SiCplusplus,
    SiPhp
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const skillsGroups = [
    {
        category: "Languages & Core",
        skills: [
            { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-yellow-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-500" /> },
            { name: "Python", icon: <SiPython className="h-6 w-6 text-blue-400" /> },
            { name: "C++", icon: <SiCplusplus className="h-6 w-6 text-blue-700" /> },
            { name: "Java", icon: <FaJava className="h-6 w-6 text-orange-500" /> },
            { name: "PHP", icon: <SiPhp className="h-6 w-6 text-indigo-400" /> },
            { name: "HTML5", icon: <SiHtml5 className="h-6 w-6 text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="h-6 w-6 text-blue-600" /> },
        ]
    },
    {
        category: "Frameworks & UI",
        skills: [
            { name: "React", icon: <SiReact className="h-6 w-6 text-sky-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 text-sky-500" /> },
            { name: "Framer Motion", icon: <SiFramer className="h-6 w-6 text-purple-600" /> },
        ]
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "Git", icon: <SiGit className="h-6 w-6 text-orange-600" /> },
            { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6 text-green-600" /> },
            { name: "Figma", icon: <SiFigma className="h-6 w-6 text-pink-500" /> },
        ]
    }
]

const experienceData = [
    {
        year: "2023 - 2025",
        title: "Software Engineer",
        company: "Digital Edge Agency",
        description: "Developed robust backend APIs and interactive client-facing web applications. Improved overall application performance, reduced database query times, and optimized core web vitals.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["React", "TypeScript", "Express", "MongoDB", "Performance Optimization"],
    },
    {
        year: "2020 - 2023",
        title: "Senior Software Engineer",
        company: "TechNova Solutions",
        description: "Architecting and building scalable full-stack applications using Next.js, Node.js, and Postgres. Leading a cross-functional team of developers and mentoring juniors while establishing CI/CD pipelines and best practices across the organization.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["Next.js", "Node.js", "PostgreSQL", "System Architecture", "Leadership"],
    },
    {
        year: "2020 - 2021",
        title: "Web Developer",
        company: "Creative Solutions",
        description: "Built responsive marketing sites and integrated third-party APIs. Worked closely with product owners to ensure seamless user experiences and robust data flow.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["JavaScript", "HTML/CSS", "REST APIs", "UI/UX Implementation"],
    }
]

const educationData = [
    {
        year: "2022 - 2026",
        title: "BSc Information Technology",
        company: "Accra Technical University",
        description: "Bachelor of Science in Information Technology. Focused on core concepts of software development, computer science, and systems engineering.",
        icon: <Award className="h-5 w-5" />,
        skills: ["Information Technology", "Computer Science", "Software Engineering"],
    },
    {
        year: "2018",
        title: "Meta Frontend Developer Certification",
        company: "Coursera",
        description: "Mastered advanced React patterns, state management, and accessible UI development principles.",
        icon: <Award className="h-5 w-5" />,
        skills: ["Advanced React", "Accessibility (a11y)", "UX/UI"],
    }
]

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-32 max-w-5xl">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mb-24 flex flex-col gap-12 md:gap-16 items-center"
            >
                <motion.div variants={fadeIn} className="w-full flex flex-col">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">{"//"} THE DEVELOPER</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        Kelvin Atsu Djayouri
                    </h1>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            A Software Engineer with 4+ years of experience in architecting scalable applications and leading cross-functional teams, specializing in building robust backend systems and seamless user experiences.
                        </p>
                        <p>
                            With a strong foundation in modern web technologies, my approach combines technical depth across the stack with a keen eye for system architecture. My development journey has involved building high-quality enterprise applications from the ground up, scaling databases, and mentoring junior developers to establish CI/CD best practices.
                        </p>
                        <p>
                            I specialize in engineering comprehensive solutions across the frontend and backend. Currently, my focus is on leveraging advanced React patterns, Next.js server components, distributed databases, and robust API design to deliver performant and scalable real-world solutions at an enterprise level.
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-12 border-t border-white/5"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Section */}
                    <div id="experience" className="scroll-mt-32">
                        <motion.div variants={fadeIn} className="mb-8 sm:mb-12">
                            <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} CAREER</span>
                            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Professional Experience</h2>
                        </motion.div>

                        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                            {experienceData.map((item, index) => (
                                <motion.div key={index} variants={fadeIn} className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-4 md:-left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-primary shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-4 mb-3">
                                        <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                                        <span className="text-primary font-mono text-xs xl:text-sm bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-2 w-fit xl:shrink-0">
                                            <Calendar className="h-3 w-3" />
                                            {item.year}
                                        </span>
                                    </div>
                                    <h4 className="text-muted-foreground font-mono text-sm uppercase tracking-wider mb-4">{item.company}</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-slate-900 border border-white/10 text-muted-foreground">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div id="education" className="scroll-mt-32">
                        <motion.div variants={fadeIn} className="mb-8 sm:mb-12">
                            <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} LEARNING</span>
                            <h2 className="text-2xl sm:text-3xl font-bold mt-4">Education & Awards</h2>
                        </motion.div>

                        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-12">
                            {educationData.map((item, index) => (
                                <motion.div key={index} variants={fadeIn} className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-4 md:-left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-primary shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-4 mb-3">
                                        <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                                        <span className="text-primary font-mono text-xs xl:text-sm bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-2 w-fit xl:shrink-0">
                                            <Calendar className="h-3 w-3" />
                                            {item.year}
                                        </span>
                                    </div>
                                    <h4 className="text-muted-foreground font-mono text-sm uppercase tracking-wider mb-4">{item.company}</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-slate-900 border border-white/10 text-muted-foreground">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                id="skills"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="pt-24 pb-12 border-t border-white/5 scroll-mt-32"
            >
                <div className="mb-12 sm:mb-16">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">{"//"} TECHNICAL ARSENAL</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
                        The tools I use every day to build scalable and high-performance applications.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {skillsGroups.map((group, i) => (
                        <div key={group.category} className="w-full">
                            <h3 className="text-xl font-mono uppercase tracking-widest mb-8 text-white/80">{group.category}</h3>
                            <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {group.skills.map(skill => (
                                    <motion.div
                                        key={skill.name}
                                        variants={fadeIn}
                                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                                    >
                                        <div className="flex-shrink-0 mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-mono tracking-wider text-center text-muted-foreground group-hover:text-white transition-colors">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
