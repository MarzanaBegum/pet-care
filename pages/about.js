import React from "react";
import Image from "next/image";
import pet2 from "../public/images/pet2.jpg";

const About = () => {
  return (
    <div className="flex justify-between min-w-7xl my-24 md:flex-row flex-col gap-y-10">
      <div className="mx-20">
        <Image
          src={pet2}
          alt="petCare"
          width={800}
          height={800}
          objectFit="cover"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:mr-20 mx-10">
        <h2 className="font-semibold text-orange-500 text-base">About Us</h2>
        <p className="mt-2 mb-5 text-5xl font-bold text-gray-900 sm:text-4xl">
          Let&apos;s Know each other More closly
        </p>
        <p className="md:text-base text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button className="my-10 bg-orange-500 text-white rounded-full font-semibold px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
