import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from "next/image";
import pet1 from "../public/images/pet1.jpg";

function HomePage() {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center min-w-7xl mt-20">
      <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0">
        <p className="text-orange-500 font-semibold">Veterinary</p>
        <h2 className="text-gray-800 font-bold text-5xl md:text-6xl">
          Treating your pet by our profession
        </h2>
        <p className="md:text-base text-sm font-semibold text-gray-400 mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="flex justify-center items-center mt-10 gap-5">
          <buttton className="text-white bg-orange-500 font-semibold rounded-full px-4 md:py-4 hover:bg-black hover:shadow-lg">
            Create Schedule
          </buttton>
          <button className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-orange-500 md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </button>
        </div>
      </div>
      <div className="hidden md:block mr-20">
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
