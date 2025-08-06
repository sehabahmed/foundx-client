"use client";

import { Button } from "@heroui/button";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";

import { TPost, TUser } from "@/src/types";
import ImageGallery from "./ImageGallery";
import ClaimRequestModal from "../../modules/home/modals/ClaimRequestModal";
import Link from "next/link";

interface IProps {
  post: TPost;
}

export default function Post({ post }: IProps) {
  const { _id, title, images, description, city, location, dateFound, user, questions } =
    post || {};

  const { name, email, profilePhoto } = (user as TUser) || {};

  return (
    <Card className=" mx-auto my-5">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src={profilePhoto}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{email}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Link href={`/found-items/${_id}`}>
        
        <p>{title}</p>
        </Link>
        <ImageGallery images={images} />
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex gap-5 w-full">
          <ClaimRequestModal id={_id} questions={questions}  />
          <div className="w-[1px] bg-default-200 " />
          <Button className="flex-1" variant="light">
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
