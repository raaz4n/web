import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
    slug: string;
    title: string;
    date: string;
    tags: string[];
}

export function getPosts(): Post[] {
    const dir = path.join(process.cwd(), "content/blog");
    return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
        const slug = f.replace(/\.md$/, "");
        const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
        return { slug, title: data.title, date: data.date, tags: data.tags ?? [] };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}