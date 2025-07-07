import { Button } from "@heroui/button";
import Link from "next/link";

import Container from "../../UI/Container";
import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  console.log("posts", posts);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md: grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <h1 key={post._id}>{post.title}</h1>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default">
          <Link href="/recent-posts">Load More</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
