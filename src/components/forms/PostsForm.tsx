"use client";

import { IPosts } from "@/services/posts/@types";
import Category from "../Category";
import Post from "../Post";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

interface IPostsForm {
  posts: IPosts[];
  categorys: string[];
}

function PostsForm({ posts, categorys }: IPostsForm) {
  const router = useRouter();

  const [category, setCategory] = useState("All Posts");
  const [filterPosts, setFilterPosts] = useState([...posts]);

  const handleCategory = useCallback(
    (e: any) => {
      e.stopPropagation();

      const { innerHTML } = e.currentTarget;
      setCategory(innerHTML);

      setFilterPosts(() => {
        let filter = [...posts];
        return innerHTML === "All Posts"
          ? posts
          : filter.filter((post) => post.category.includes(innerHTML));
      });
    },
    [category]
  );

  const handlePostsDetail = useCallback(
    (id: number) => () => {
      router.push(`/posts/${id}`);
    },
    []
  );

  return (
    <div className="grid grid-cols-[1fr_100px]">
      <Post
        posts={filterPosts}
        select={category}
        handleCategory={handleCategory}
        handlePostsDetail={handlePostsDetail}
      />
      <Category
        categorys={categorys}
        select={category}
        handleCategory={handleCategory}
      />
    </div>
  );
}

export default PostsForm;
