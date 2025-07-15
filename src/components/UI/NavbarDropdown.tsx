"use client";

import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="Joe" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleNavigation("/profile")}
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/settings")}
          key="settings"
        >
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/create-post")}
          key="post"
        >
          Create Post
        </DropdownItem>

        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
