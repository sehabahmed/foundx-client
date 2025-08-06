"use client";

import {
  Button,
  CardFooter,
  CardHeader,
  Card as HeroUICard,
  Image,
} from "@heroui/react";
import { format } from "date-fns";

import { TPost } from "../../types";

export default function Card({ post }: { post: TPost }) {
  const { title, category, images, dateFound } = post;

  return (
    <HeroUICard isFooterBlurred className="border-none" radius="lg">
      <CardHeader className="absolute top-1 left-1 z-10 flex-col items-start">
        <p className="rounded-full bg-black text-white px-3 py-1 text-xs uppercase shadow-md">
          {category?.name || "No Category"}
        </p>
      </CardHeader>
      <Image
        alt="Woman listing to music"
        className="object-cover z-0"
        height={400}
        src={images[0]}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">
          {format(new Date(dateFound), "dd MMMM, yyyy")}
        </p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Notify me
        </Button>
      </CardFooter>
    </HeroUICard>
  );
}
