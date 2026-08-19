import { getPosts } from "@/lib/posts";
import PostList from "./PostList";

export default function Blog() {
    const posts = getPosts();

    return (
    <main className="main">
        <article className="page">
        <h1 className="page-title" data-text="~/blog">~/blog</h1>
        <p className="blog-tagline">Posts of mine. What I'm up to.</p>
        <PostList posts={posts} />
        </article>
    </main>
    );
}