import { delay } from "@/src/utils/delay";

export default async function page() {
  await delay(2000);

  throw new Error("error");

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      <div className="bg-indigo-500 h-[400px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-center font-semibold text-white">
          Dynamic Content
        </h1>
      </div>
    </div>
  );
}
