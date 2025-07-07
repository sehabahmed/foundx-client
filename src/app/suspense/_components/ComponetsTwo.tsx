import { delay } from "@/src/utils/delay";

export default async function ComponetsTwo() {
  await delay(3000);

  return (
    <div className="pt-10 text-center w-[400px] h-[400px] border border-spacing-5 border-white">
      This is Components Two | Static Componets
    </div>
  );
}
