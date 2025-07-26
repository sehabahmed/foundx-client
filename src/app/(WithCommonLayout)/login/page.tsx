"use client";

import FxForm from "@/src/components/form/FxForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/components/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Spinner } from "@heroui/react";
import { useUserLogin } from "../../hook/auth.hook";
import Loading from "@/src/components/UI/Loading";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    handleUserLogin(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        return router.push(redirect as string);
      } else {
        return router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h2 className="text-2xl text-center font-bold">Login with FoundX</h2>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FxForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInput label="Password" name="password" type="password" />
            </div>

            <Button
              className="w-full my-3 font-semibold bg-default-900 text-default"
              radius="sm"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FxForm>
          <h3 className="text-center my-3 text-md">
            Don&lsquo;t have an account? <Link href="/register">Register</Link>
          </h3>
        </div>
      </div>
    </>
  );
}
