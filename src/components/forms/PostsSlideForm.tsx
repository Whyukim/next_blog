"use client";

import { IPosts } from "@/services/posts/@types";
import Category from "../Category";
import Post from "../Post";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IPostsSlideForm {
  posts: IPosts[];
  categorys?: string[] | undefined;
}

function PostsSlideForm({ posts }: IPostsSlideForm) {
  const router = useRouter();

  const [category, setCategory] = useState("All Posts");
  const [isMoving, setIsMoving] = useState(false);

  const handlePostsDetail = useCallback(
    (id: number) => (e: any) => {
      if (!isMoving) {
        e.preventDefault();
        router.push(`/posts/${id}`);
      }
    },
    [isMoving]
  );

  return (
    <Carousel
      ssr
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      sliderClass="gap-10"
      className="p-3"
      containerClass="container-with-dots"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      shouldResetAutoplay
      showDots={false}
      slidesToSlide={3}
      swipeable
      beforeChange={() => setIsMoving(true)}
      afterChange={() => setIsMoving(false)}
    >
      {posts.map((post: IPosts) => (
        <Post
          key={post.id}
          post={post}
          select={category}
          handlePostsDetail={handlePostsDetail}
        />
      ))}
    </Carousel>
  );
}

export default PostsSlideForm;
