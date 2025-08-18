"use client";

import { useGetCategories } from "@/src/app/hook/categories.hook";
import { ICategory } from "@/src/types";
import { Button } from "@heroui/button";
import { RotateCcw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filtering() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data } = useGetCategories();

  const { data: categories } = data || [];

  console.log(searchParams.toString());

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const [key, value] = category.split("=");

    params.set(key, value);

    router.push(`/found-items?${params.toString()}`);
  };

  return (
    <div className="my-5 flex items-center justify-end">
      <div className="flex justify-center gap-1">
        {categories?.map(({ _id, name }: ICategory) => (
          <Button
            key={_id}
            size="md"
            variant="ghost"
            onClick={() => handleCategoryChange(`category=${name}`)}
          >
            {name}
          </Button>
        ))}
        <Button size="md" variant="ghost">
          <RotateCcw onClick={() => router.push("/found-items")} />
        </Button>
      </div>
    </div>
  );
}
