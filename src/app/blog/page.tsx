import Link from "next/link"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogIndex() {
    const posts = getAllPosts()

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <div className="mb-12">
                <div className="inline-flex items-center rounded-lg bg-primary/10 p-3 mb-6">
                    <FileText className="h-6 w-6 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Technical Writing
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Thoughts on software architecture, design patterns, and scaling modern frontend applications.
                </p>
            </div>

            <div className="grid gap-6">
                {posts.map((post) => (
                    <Card key={post.slug} className="hover:border-primary/50 transition-colors shadow-sm bg-card/60 backdrop-blur-sm">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <CardTitle className="text-2xl hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.meta.title}
                                    </Link>
                                </CardTitle>
                                <div className="text-sm text-muted-foreground whitespace-nowrap hidden sm:block">
                                    {new Date(post.meta.date).toLocaleDateString("en-US", {
                                        timeZone: "UTC",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                            </div>
                            <CardDescription className="text-base text-foreground/80 mt-2">
                                {post.meta.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                            <div className="flex gap-2">
                                {post.meta.tags?.map(tag => (
                                    <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button asChild variant="ghost" size="sm">
                                <Link href={`/blog/${post.slug}`}>Read full post</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
