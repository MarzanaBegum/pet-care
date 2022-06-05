function Pricing() {
  return (
    <div className="min-w-7xl my-24 mx-20">
      <div className="text-center mb-10 flex flex-col">
        <p className="text-lg text-orange-500 text-semibold mb-2 block">
          Pricing Table
        </p>
        <h2 className="font-bold text-4xl md:text-5xl mb-4 text-gray-800">
          Our Pricing Plan
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5">
        {/* first block */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="bg-white border border-gray-200 rounded-md p-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                Lite
              </span>
              <h2 className="font-bold text-dark mb-5 text-4xl">
                $45
                <span className="text-base text-medium text-body-color">
                  /year
                </span>
              </h2>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  20 Online Booking
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  1 staff calendar
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Customer recalls
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24/7 ready
                </p>
              </div>
              <button className="text-white text-semibold rounded-full bg-orange-500 px-4 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        {/* second block */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="bg-white border border-gray-200 rounded-md p-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                Regular
              </span>
              <h2 className="font-bold text-dark mb-5 text-4xl">
                $60
                <span className="text-base text-medium text-body-color">
                  /year
                </span>
              </h2>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  120 Online Booking
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  10 staff calendar
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Customer recalls
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24/7 ready
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Google Calendar sync
                </p>
              </div>
              <button className="text-white text-semibold rounded-full bg-orange-500 px-4 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        {/* third block */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="bg-white border border-gray-200 rounded-md p-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                Premium
              </span>
              <h2 className="font-bold text-dark mb-5 text-4xl">
                $90
                <span className="text-base text-medium text-body-color">
                  /year
                </span>
              </h2>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Unlimited Online Booking
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  upto 50 staff calendar
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24/7 ready
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Google Calendar sync
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Automatic recalls
                </p>
              </div>
              <button className="text-white text-semibold rounded-full bg-orange-500 px-4 md:py-4 py-2 hover:bg-black hover:shadow-lg">
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
