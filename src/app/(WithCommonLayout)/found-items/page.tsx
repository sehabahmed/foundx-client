import Filtering from "@/src/components/modules/found-items/Filtering";
import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/lib/AxiosInstance";
import { TPost } from "@/src/types";

const FoundItems = async ({ searchParams }: { searchParams: Promise<any> }) => {
  const resolvedSearchParams = await searchParams;

  const params = new URLSearchParams(resolvedSearchParams);
  console.log(searchParams);

  const { data } = await axiosInstance.get("/items", {
    params: {
      searchTerm: params.get("query"),
      category: params.get("category"),
    },
  });

  return (
    <Container>
      <Filtering />
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: TPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
};

export default FoundItems;
