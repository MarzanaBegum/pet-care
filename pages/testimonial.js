import Image from "next/image";
import people1 from "../public/images/people-1.png";
import people2 from "../public/images/people-2.png";

function Testimonial() {
  return (
    <>
      <div className="flex flex-col mb-10 text-center">
        <p className="block mb-2 text-lg text-orange-500 text-semibold">
          Testimonial
        </p>
        <h2 className="mb-4 text-5xl text-gray-800 text-bold">Testimonial</h2>
      </div>
      <div className="flex flex-col items-center gap-10 px-6 lg:mx-auto md:flex-row lg:justify-center max-w-7xl">
        {/* first block */}
        <div className="max-w-xl px-4 py-10 text-gray-800 bg-orange-500 rounded-lg shadow-md">
          <div className="mb-2">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-full">
                <Image
                  src={people1}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="object-cover object-center w-full h-full"
                  alt="people"
                />
              </div>
              <h5 className="text-orange-100 text-bold">
                Alex
                <span className="text-sm text-orange-100">CEO/Founder</span>
              </h5>
            </div>
            <p className="mb-2 text-center text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        {/* second block */}
        <div className="max-w-xl px-4 py-10 text-gray-800 bg-orange-500 rounded-lg shadow-md">
          <div className="mb-2">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-full">
                <Image
                  src={people2}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="object-cover object-center w-full h-full"
                  alt="people"
                />
              </div>
              <h5 className="text-orange-100 text-bold">
                John Deo
                <span className="text-sm text-orange-100">CEO/Founder</span>
              </h5>
            </div>
            <p className="mb-2 text-center text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
