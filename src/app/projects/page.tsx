import Link from "next/link"
import { ArrowRight, ExternalLink, Zap, CheckCircle2 } from "lucide-react"
import { getAllProjects } from "@/lib/projects"
import { Button } from "@/components/ui/button"

export default function ProjectsIndex() {
    const projects = getAllProjects()

    const completedProjects = projects.filter(
        (p) => !p.meta.status || p.meta.status === "completed"
    )
    const inProgressProjects = projects.filter(
        (p) => p.meta.status === "in-progress"
    )

    const ProjectCard = ({
        project,
        isInProgress,
    }: {
        project: (typeof projects)[0]
        isInProgress?: boolean
    }) => (
        <div className="group relative flex flex-col p-8 md:p-12 rounded-[40px] bg-slate-900 border border-white/5 hover:border-white/10 transition-all overflow-hidden">
            {/* Background Glow */}
            <div
                className={`absolute top-0 right-0 p-40 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                    isInProgress ? "bg-amber-500/5" : "bg-primary/5"
                }`}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono tracking-widest text-primary uppercase">
                        {project.meta.role || "PROJECT"}
                    </span>
                    {isInProgress ? (
                        <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                            </span>
                            In Progress
                        </span>
                    ) : (
                        <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            Completed
                        </span>
                    )}
                </div>

                <Link
                    href={`/projects/${project.slug}`}
                    className="group-hover:text-primary transition-colors w-fit"
                >
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        {project.meta.title}
                    </h3>
                </Link>

                <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed text-lg">
                    {project.meta.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-6 mt-auto pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                        {project.meta.stacks?.map((stack) => (
                            <span
                                key={stack}
                                className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest bg-white/5 rounded-full border border-white/5 text-muted-foreground"
                            >
                                {stack}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full px-6 font-mono text-xs tracking-widest uppercase border-white/10 hover:bg-white/5"
                        >
                            <Link href={`/projects/${project.slug}`}>
                                Case Study <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>

                        {project.meta.link && (
                            <Button
                                asChild
                                variant="ghost"
                                className="rounded-full px-6 font-mono text-xs tracking-widest uppercase text-primary hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                <a
                                    href={project.meta.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Site{" "}
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="container mx-auto px-4 py-16 md:py-32 max-w-5xl">
            <div className="mb-24 flex flex-col md:text-left">
                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
                    {"// MY WORK"}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                    Featured Projects
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    A selection of projects where I&apos;ve tackled complex
                    architectural challenges, driven performance improvements,
                    and built scalable design systems.
                </p>
            </div>

            {/* Completed Projects */}
            {completedProjects.length > 0 && (
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <h2 className="text-xl font-mono uppercase tracking-widest text-emerald-400">
                            Completed
                        </h2>
                        <span className="text-xs font-mono text-muted-foreground bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                            {completedProjects.length} projects
                        </span>
                    </div>
                    <div className="flex flex-col space-y-16">
                        {completedProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </section>
            )}

            {/* In Progress Projects */}
            {inProgressProjects.length > 0 && (
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <Zap className="w-5 h-5 text-amber-400" />
                        <h2 className="text-xl font-mono uppercase tracking-widest text-amber-400">
                            In Progress
                        </h2>
                        <span className="text-xs font-mono text-muted-foreground bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                            {inProgressProjects.length} projects
                        </span>
                    </div>
                    <div className="flex flex-col space-y-16">
                        {inProgressProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                isInProgress
                            />
                        ))}
                    </div>
                </section>
            )}

            {projects.length === 0 && (
                <div className="py-20 text-center border rounded-[40px] bg-slate-900 border-dashed border-white/10">
                    <p className="text-muted-foreground font-mono uppercase tracking-widest">
                        No projects found. Add some MDX files.
                    </p>
                </div>
            )}
        </div>
    )
}
