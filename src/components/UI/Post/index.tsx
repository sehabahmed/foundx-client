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
import ClaimRequestModal from "../../modals/ClaimRequestModal";
import Link from "next/link";
import { useUser } from "@/src/context/user.provider";
import AuthenticationModal from "../../modals/AuthenticationModal";

interface IProps {
  post: TPost;
}

export default function Post({ post }: IProps) {
  const { _id, title, images, user, questions } = post || {};

  const { user: loggedInUser } = useUser();

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
          {email !== loggedInUser?.email && (
            <>
              {loggedInUser && (
                <ClaimRequestModal id={_id} questions={questions} />
              )}
              {!loggedInUser && <AuthenticationModal id={_id} />}
            </>
          )}
          {email !== loggedInUser?.email && (
            <div className="w-[1px] bg-default-200 " />
          )}
          <Button className="flex-1" variant="light">
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
