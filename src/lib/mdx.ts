import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostSlugs() {
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: data as { title: string; date: string; description: string; tags?: string[] },
        content,
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (new Date(post1.meta.date) > new Date(post2.meta.date) ? -1 : 1));
    return posts;
}
