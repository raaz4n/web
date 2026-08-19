"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

const FILTERS = ["all", "personal", "projects"];

export default function PostList({ posts }: { posts: Post[] }) {
    const [filter, setFilter] = useState("all");

    const shown = filter === "all" ? posts : posts.filter((p) => p.tags.includes(filter));

    const formatDate = (d: string) =>
    new Date(d + "T00:00:00").toLocaleDateString("en-US", {
        month: "2-digit", day: "2-digit", year: "numeric",
    });

    return (
    <div>
        <div className="blog-filters">
        {FILTERS.map((f) => (
            <button
            key={f}
            className={f === filter ? "active" : ""}
            onClick={() => setFilter(f)}
            >
            {f}
            </button>
        ))}
        </div>

        <div className="blog-list">
        {shown.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <span className="blog-card-title">{post.title}</span>
            <span className="blog-card-date">{formatDate(post.date)}</span>
            <span className="blog-card-tags">{post.tags.join(" · ")}</span>
            </Link>
        ))}
        </div>
    </div>
    );
}