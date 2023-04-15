import PostsForm from "@/components/forms/PostsForm";
import { getCategory, getPosts } from "@/services/posts";

interface Iposts {}

async function posts({}: Iposts) {
  const [posts, categorys]: any[] = await Promise.all([
    getPosts(),
    getCategory(),
  ]);

  return <PostsForm posts={posts} categorys={categorys} />;
}

export default posts;
