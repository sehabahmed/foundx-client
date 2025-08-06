"use client";

import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

import { protectedRoutes } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logOut } from "@/src/services/AuthService";

export default function NavbarDropdown() {
  const router = useRouter();
  const { setIsLoading: userLoading, user } = useUser();

  const pathname = usePathname();

  const handleLogout = () => {
    logOut();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="profile"
          onClick={() => handleNavigation("/profile")}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="settings"
          onClick={() => handleNavigation("/profile/settings")}
        >
          Settings
        </DropdownItem>
        <DropdownItem
          key="post"
          onClick={() => handleNavigation("/profile/create-post")}
        >
          Create Post
        </DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => handleLogout()}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
