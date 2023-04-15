"use client";

import { IPosts } from "@/services/posts/@types";
import Category from "../Category";
import Post from "../Post";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

interface IPostsForm {
  posts: IPosts[];
  categorys?: string[] | undefined;
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
    (id: number) => (e: any) => {
      e.preventDefault();
      router.push(`/posts/${id}`);
    },
    []
  );

  return (
    <div
      className={`grid ${
        categorys ? "grid-cols-[1fr_100px]" : "grid-cols-[1fr]"
      }`}
    >
      <section
        className={`grid gap-3 mx-auto auto-rows-[280px] ${
          categorys
            ? "max-w-[1100px] grid-cols-posts"
            : "max-w-[1220px] w-full grid-cols-3"
        }`}
      >
        {posts.map((post: IPosts) => (
          <Post
            key={post.id}
            post={post}
            select={category}
            handleCategory={handleCategory}
            handlePostsDetail={handlePostsDetail}
          />
        ))}
      </section>
      {categorys && (
        <Category
          categorys={categorys}
          select={category}
          handleCategory={handleCategory}
        />
      )}
    </div>
  );
}

export default PostsForm;
