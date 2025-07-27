"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import SidebarOptions from "./SidebarOptions";
import { adminLinks, userLinks } from "./Constants";
import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          <h1>Here will be profile picture photo</h1>
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">user</h1>
          <p className="break-words text-sm">user@gmail.com</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create a post
        </Button>
      </div>
      <div className="mt-2 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={user?.role === "USER" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
};

export default Sidebar;
