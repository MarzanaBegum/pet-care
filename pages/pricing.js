function Pricing() {
  return (
    <div className="mx-20 mt-24 mb-40 min-w-7xl">
      <div className="flex flex-col mb-10 text-center">
        <p className="block mb-2 text-lg text-orange-500 text-semibold">
          Pricing Table
        </p>
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-5xl">
          Our Pricing Plan
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-10">
        {/* first block */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="bg-white border border-gray-200 rounded-md">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Lite
              </span>
              <h2 className="mb-5 text-4xl font-bold text-dark">
                $45
                <span className="text-base text-medium text-body-color">
                  /year
                </span>
              </h2>
              <div className="mb-7">
                <p className="mb-1 text-base leading-loose text-body-color">
                  20 Online Booking
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  1 staff calendar
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Customer recalls
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  24/7 ready
                </p>
              </div>
              <button className="px-4 py-2 text-white bg-orange-500 rounded-full text-semibold md:py-4 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        {/* second block */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="bg-white border border-gray-200 rounded-md">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Regular
              </span>
              <h2 className="mb-5 text-4xl font-bold text-dark">
                $60
                <span className="text-base text-medium text-body-color">
                  /year
                </span>
              </h2>
              <div className="mb-7">
                <p className="mb-1 text-base leading-loose text-body-color">
                  120 Online Booking
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  10 staff calendar
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Customer recalls
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  24/7 ready
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Google Calendar sync
                </p>
              </div>
              <button className="px-4 py-2 text-white bg-orange-500 rounded-full text-semibold md:py-4 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        {/* third block */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="bg-white border border-gray-200 rounded-md">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Premium
              </span>
              <h2 className="mb-5 text-4xl font-bold text-dark">
                $90
                <span className="text-base text-medium text-body-color">
                  /year
                </span>
              </h2>
              <div className="mb-7">
                <p className="mb-1 text-base leading-loose text-body-color">
                  Unlimited Online Booking
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  upto 50 staff calendar
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  24/7 ready
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Google Calendar sync
                </p>
                <p className="mb-1 text-base leading-loose text-body-color">
                  Automatic recalls
                </p>
              </div>
              <button className="px-4 py-2 text-white bg-orange-500 rounded-full text-semibold md:py-4 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
