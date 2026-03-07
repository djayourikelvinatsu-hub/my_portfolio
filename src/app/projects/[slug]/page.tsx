import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Target, Settings, GitBranch, Terminal, ExternalLink } from "lucide-react"

import { getProjectBySlug, getProjectSlugs } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Button as UIButton } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function MermaidDiagram({ chart }: { chart: string }) {
    return (
        <Card className="my-8 overflow-hidden border-white/10 bg-slate-900/50">
            <div className="bg-primary/10 px-4 py-3 border-b border-white/5 flex items-center font-mono text-xs tracking-widest uppercase text-primary">
                <GitBranch className="h-4 w-4 mr-2" /> Architecture Diagram
            </div>
            <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-muted-foreground m-0 p-0 bg-transparent">
                    {chart}
                </pre>
            </div>
        </Card>
    )
}

const components = {
    h1: (props: any) => <h1 className="text-4xl font-bold mt-12 mb-6 tracking-tight text-white" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold mt-12 mb-4 tracking-tight border-b border-white/5 pb-2 flex items-center gap-2 text-white/90" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-bold mt-8 mb-4 tracking-tight text-white/80" {...props} />,
    p: (props: any) => <p className="leading-relaxed [&:not(:first-child)]:mt-6 text-muted-foreground text-lg" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground text-lg" {...props} />,
    li: (props: any) => <li className="leading-relaxed" {...props} />,
    pre: (props: any) => (
        <pre className="mb-4 mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-6 text-zinc-50 shadow-sm" {...props} />
    ),
    code: (props: any) => (
        <code className="relative rounded bg-white/5 px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary" {...props} />
    ),
    Button: UIButton,
    Card,
    Mermaid: MermaidDiagram
}

export async function generateStaticParams() {
    const slugs = getProjectSlugs()
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }))
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;

    try {
        const project = getProjectBySlug(params.slug)

        return (
            <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <Button asChild variant="ghost" className="mb-12 hover:bg-white/5 hover:text-white transition-colors group">
                    <Link href="/projects" className="font-mono text-xs tracking-widest uppercase">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </Button>

                <header className="mb-16 rounded-[40px] bg-slate-900 border border-white/5 p-8 sm:p-12 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-start gap-4">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
                            {"//"} {project.meta.role || "Case Study"}
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 leading-[1.1] text-white">
                            {project.meta.title}
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                            {project.meta.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10 border-b border-white/5 pb-10 w-full">
                            {project.meta.stacks?.map((stack) => (
                                <span key={stack} className="px-4 py-1.5 bg-white/5 border border-white/5 text-xs font-mono tracking-widest uppercase rounded-full text-muted-foreground">
                                    {stack}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-between font-mono text-sm tracking-widest uppercase w-full gap-6">
                            <div className="flex items-center">
                                <span className="text-muted-foreground mr-3">Role /</span>
                                <span className="text-white">{project.meta.role}</span>
                            </div>
                            {project.meta.link && (
                                <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-xs font-mono tracking-widest uppercase">
                                    <a href={project.meta.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                        View Live <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </header>

                <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                    {/* @ts-ignore */}
                    <MDXRemote source={project.content} components={components} />
                </div>
            </article>
        )
    } catch (e) {
        notFound()
    }
}
