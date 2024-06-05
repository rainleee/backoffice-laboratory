import Link from "next/link";
import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { BlogPost } from "./blog-post";
import { blogPosts } from "../data/blog-posts";

export const MainRoot = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">메인</h1>
      </div>
      {children}
    </div>
  );
};

export const MainDescription = () => {
  return (
    <div>
      <p className="text-lg text-muted-foreground">
        이 홈페이지의 데이터는 실제 데이터가 아닌{" "}
        <Link
          href="https://mswjs.io/"
          className="text-cyan-600"
          target="_blank"
        >
          MSW
        </Link>
        를 활용한 목업 데이터를 이용해 구현되어 있습니다. 아래 포스팅을 누르면
        진행하면서 느낀 점을 볼 수 있습니다.
      </p>
      <Separator className="my-4" />
    </div>
  );
};

export const MainAction = () => {
  return (
    <>
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {blogPosts.map((post) => (
              <BlogPost
                key={post.name}
                post={post}
                className="w-[250px] cursor-pointer"
                aspectRatio="portrait"
                width={1280}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
