import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft, Calendar } from "lucide-react"

import { getPostBySlug, getPostSlugs } from "@/lib/mdx"
import { Button } from "@/components/ui/button"
import { Button as UIButton } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// MDX Components to be used inside markdown
const components = {
    h1: (props: any) => <h1 className="text-4xl font-extrabold mt-12 mb-6 tracking-tight" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mt-10 mb-4 tracking-tight border-b pb-2" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold mt-8 mb-4 tracking-tight" {...props} />,
    p: (props: any) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground/90" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    ol: (props: any) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
    li: (props: any) => <li className="leading-7" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground" {...props} />
    ),
    pre: (props: any) => (
        <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted/50 p-4" {...props} />
    ),
    code: (props: any) => (
        <code className="relative rounded bg-muted/50 px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props} />
    ),
    Button: UIButton,
    Card,
}

// Ensure generateStaticParams awaits the parameters correctly in Next.js 15
export async function generateStaticParams() {
    const slugs = getPostSlugs()
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }))
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;

    try {
        const post = getPostBySlug(params.slug)

        return (
            <article className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
                <Button asChild variant="ghost" className="mb-8 -ml-4">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                <header className="mb-14 border-b pb-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4" />
                            {new Date(post.meta.date).toLocaleDateString("en-US", {
                                timeZone: "UTC",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                        {post.meta.tags && (
                            <div className="flex gap-2">
                                {post.meta.tags.map((tag) => (
                                    <span key={tag} className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {post.meta.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {post.meta.description}
                    </p>
                </header>

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    {/* @ts-ignore - MDXRemote types are sometimes tricky */}
                    <MDXRemote source={post.content} components={components} />
                </div>
            </article>
        )
    } catch (e) {
        notFound()
    }
}
