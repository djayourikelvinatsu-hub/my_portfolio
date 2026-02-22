import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getProjectSlugs() {
    if (!fs.existsSync(projectsDirectory)) {
        fs.mkdirSync(projectsDirectory, { recursive: true });
        return [];
    }
    return fs.readdirSync(projectsDirectory).filter(file => file.endsWith('.mdx'));
}

export function getProjectBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: data as { title: string; date: string; description: string; role: string; stacks: string[]; link?: string },
        content,
    };
}

export function getAllProjects() {
    const slugs = getProjectSlugs();
    return slugs
        .map((slug) => getProjectBySlug(slug))
        .sort((post1, post2) => (new Date(post1.meta.date) > new Date(post2.meta.date) ? -1 : 1));
}
