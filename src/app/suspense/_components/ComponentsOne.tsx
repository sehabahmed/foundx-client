import { delay } from "@/src/utils/delay";

export default async function ComponentsOne() {
  await delay(5000);
  throw new Error("err");

  return (
    <div className="pt-10 text-center w-[400px] h-[400px] border border-spacing-5 border-white">
      This is Components One | Dynamic Components
    </div>
  );
}
