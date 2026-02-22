import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, ArrowRight, ExternalLink } from "lucide-react"
import { getAllProjects } from "@/lib/projects"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/animations"

export default function ProjectsIndex() {
    const projects = getAllProjects()

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
            <FadeIn className="mb-16 text-center md:text-left">
                <div className="inline-flex items-center rounded-lg bg-chart-4/10 p-3 mb-6">
                    <Briefcase className="h-6 w-6 text-chart-4" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Featured Work
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                    A selection of projects where I've tackled complex architectural challenges,
                    driven performance improvements, and built scalable design systems.
                </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <StaggerItem key={project.slug}>
                        <HoverCard className="h-full">
                            <Card className="group hover:border-chart-4/50 transition-all shadow-sm bg-card/60 backdrop-blur-sm flex flex-col h-full overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-chart-4 to-chart-3 w-full opacity-70 group-hover:opacity-100 transition-opacity" />
                                <CardHeader className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-2xl group-hover:text-chart-4 transition-colors">
                                            <Link href={`/projects/${project.slug}`}>
                                                {project.meta.title}
                                            </Link>
                                        </CardTitle>
                                    </div>
                                    <p className="text-sm text-chart-4 font-mono mb-2">{project.meta.role}</p>
                                    <CardDescription className="text-base text-foreground/80 mt-2">
                                        {project.meta.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.meta.stacks?.map(stack => (
                                            <span key={stack} className="text-xs bg-muted text-muted-foreground border border-border/50 px-2.5 py-1 rounded-full">
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0 flex gap-2">
                                    <Button asChild variant="default" className="flex-1 bg-card hover:bg-chart-4 hover:text-white border text-foreground transition-all">
                                        <Link href={`/projects/${project.slug}`}>
                                            Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    {project.meta.link && (
                                        <Button asChild variant="outline" className="px-3 hover:bg-primary hover:text-primary-foreground border-primary/20">
                                            <a href={project.meta.link} target="_blank" rel="noreferrer" aria-label={`Visit live site for ${project.meta.title}`}>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </HoverCard>
                    </StaggerItem>
                ))}
                {projects.length === 0 && (
                    <StaggerItem className="col-span-1 md:col-span-2 py-20 text-center border rounded-xl bg-muted/20 border-dashed">
                        <p className="text-muted-foreground">No projects found. Create some MDX files in the content directory!</p>
                    </StaggerItem>
                )}
            </StaggerContainer>
        </div>
    )
}
