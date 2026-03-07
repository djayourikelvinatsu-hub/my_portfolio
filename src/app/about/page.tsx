"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, GraduationCap, Briefcase, Award } from "lucide-react"
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
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/animations"

const skillsGroups = [
    {
        category: "Languages & Core",
        skills: [
            { name: "JavaScript", icon: <SiJavascript className="h-8 w-8 text-yellow-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-blue-500" /> },
            { name: "Python", icon: <SiPython className="h-8 w-8 text-blue-400" /> },
            { name: "C++", icon: <SiCplusplus className="h-8 w-8 text-blue-700" /> },
            { name: "Java", icon: <FaJava className="h-8 w-8 text-orange-500" /> },
            { name: "PHP", icon: <SiPhp className="h-8 w-8 text-indigo-400" /> },
            { name: "HTML5", icon: <SiHtml5 className="h-8 w-8 text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="h-8 w-8 text-blue-600" /> },
        ]
    },
    {
        category: "Frameworks & UI",
        skills: [
            { name: "React", icon: <SiReact className="h-8 w-8 text-sky-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8 text-foreground" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-sky-500" /> },
            { name: "Framer Motion", icon: <SiFramer className="h-8 w-8 text-purple-600" /> },
        ]
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "Git", icon: <SiGit className="h-8 w-8 text-orange-600" /> },
            { name: "Node.js", icon: <SiNodedotjs className="h-8 w-8 text-green-600" /> },
            { name: "Figma", icon: <SiFigma className="h-8 w-8 text-pink-500" /> },
        ]
    }
]

const timelineData = [
    {
        year: "2020 - 2023",
        title: "Senior Frontend Engineer",
        company: "TechNova Solutions",
        description: "Architecting and building scalable frontend applications using Next.js and React. Leading a team of developers and mentoring juniors while establishing best practices across the organization.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["Next.js", "React", "System Architecture", "Leadership"],
    },
    {
        year: "2020 - 2022",
        title: "Frontend Developer",
        company: "Digital Edge Agency",
        description: "Developed and maintained interactive client-facing web applications. Improved performance metrics and core web vitals through significant code refactoring.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["React", "TypeScript", "Performance Optimization", "Tailwind CSS"],
    },
    {
        year: "2018 - 2020",
        title: "Web Developer",
        company: "Creative Solutions",
        description: "Built responsive marketing sites and e-commerce platforms. Worked closely with designers to ensure pixel-perfect implementation and engaging user experiences.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["JavaScript", "HTML/CSS", "UI/UX Implementation", "Framer Motion"],
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
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start"
            >
                <div className="flex-1 order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-center md:text-left">
                        Kelvin Atsu Djayouri
                    </h1>
                    <h2 className="text-xl md:text-2xl text-primary font-mono mb-6 text-center md:text-left">
                        Senior Frontend Developer
                    </h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            A Senior Frontend Engineer with proven experience in architecting scalable applications and leading frontend teams, specializing in building intuitive, pixel-perfect interfaces and seamless user experiences.
                        </p>
                        <p>
                            With a strong foundation in modern web technologies, my approach combines technical expertise with a keen eye for design. My development journey has involved building high-quality applications from the ground up and mentoring junior developers to establish best practices.
                        </p>
                        <p>
                            I specialize in translating complex designs into responsive, performant, and accessible interfaces. Currently, my focus is on leveraging advanced React patterns and Next.js server components to engineer performant, scalable, real-world solutions at an enterprise level.
                        </p>
                        <p>
                            I am open to collaborations, constructive professional discussions, and connecting with fellow engineers. Let's build something exceptional together.
                        </p>
                    </div>
                </div>

                <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 order-1 md:order-2">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 rounded-full blur-2xl" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                        <Image
                            src="/profile-bg.jpg"
                            alt="Profile Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <Image
                            src="/avatar.jpg"
                            alt="Kelvin Atsu Djayouri"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>
            </motion.div>

            <div className="relative border-l border-border/60 ml-3 md:ml-6 space-y-12 pb-12">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-4 md:-left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-primary shadow-sm dark:bg-card">
                            {item.icon}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-0.5 rounded flex items-center gap-1 w-fit">
                                <Calendar className="h-3 w-3" />
                                {item.year}
                            </span>
                        </div>

                        <h4 className="text-muted-foreground font-medium mb-4">{item.company}</h4>

                        <p className="text-foreground/80 leading-relaxed mb-4 max-w-2xl">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Skills Section */}
            <FadeIn className="pt-24 pb-12" direction="up">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of technologies I use to build scalable and high-performance applications.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {skillsGroups.map((group, i) => (
                        <div key={group.category} className="max-w-4xl mx-auto w-full">
                            <h3 className="text-xl font-semibold mb-6 text-center md:text-left text-foreground/90">{group.category}</h3>
                            <StaggerContainer delay={i * 0.1} className="flex flex-wrap justify-center md:justify-start gap-4">
                                {group.skills.map(skill => (
                                    <StaggerItem key={skill.name}>
                                        <HoverCard className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/60 hover:bg-muted/80 backdrop-blur-sm transition-all shadow-sm border border-border/40 hover:border-chart-4/50">
                                            <div className="flex-shrink-0">{skill.icon}</div>
                                            <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                                        </HoverCard>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    )
}
