import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Post({ params, searchParams, }: { 
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ from?: string }>;
}) {
    const { slug } = await params;
    const { from } = await searchParams;

    const fromProjects = from === "projects";
    const backHref = fromProjects ? "/projects" : "/blog";
    const backLabel = fromProjects ? "cd ~/projects" : "cd ~/blog";
    const file = path.join(process.cwd(), "content/blog", `${slug}.md`);
    if (!fs.existsSync(file)) notFound();

    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const html = marked(content);

    return (
    <main className="main">
        <article className="page">
        <Link href={backHref} className="post-back" aria-label={`cd ${backLabel}`} title={`cd ${backLabel}`}>
            ← {backLabel}
        </Link>
        <h1 className="page-title" data-text={data.title}>{data.title}</h1>
        <p className="post-date">
            {new Date(data.date + "T00:00:00").toLocaleDateString("en-US", {
            month: "2-digit", day: "2-digit", year: "numeric",
            })}
        </p>
        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    </main>
    );
}