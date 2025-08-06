import { addClaimRequest } from "@/src/services/ClaimRequest";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addClaimRequest(postData),
    onSuccess: () => {
      toast.success("Claim request created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};