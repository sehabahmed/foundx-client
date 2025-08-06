"use client";

import { Button } from "@heroui/button";
import { Divider } from "@heroui/react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import FXInput from "@/src/components/form/FXInput";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import dateToIso from "@/src/utils/dateToIso";
import FXSelect from "@/src/components/form/FXSelect";
import { useGetCategories } from "@/src/app/hook/categories.hook";
import { PlusIcon, TrashIcon } from "@/src/assets/icons";
import FXTextArea from "@/src/components/form/FXTextArea";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/app/hook/post.hook";
import Loading from "@/src/components/UI/Loading";

export default function CreatePost() {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const router = useRouter();

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess,
  } = useCreatePost();

  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOption: { key: string; label: string }[] = [];

  if (categoriesData?.data && !categoryLoading) {
    categoryOption = categoriesData.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

  const methods = useForm();

  const { user } = useUser();

  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const cityOptions = allDistict().map((city: string) => ({
    key: city,
    label: city,
  }));

  useEffect(() => {
    if (!createPostPending && isSuccess) {
      router.push("/");
    }
  }, [createPostPending, isSuccess, router]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToIso(data.dateFound),
      user: user!._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (const image of imageFiles) {
      formData.append("itemImages", image);
    }

    handleCreatePost(formData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {createPostPending && <Loading />}

      <div className="px-12 py-10 dark:bg-gradient-to-b from-[#010204]  to-[#18212e] rounded-xl">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-bold text-2xl text-center mb-3">
              Post a found item
            </h2>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Found Date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="location" name="location" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect
                  disabled={!categorySuccess}
                  label="Category"
                  name="category"
                  options={categoryOption}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="flex h-14 w-full justify-center items-center cursor-pointer rounded-xl border-2 border-default-200 text-default-500 shadows-sm transition-all duration-100 hover:border-default-400"
                  htmlFor="image"
                >
                  Upload Image
                </label>
              </div>
              <input
                multiple
                className="hidden"
                id="image"
                type="file"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
            <div className="flex flex-wrap gap-8">
              {imagePreviews.length > 0 &&
                imagePreviews.map((imageDataUrl) => (
                  <div
                    key={imageDataUrl}
                    className="relative size-40 rounded-xl border-2 border-dashed border-default"
                  >
                    <img
                      alt="selcted"
                      className="h-full w-full object-cover object-center"
                      src={imageDataUrl}
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXTextArea label="Description" name="description" />
              </div>
            </div>

            <Divider className="my-5" />

            <div className="flex justify-between items-center my-4">
              <p>Owner verification questions</p>
              <Button
                isIconOnly
                className="h-10 w-12 p-2.5"
                onPress={() => handleFieldAppend()}
              >
                <PlusIcon />
              </Button>
            </div>

            <div className="grid gap-3">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex justify-center items-center gap-2"
                >
                  <FXInput label="Question" name={`questions.${index}.value`} />
                  <Button
                    isIconOnly
                    className="h-14 w-16 p-3.5"
                    onPress={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ))}
            </div>

            <Divider className="my-5" />

            <Button type="submit">Create post</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
