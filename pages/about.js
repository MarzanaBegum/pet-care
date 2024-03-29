import React from "react";
import Image from "next/image";
import pet2 from "../public/images/pet2.jpg";

const About = () => {
  return (
    <div className="flex justify-between max-w-[1200px] mx-auto items-center my-24 md:flex-row flex-col gap-y-10">
      <div className="mx-20">
        <Image
          src={pet2}
          alt="petCare"
          width={1500}
          height={1500}
          objectFit="cover"
          className="shadow-lg rounded-2xl"
        />
      </div>
      <div className="mx-10 md:mr-20">
        <h2 className="text-base font-semibold text-orange-500">About Us</h2>
        <p className="mt-2 mb-5 text-2xl font-bold text-gray-900 sm:text-4xl">
          Let&apos;s Know each other More closly
        </p>
        <p className="text-sm text-gray-400 md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button className="px-5 py-2 my-10 font-semibold text-white bg-orange-500 rounded-full md:py-4 hover:bg-black hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
