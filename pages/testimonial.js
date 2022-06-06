import Image from "next/image";
import people1 from "../public/images/people-1.png";
import people2 from "../public/images/people-2.png";

function Testimonial() {
  return (
    <>
      <div className="text-center mb-10 flex-col flex">
        <p className="text-semibold text-orange-500 text-lg block mb-2">
          Testimonial
        </p>
        <h2 className="text-gray-800 text-bold text-5xl mb-4">Testimonial</h2>
      </div>
      <div className="flex md:flex-row flex-col lg:justify-center gap-10 max-w-7xl mx-20">
        {/* first block */}
        <div className="max-wxl p-4 text-gray-800 bg-orange-500 rounded-lg shadow-md">
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
              <h5 className="text-bold text-orange-100">
                Alex
                <span className="text-sm text-orange-100">CEO/Founder</span>
              </h5>
            </div>
            <p className="text-center mb-2 text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        {/* second block */}
        <div className="max-wxl p-4 text-gray-800 bg-orange-500 rounded-lg shadow-md">
          <div className="mb-2">
            <div className="flex items-center justify-center gap-4 mb05">
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
              <h5 className="text-bold text-orange-100">
                John Deo
                <span className="text-sm text-orange-100">CEO/Founder</span>
              </h5>
            </div>
            <p className="text-center mb-2 text-gray-100">
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
