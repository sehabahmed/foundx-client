import FxForm from "@/src/components/form/FxForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import React from "react";

export default function page() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h2 className="text-2xl text-center font-bold">Login with FoundX</h2>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FxForm onSubmit={onSubmit}>
          <div className="py-3">
            <FXInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <FXInput label="Password" name="email" type="password" />
          </div>

          <Button
            className="w-full my-3 font-semibold bg-default-900 text-default"
            radius="sm"
            size="lg"
          >
            Login
          </Button>
        </FxForm>
        <h3 className="text-center my-3 text-md">
          Don&lsquo;t have an account? <Link href="/register">Register</Link>
        </h3>
      </div>
    </div>
  );
}
