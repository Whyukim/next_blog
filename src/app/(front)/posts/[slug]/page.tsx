import PostDetailForm from "@/components/forms/PostDetailForm";
import { getPost } from "@/services/posts";

interface IpostsDetail {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function postsDetail({ params, searchParams }: IpostsDetail) {
  const { slug } = params;
  const post = await getPost(slug);

  return <PostDetailForm post={post} />;
}

export default postsDetail;
