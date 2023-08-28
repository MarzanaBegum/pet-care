import React from "react";

const Notify = () => {
  return (
    <div className="px-6 max-w-[1200px] mx-auto">
      <div className="my-24 bg-orange-500 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center py-14">
          <h2 className="mb-4 text-4xl text-white text-semibold md:text-5xl">
            Get Started Today
          </h2>
          <p className="my-2 text-sm font-semibold text-white md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="w-auto px-4 py-4 mt-5 font-semibold text-orange-500 bg-white rounded-full md:py-2 hover:bg-black hover:shadow-lg">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notify;
