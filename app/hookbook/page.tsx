import React from "react";

const HookBook = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-8 bg-[#F2DAB5] pt-[10vh] shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#252419]">
        HookBook
      </h1>
      <h2 className="text-2xl font-bold text-center mb-6 text-[#46432D]">
        Platform for Authors
      </h2>

      <section className="grid grid-cols-4 gap-2 ">

        <div className="flex items-center justify-center flex-col text-xl bg-[#565A22] rounded-xl shadow-xl p-4">
          Mind Mapping
        </div>
        <div className="flex items-center justify-center flex-col text-xl bg-[#565A22] rounded-xl shadow-xl p-4">
          Focus Mode
        </div>
        <div className="flex items-center justify-center flex-col text-xl bg-[#565A22] rounded-xl shadow-xl p-4">
          Scientific checkups
        </div>
        <div className="flex items-center justify-center flex-col text-xl bg-[#565A22] rounded-xl shadow-xl p-4">
          Collaborating on storys
        </div>

      </section>

   
    </div>
  );
};

export default HookBook;
