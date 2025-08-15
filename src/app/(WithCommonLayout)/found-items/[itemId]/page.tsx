import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import { getPost } from "@/src/services/post";

interface IProps {
  params: {
    itemId: string;
  };
}

export default async function ItemDetailPage({ params: { itemId } }: IProps) {
  const { data: post } = await getPost(itemId);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <Post key={post._id} post={post} />
      </div>
    </Container>
  );
}
