import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";

interface IProps {
  itemId: string;
}

export default function page({ itemId }: IProps) {
  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <Post key={Post._id} post={post} />
      </div>
    </Container>
  );
}
