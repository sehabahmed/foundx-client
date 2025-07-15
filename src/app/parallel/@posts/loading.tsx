import React from "react";

export default function loading() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      <div className="bg-red-300 h-[400px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-center font-semibold text-white">
          Loading...
        </h1>
      </div>
    </div>
  );
}
