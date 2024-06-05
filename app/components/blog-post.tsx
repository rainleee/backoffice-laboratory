import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";

import { BlogPostProps } from "./types";

export const BlogPost = ({
  post,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: BlogPostProps) => {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Link
              href="https://velog.io/@rainlee/%EB%B0%B1%EC%98%A4%ED%94%BC%EC%8A%A4-TFT-%ED%9B%84%EA%B8%B0-%EB%B0%8F-%ED%9A%8C%EA%B3%A0"
              target="_blank"
            >
              <Image
                src={post.cover}
                alt={post.name}
                width={width}
                height={height}
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
                )}
              />
            </Link>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{post.name}</h3>
        <p className="text-xs text-muted-foreground">{post.category}</p>
      </div>
    </div>
  );
};
