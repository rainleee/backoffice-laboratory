export interface BlogPostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export interface Post {
  name: string;
  category: string;
  cover: string;
}
