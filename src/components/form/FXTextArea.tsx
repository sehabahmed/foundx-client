import { Textarea } from "@heroui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {}

export default function FXTextArea({
  name,
  label,
  variant = "bordered",
}: IProps) {
  const {
    register,
    formState: { error },
  } = useFormContext();

  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
}
