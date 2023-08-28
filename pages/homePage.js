import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import pet1 from "../public/images/pet1.jpg";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mb-40 md:flex-row max-w-[1200px] mx-auto">
      <div className="flex flex-col items-start justify-start mx-10 mt-10 md:ml-20 md:mt-0">
        <p className="font-semibold text-orange-500">Veterinary</p>
        <h2 className="text-2xl font-bold text-gray-800 md:text-6xl">
          Treating your pet by our profession
        </h2>
        <p className="mt-5 text-sm font-semibold text-gray-400 md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="flex items-center justify-center gap-5 mt-10">
          <buttton className="px-4 py-3 font-semibold text-white bg-orange-500 rounded-full md:py-4 hover:bg-black hover:shadow-lg">
            Create Schedule
          </buttton>
          <button className="p-2 rounded-full shadow-lg bg-gray-50">
            <BsFillPlayCircleFill className="text-4xl text-orange-500 md:text-5xl hover:text-black hover:shadow-lg" />
          </button>
        </div>
      </div>
      <div className="hidden mx-20 md:block">
        <Image
          src={pet1}
          width={1500}
          height={1500}
          objectFit="cover"
          alt="petImage"
        />
      </div>
    </div>
  );
}
export default HomePage;
