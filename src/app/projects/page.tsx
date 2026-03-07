import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { getAllProjects } from "@/lib/projects"
import { Button } from "@/components/ui/button"

export default function ProjectsIndex() {
    // Note: This is an RSC (React Server Component) so we can't use framer-motion directly for scroll animations here 
    // unless we extract a client component wrapper. For simplicity, we'll keep it static or extract one if needed.
    // The previous implementation used client components (StaggerContainer, etc.) which means it might have been missing `use client` or the wrappers were client-side.
    // We will build a clean, static, high-end CSS design for this page.
    const projects = getAllProjects()

    return (
        <div className="container mx-auto px-4 py-16 md:py-32 max-w-5xl">
            <div className="mb-24 flex flex-col md:text-left">
                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{"//"} MY WORK</span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                    Featured Projects
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    A selection of projects where I've tackled complex architectural challenges,
                    driven performance improvements, and built scalable design systems.
                </p>
            </div>

            <div className="flex flex-col space-y-16">
                {projects.map((project, idx) => (
                    <div
                        key={project.slug}
                        className="group relative flex flex-col p-8 md:p-12 rounded-[40px] bg-slate-900 border border-white/5 hover:border-white/10 transition-all overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 p-40 bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <span className="text-xs font-mono tracking-widest text-primary mb-4 uppercase">
                                {project.meta.role || "PROJECT"}
                            </span>

                            <Link href={`/projects/${project.slug}`} className="group-hover:text-primary transition-colors w-fit">
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{project.meta.title}</h3>
                            </Link>

                            <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed text-lg">
                                {project.meta.description}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-6 mt-auto pt-8 border-t border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {project.meta.stacks?.map((stack) => (
                                        <span key={stack} className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-white/5 rounded-full border border-white/5 text-muted-foreground">
                                            {stack}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Button asChild variant="outline" className="rounded-full px-6 font-mono text-xs tracking-widest uppercase border-white/10 hover:bg-white/5">
                                        <Link href={`/projects/${project.slug}`}>
                                            Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>

                                    {project.meta.link && (
                                        <Button asChild variant="ghost" className="rounded-full px-6 font-mono text-xs tracking-widest uppercase text-primary hover:bg-primary/10 hover:text-primary transition-colors">
                                            <a href={project.meta.link} target="_blank" rel="noreferrer">
                                                Live Site <ExternalLink className="w-4 h-4 ml-2" />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {projects.length === 0 && (
                    <div className="py-20 text-center border rounded-[40px] bg-slate-900 border-dashed border-white/10">
                        <p className="text-muted-foreground font-mono uppercase tracking-widest">No projects found. Add some MDX files.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
