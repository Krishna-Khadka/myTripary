import React from "react";
import buddha from "../../../public/logo/buddha.png";
import arrow from "../../../public/logo/arow.png";

import { VscOpenPreview } from "react-icons/vsc";
import Image from "next/image";

const Checkout = () => {
  return (
    <>
      <div>
        <div className="flex items-center bg-secondary text-white text-2xl font-semibold tracking-wider py-3 pl-4">
          <div>
            <VscOpenPreview />
          </div>
          <h2 className="pl-4">Flight Summary</h2>
        </div>
        <div>
          <div className="bg-white py-2 px-8 rounded-md">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                <div className="p-4 text-center">
                  <Image src={buddha} alt="airline_logo" />
                  <p className="text-[#2c2627] pt-2">Buddha Air</p>
                  <p className="text-[#2c2627]">MS - 352</p>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                <div className="p-4 text-center">
                  <span className="uppercase tracking-wider text-[#737373] text-sm font-medium">
                    New Delhi, IN
                  </span>
                  <br />
                  <span className="font-semibold text-2xl tracking-widest">
                    22:15
                  </span>
                  <br />
                  <span className="uppercase tracking-wider text-[#737373] text-xs font-medium">
                    Mon, 15 Jan 2024
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                <div className="p-4 text-center">
                  <span className="text-[#2c2627] tracking-wider">2h 10m</span>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <span className="text-[#2c2627] tracking-wider">
                    non stop
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                <div className="p-4 text-center">
                  <span className="uppercase tracking-wider text-[#737373] text-sm font-medium">
                    Mumbai, IN
                  </span>
                  <br />
                  <span className="font-semibold text-2xl tracking-widest">
                    00:25
                  </span>
                  <br />
                  <span className="uppercase tracking-wider text-[#737373] text-xs font-medium">
                    Tue, 16 Jan 2024
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-4">
                <div className="p-4 text-center">
                  <span className="text-primary text-2xl font-semibold tracking-wider">
                    NRS.
                  </span>
                  <span className="text-primary text-2xl font-semibold tracking-wider">
                    50000
                  </span>
                </div>
              </div>
            </div>

            {/* ------------  navs and tabs ------------ */}

          

          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
