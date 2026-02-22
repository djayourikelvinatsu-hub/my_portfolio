import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Target, Settings, GitBranch, Terminal, ExternalLink } from "lucide-react"

import { getProjectBySlug, getProjectSlugs } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Button as UIButton } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Mermaid Wrapper for rendering textual diagrams directly
function MermaidDiagram({ chart }: { chart: string }) {
    // In a real application we would use mermaid.js to parse this on the client
    // For the portfolio, we'll display the definition with a pre block wrapper emphasizing it's architecture
    return (
        <Card className="my-8 overflow-hidden border-chart-2/20 bg-muted/10">
            <div className="bg-chart-2/10 px-4 py-2 border-b border-chart-2/20 flex items-center font-mono text-xs text-chart-2">
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
    h1: (props: any) => <h1 className="text-4xl font-extrabold mt-12 mb-6 tracking-tight" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mt-12 mb-4 tracking-tight border-b pb-2 flex items-center gap-2" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold mt-8 mb-4 tracking-tight" {...props} />,
    p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground/90" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    li: (props: any) => <li className="leading-7" {...props} />,
    pre: (props: any) => (
        <pre className="mb-4 mt-6 overflow-x-auto rounded-xl border bg-zinc-950 p-4 text-zinc-50 shadow-sm" {...props} />
    ),
    code: (props: any) => (
        <code className="relative rounded bg-muted/50 px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props} />
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
            <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
                <Button asChild variant="ghost" className="mb-8 -ml-4">
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        All Projects
                    </Link>
                </Button>

                <header className="mb-14 rounded-3xl bg-card border p-6 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-chart-4/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-start gap-3 md:gap-4">
                        <span className="bg-chart-4/10 text-chart-4 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-tight">
                            Case Study
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                            {project.meta.title}
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4 md:mb-6">
                            {project.meta.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.meta.stacks?.map((stack) => (
                                <span key={stack} className="px-3 py-1 bg-background border text-xs font-medium rounded-full">
                                    {stack}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-between text-sm font-medium border-t pt-6 w-full mt-4 gap-4">
                            <div className="flex items-center">
                                <span className="text-muted-foreground mr-2">Role:</span>
                                <span>{project.meta.role}</span>
                            </div>
                            {project.meta.link && (
                                <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground border-primary/20">
                                    <a href={project.meta.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                        <ExternalLink className="h-4 w-4" /> Live Project
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </header>

                <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-chart-4">
                    {/* @ts-ignore */}
                    <MDXRemote source={project.content} components={components} />
                </div>
            </article>
        )
    } catch (e) {
        notFound()
    }
}
