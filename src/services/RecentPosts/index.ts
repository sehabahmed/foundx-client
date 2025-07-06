import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/api/v1/items?sortBy=-createdAt&limit=9`
  );
  return res.json();
};
