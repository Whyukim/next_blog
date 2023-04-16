"use client";

import { IPosts } from "@/services/posts/@types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import {
  AiTwotoneCalendar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

interface IPostDetailForm {
  post: string;
  postItem: IPosts;
}

function PostDetailForm({ post, postItem }: IPostDetailForm) {
  const router = useRouter();

  return (
    <div className="prose dark:prose-invert relative w-full max-w-[1220px] rounded-3xl overflow-hidden">
      <div>
        <Image
          className="w-full max-h-48 m-0"
          src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
          alt="사자"
          width={200}
          height={200}
        />
      </div>
      <section className="p-8 bg-gray-800">
        <div>
          <h1 className="m-0">{postItem.title}</h1>
          <h2 className="m-0 text-lg">{postItem.description}</h2>
          <div className="w-40 h-1 bg-blue-500 my-5"></div>
        </div>
        <div className="absolute flex items-center gap-2 right-5 top-[210px] text-blue-500">
          <i className="mt-[-3px]">
            <AiTwotoneCalendar />{" "}
          </i>
          <span>{postItem?.createAt}</span>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
            pre({ children }) {
              return <pre className="bg-slate-600">{children}</pre>;
            },
          }}
        >
          {post}
        </ReactMarkdown>
      </section>
      <nav className="grid grid-cols-[50%_50%] auto-rows-[200px] bg-gray-800 ">
        {postItem.prev?.title ? (
          <Link
            href={`posts/${postItem.prev.id.toString()}`}
            className="relative flex h-full items-center justify-center no-underline"
          >
            <div className="grid grid-cols-[32px_1fr] gap-3 items-center z-10">
              <i>
                <AiOutlineArrowLeft size="2em" color="yellow" />
              </i>

              <div className="flex items-center justify-center flex-col">
                <h2 className="m-0">{postItem.prev?.title}</h2>
                <span>{postItem.prev?.description}</span>
              </div>
            </div>
            <Image
              className="absolute w-full h-full m-0"
              src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
              alt="사자"
              width={200}
              height={200}
            />
          </Link>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            글이없음
          </div>
        )}

        {postItem.next?.title ? (
          <Link
            href={`posts/${postItem.next.id.toString()}`}
            className="relative flex h-full items-center justify-center no-underline"
          >
            <div className="grid grid-cols-[1fr_32px] gap-3 items-center z-10">
              <div className="flex items-center justify-center flex-col">
                <h2 className="m-0">{postItem.next?.title}</h2>
                <span>{postItem.next?.description}</span>
              </div>

              <i>
                <AiOutlineArrowRight size="2em" color="yellow" />
              </i>
            </div>
            <Image
              className="absolute w-full h-full m-0"
              src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
              alt="사자"
              width={200}
              height={200}
            />
          </Link>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            글이없음
          </div>
        )}
      </nav>
    </div>
  );
}

export default PostDetailForm;
