"use client";

import { IPosts } from "@/services/posts/@types";
import Image from "next/image";
import { MouseEvent } from "react";

interface IPost {
  posts: IPosts[];
  select: string;
  handleCategory: (e: MouseEvent<HTMLLabelElement>) => void;
}

function Post({ posts, select, handleCategory }: IPost) {
  return (
    <section className="grid grid-cols-3 gap-3 max-w-[1100px] mx-auto auto-rows-[280px]">
      {posts.map((post: IPosts) => (
        <ul
          key={post.id}
          className="grid auto-rows-posts rounded-md overflow-hidden shadow-md shadow-color-gray cursor-pointer hover:brightness-110"
        >
          <li>
            <Image
              className="w-full h-full"
              src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
              alt="사자"
              width={200}
              height={200}
            />
          </li>
          <li className="p-3">
            <span className="block text-right text-sm">{post?.createAt}</span>
            <h4 className="text-center font-bold">{post?.title}</h4>
            <p className="text-center text-sm">{post?.description}</p>
            <div className="flex justify-center gap-3 mt-1">
              {post?.category?.map((item: string, index) => (
                <label
                  key={item + index}
                  className={`p-1 text-xs rounded-lg cursor-pointer transition bg-orange-400 hover:bg-purple-500 ${
                    select === item ? "bg-purple-500" : ""
                  }`}
                  onClick={handleCategory}
                >
                  {item}
                </label>
              ))}
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}

export default Post;
