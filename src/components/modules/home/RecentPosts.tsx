import Link from "next/link";
import { Button } from "@heroui/button";

import Container from "../../UI/Container";
import Card from "../../UI/Card";

import { getRecentPosts } from "@/src/services/RecentPosts";
import { TPost } from "@/src/types";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-8 grid-cols-3">
        {posts.map((post: TPost) => (
          <Card key={post?._id} post={post} />
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
