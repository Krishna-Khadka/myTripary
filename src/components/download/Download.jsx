"use client";

import Image from "next/image";
import React from "react";

import app from "../../../public/images/app.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const Download = () => {
  return (
    <>
      {/* <div className="w-full pt-16 bg-gradient">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="text-white">
              <h2 className="text-5xl font-medium">Download MyTripary App</h2>
              <p className="my-3 text-lg">
                Discover flight deals exclusively in the app. Download today to
                stay connected for the best deals.
              </p>
              <div className="flex gap-6">
                <button class="bg-transparent  text-white font-normal py-2 px-6 border border-white rounded">
                  <FontAwesomeIcon icon={faGooglePlay} className="pr-2" />
                  Google Store
                </button>
                <button class="bg-transparent  text-white font-normal  py-2 px-6 border border-white rounded">
                  <FontAwesomeIcon icon={faApple} className="pr-2" />
                  Apple Store
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <Image src={app} alt="app_demo" width={250} className="block" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full pt-16 pb-16 md:pb-0 bg-gradient">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full lg:pr-8">
              <div className="text-white">
                <h2 className="text-4xl lg:text-5xl font-medium">
                  Download MyTripary App
                </h2>
                <p className="my-3 text-lg">
                  Discover flight deals exclusively in the app. Download today
                  to stay connected for the best deals.
                </p>
                <div className="flex flex-col lg:flex-row gap-6">
                  <button className="bg-transparent text-white font-normal py-2 px-6 border border-white rounded">
                    <FontAwesomeIcon icon={faGooglePlay} className="pr-2" />
                    Google Store
                  </button>
                  <button className="bg-transparent text-white font-normal py-2 px-6 border border-white rounded mt-2 lg:mt-0">
                    <FontAwesomeIcon icon={faApple} className="pr-2" />
                    Apple Store
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0 hidden md:block">
              <Image
                src={app}
                alt="app_demo"
                width={250}
                className="block mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
