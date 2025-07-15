import { ReactNode } from "react";

export default function layout({
  children,
  posts,
  profile,
}: {
  children: ReactNode;
  posts: ReactNode;
  profile: ReactNode;
}) {
  return (
    <div>
      This is parallel layout component
      {children}
      {posts}
      {profile}
    </div>
  );
}
