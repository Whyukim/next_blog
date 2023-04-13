"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface IPostDetailForm {
  post: string;
}

function PostDetailForm({ post }: IPostDetailForm) {
  const router = useRouter();

  return (
    <div className="prose dark:prose-invert w-full max-w-[1220px] rounded-3xl overflow-hidden">
      <div>
        <Image
          className="w-full max-h-48 m-0"
          src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
          alt="사자"
          width={200}
          height={200}
        />
      </div>
      <section className="p-5 bg-gray-800">
        <ReactMarkdown
          children={post}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                />
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
        />
      </section>
      <nav className="grid grid-cols-[50%_50%] auto-rows-[200px] bg-gray-800 ">
        <Link href={"/"} className="flex h-full items-center justify-center">
          <Image
            className="w-full h-full m-0"
            src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
            alt="사자"
            width={200}
            height={200}
          />
        </Link>
        <Link
          href={"/"}
          className="relative flex h-full items-center justify-center"
        >
          <div className="z-10">
            <h3>안녕</h3>
            <span>다음글은 이거야</span>
          </div>
          <Image
            className="absolute w-full h-full m-0"
            src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
            alt="사자"
            width={200}
            height={200}
          />
          <i className="absolute z-10 right-5 top-1/2">아이콘</i>
        </Link>
      </nav>
    </div>
  );
}

export default PostDetailForm;
