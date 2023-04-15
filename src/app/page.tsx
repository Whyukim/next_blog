import { Inter } from "next/font/google";
import Profile from "@/components/Profile";
import { getPosts } from "@/services/posts";
import PostsForm from "@/components/forms/PostsForm";
import PostsSlideForm from "@/components/forms/PostsSlideForm";
import { IPosts } from "@/services/posts/@types";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const [filterPosts, posts]: any[] = await getPosts("main");

  return (
    <div className="grid gap-10">
      <Profile />
      <section>
        <h3>Featured Posts</h3>
        <PostsForm posts={filterPosts} />
      </section>

      <section className="overflow-hidden">
        <h1>You may like</h1>
        <PostsSlideForm posts={posts} />
      </section>
    </div>
  );
}
