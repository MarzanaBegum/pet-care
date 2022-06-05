import React from "react";

const Notify = () => {
  return (
    <div className="min-w-7xl mx-20 my-24 bg-orange-500 rounded-lg shadow-lg p-10">
      <div className="text-center mb-10 flex-col flex justify-center items-center gap-2">
        <h2 className="text-semibold text-white mb-4 text-4xl md:text-5xl">
          Get Started Today
        </h2>
        <p className="md:text-base text-sm text-white my-2 font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="bg-white text-orange-500 w-auto font-semibold px-4 md:py-2 py-4 hover:bg-black hover:shadow-lg rounded-full mt-5">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Notify;
