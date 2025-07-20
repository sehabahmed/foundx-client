import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import React from "react";

export default function page() {
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h2 className="text-2xl text-center font-bold">Login with FoundX</h2>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <form>
          <div className="py-3">
            <Input type="text" />
          </div>
          <div className="py-3">
            <Input type="text" />
          </div>

          <Button
            className="w-full my-3 font-semibold bg-default-900 text-default"
            radius="sm"
            size="lg"
          >
            Login
          </Button>
        </form>
        <h3 className="text-center">
          Don&lsquo;t have an account? <Link href="/register">Register</Link>
        </h3>
      </div>
    </div>
  );
}
