"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { useUserRegistration } from "../../hook/auth.hook";

import registerValidationSchema from "@/src/components/schemas/register.schema";
import FXInput from "@/src/components/form/FXInput";
import FxForm from "@/src/components/form/FxForm";

export default function RegisterPage() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
    console.log(data);
  };

  if (isPending) {
    <h2>Loading........</h2>;
  }

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h2 className="text-2xl text-center font-bold">Register with FoundX</h2>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FxForm
          defaultValues={{
            name: "Sehab Ahmed",
            email: "sehabahmed50100@gmail.com",
            mobileNumber: "0178787878",
            password: "123456",
          }}
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" type="text" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" type="text" />
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
            Register
          </Button>
        </FxForm>
        <h3 className="text-center my-3 text-md">
          Already have an account? <Link href="/login">Login Now!</Link>
        </h3>
      </div>
    </div>
  );
}
