"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues
): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/claim-request", claimRequest);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getReceivedClaimRequest = async () => {
  try {
    const res = await axiosInstance.get(
      "/claim-request/received-claim-request"
    );

    return res.data;
  } catch (error: any) {
    console.log("Failed to fetch data: ", error);
    throw new Error("Failed to Fetch Data");
  }
};
