"use client"

import { motion } from "framer-motion"
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
        year: "Present",
        title: "Student",
        company: "Accra Technical University",
        description: "Currently pursuing my studies while actively developing my skills in modern frontend web technologies, React, and Next.js.",
        icon: <GraduationCap className="h-5 w-5" />,
        skills: ["Web Development", "React", "Next.js", "Computer Science"],
    },
    {
        year: "2024",
        title: "Frontend Developer",
        company: "Freelance",
        description: "Building responsive marketing sites and interactive web apps using React, Tailwind CSS, and Framer Motion.",
        icon: <Briefcase className="h-5 w-5" />,
        skills: ["React", "Typescript", "Framer Motion", "Tailwind CSS"],
    },
    {
        year: "2023",
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
                className="mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                    Kelvin Atsu Djayouri
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-mono mb-6">
                    Frontend Developer
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    <p>
                        I'm a frontend development student with a passion for pixel-perfect design and smooth user experiences.
                    </p>
                    <p>
                        My journey into code started when I realized I could build the apps I dreamed of. Since then, I've been immersed in learning the ins and outs of HTML, CSS, and JavaScript.
                    </p>
                    <p>
                        While I'm currently studying, I don't wait for the classroom to teach me—I build. I love taking designs from Figma and turning them into live, responsive websites. I’m currently exploring advanced React patterns and Next.js, and looking for opportunities to apply my skills to real-world projects.
                    </p>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsGroups.map((group, i) => (
                        <div key={group.category} className="p-6 rounded-2xl bg-card border shadow-sm">
                            <h3 className="text-lg font-semibold mb-6 border-b pb-2">{group.category}</h3>
                            <StaggerContainer delay={i * 0.1} className="grid grid-cols-3 gap-3">
                                {group.skills.map(skill => (
                                    <StaggerItem key={skill.name}>
                                        <HoverCard className="flex flex-col items-center justify-center p-3 rounded-[40px] bg-muted/30 hover:bg-muted/60 transition-colors gap-2 border border-transparent hover:border-border/50 h-full min-h-[100px]">
                                            <div className="scale-75 mb-1">{skill.icon}</div>
                                            <span className="text-[10px] md:text-xs font-medium text-center leading-tight">{skill.name}</span>
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
