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

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <StaggerItem key={project.slug}>
                        <HoverCard className="h-full">
                            <Card className="group hover:border-chart-4/50 transition-all shadow-sm bg-card/60 backdrop-blur-sm flex flex-col justify-center items-center text-center h-full min-h-[320px] overflow-hidden rounded-[80px] p-6 border-2 border-transparent">
                                <CardHeader className="flex-1 items-center px-2 py-4">
                                    <div className="flex justify-center items-center mb-2">
                                        <CardTitle className="text-xl md:text-2xl group-hover:text-chart-4 transition-colors">
                                            <Link href={`/projects/${project.slug}`}>
                                                {project.meta.title}
                                            </Link>
                                        </CardTitle>
                                    </div>
                                    <p className="text-xs md:text-sm text-chart-4 font-mono mb-2">{project.meta.role}</p>
                                    <CardDescription className="text-sm md:text-base text-foreground/80 mt-2 line-clamp-3">
                                        {project.meta.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-2 py-2">
                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                        {project.meta.stacks?.slice(0, 3).map(stack => (
                                            <span key={stack} className="text-[10px] md:text-xs bg-muted text-muted-foreground border border-border/50 px-2.5 py-1 rounded-full">
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-2 pb-6 flex flex-col gap-2 w-full max-w-[200px]">
                                    <Button asChild variant="default" size="sm" className="w-full bg-card hover:bg-chart-4 hover:text-white border text-foreground transition-all rounded-full">
                                        <Link href={`/projects/${project.slug}`}>
                                            Case Study <ArrowRight className="ml-2 h-3 w-3" />
                                        </Link>
                                    </Button>
                                    {project.meta.link && (
                                        <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground border-primary/20 rounded-full">
                                            <a href={project.meta.link} target="_blank" rel="noreferrer" aria-label={`Visit live site for ${project.meta.title}`}>
                                                Live Site <ExternalLink className="ml-2 h-3 w-3" />
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </HoverCard>
                    </StaggerItem>
                ))}
                {projects.length === 0 && (
                    <StaggerItem className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center border rounded-[80px] bg-muted/20 border-dashed">
                        <p className="text-muted-foreground">No projects found. Create some MDX files in the content directory!</p>
                    </StaggerItem>
                )}
            </StaggerContainer>
        </div>
    )
}
