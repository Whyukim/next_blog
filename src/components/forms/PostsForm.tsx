"use client";

import { IPosts } from "@/services/posts/@types";
import Category from "../Category";
import Post from "../Post";
import { useCallback, useState } from "react";

interface IPostsForm {
  posts: IPosts[];
  categorys: string[];
}

function PostsForm({ posts, categorys }: IPostsForm) {
  const [category, setCategory] = useState("All Posts");
  const [filterPosts, setFilterPosts] = useState([...posts]);

  const handleCategory = useCallback(
    (e: any) => {
      const { innerHTML } = e.target;
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

  return (
    <div className="grid grid-cols-[1fr_100px]">
      <Post
        posts={filterPosts}
        select={category}
        handleCategory={handleCategory}
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
