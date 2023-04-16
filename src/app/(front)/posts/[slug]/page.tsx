import PostDetailForm from "@/components/forms/PostDetailForm";
import { getPost } from "@/services/posts";

interface IpostsDetail {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function postsDetail({ params, searchParams }: IpostsDetail) {
  const { slug } = params;
  const [post, postItem] = await getPost(slug);

  return <PostDetailForm post={post} postItem={postItem} />;
}

export default postsDetail;
