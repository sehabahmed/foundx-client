import { ReactNode } from "react";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function FxForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) {
  const methods = useForm();

  const formConfig: formConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={() => submitHandler(onSubmit)}>{children}</Form>
    </FormProvider>
  );
}
