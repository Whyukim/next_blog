"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProfile {}

function Profile({}: IProfile) {
  return (
    <section className="flex items-center flex-col">
      <div className="flex justify-center">
        <Image
          className="rounded-[50%]"
          src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg"
          alt="사자"
          width={200}
          height={200}
        />
      </div>

      <h1 className="text-center">HI, I'm Hyuk</h1>
      <strong className="text-center">Front-End endgineer</strong>
      <p className="text-center">안녕하세요. 블로그입니다.</p>
      <Link
        href={"/about"}
        className="p-1 bg-color-blue w-[100px] rounded-lg text-center"
      >
        Contact Me
      </Link>
    </section>
  );
}

export default Profile;
