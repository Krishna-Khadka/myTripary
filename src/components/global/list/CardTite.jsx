"use client";

export const CardTite = () => {
  return (
    <>
      <div className="rounded-lg transition-all duration-500 bg-white shadow-md hover:border-opacity-60 hover:shadow-lg m-6">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <h3 className="font-medium tracking-wider uppercase">Airlines</h3>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <h3 className="font-medium tracking-wider uppercase">
                Departure
              </h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <h3 className="font-medium tracking-wider uppercase">Duration</h3>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <h3 className="font-medium tracking-wider uppercase">Arrival</h3>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <h3 className="font-medium tracking-wideruppercase">Price</h3>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};
