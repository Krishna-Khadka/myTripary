"use client"

import React from "react";

import arrow from "../../../../public/logo/arow.png";
import Image from "next/image";

const Card = ({flightLogo, flightName, flightModel, departTime, departPlace, arrivalTime, arrivalPlace, duration, way, price}) => {
  return (
    <>
      <div className="rounded-lg transition-all duration-500 bg-white shadow-md hover:border-opacity-60 hover:shadow-lg m-6">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <Image src={flightLogo} alt="airline_logo" />
              <p className="text-[#2c2627] pt-2">{flightName}</p>
              <p className="text-[#2c2627]">{flightModel}</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <span className="font-semibold text-2xl tracking-widest">
                {departTime}
              </span>
              <br />
              <span className="uppercase tracking-wider text-[#737373] font-medium">
                {departPlace}
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <span className="text-[#2c2627] tracking-wider">{duration}</span>
              <div>
                <Image src={arrow} alt="arrow" />
              </div>
              <span className="text-[#2c2627] tracking-wider">{way}</span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <span className="font-semibold text-2xl tracking-widest">
                {arrivalTime}
              </span>
              <br />
              <span className="uppercase tracking-wider text-[#737373] font-medium">
                {arrivalPlace}
              </span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <span className="text-primary text-2xl font-semibold tracking-wider">
                NRS.
              </span>
              <span className="text-primary text-2xl font-semibold tracking-wider">
                {price}
              </span>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4">
            <div className="p-4 text-center">
              <button className="bg-primary hover:bg-secondary text-white font-semibold  py-2 px-6 border rounded-lg inline-block">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
