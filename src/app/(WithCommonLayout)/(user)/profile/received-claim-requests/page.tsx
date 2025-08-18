"use client";

import { useGetReceivedClaimRequest } from "@/src/app/hook/claimRequest.hook";
import ClaimPostCard from "@/src/components/UI/Post/ClaimPostCard";
import { IReceiveClaimRequests } from "@/src/types";

export default function ReceivedClaimRequest() {
  const { data } = useGetReceivedClaimRequest();

  const posts = data?.data || [];
  console.log(posts);

  return (
    <>
      {posts?.length ? (
        posts.map((post: IReceiveClaimRequests, index: number) => (
          <ClaimPostCard key={index} post={post} />
        ))
      ) : (
        <div className="min-h-screen w-full items-center justify-center">
          <h1 className="text-4xl">No Claim request has found!</h1>
        </div>
      )}
    </>
  );
}
