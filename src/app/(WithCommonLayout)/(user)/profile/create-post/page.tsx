"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button, Divider } from "@heroui/react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

export default function CreatePost() {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };

    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />

          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <p>Owner verification questions</p>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          <div className="grid gap-3">
            {fields.map((field, index) => (
              <div
                className="flex justify-center items-center gap-2"
                key={field.id}
              >
                <FXInput name={`questions.${index}.value`} label="Question" />
                <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            ))}
          </div>

          <Divider className="my-5" />

          <Button type="submit">Create post</Button>
        </form>
      </FormProvider>
    </div>
  );
}
