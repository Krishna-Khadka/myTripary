import React from "react";
import "../../../app/globals.css";
import Image from "next/image";

// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//image import
import logo from "../../../../public/logo.png";
import android from "../../../../public/android.png";
import ios from "../../../../public/ios.png";

const Footer = () => {
  return (
    <>
      <div className="w-full py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="md:pr-20 mx-4 md:mx-auto">
            <Image src={logo} width={200} />
            <div className="py-7">
              <h5 className="text-xl font-medium text-gray-800">
                Online to make your journey even more memorable access or meet
              </h5>
            </div>
            <div>
              <div>
                <ul className="flex gap-4 mt-4">
                  <li className="icon">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        width={13}
                        className=" text-white"
                      />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        width={13}
                        className=" text-white"
                      />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        width={13}
                        className=" text-white"
                      />
                    </a>
                  </li>
                  <li className="icon">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        width={13}
                        className=" text-white"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:pr-20 mx-4 md:mx-0">
            <h2 className="capitalize text-2xl font-semibold">useful links</h2>
            <div className="footer-link mt-5">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:pr-20 mx-4 md:mx-0">
            <h2 className="capitalize text-2xl font-semibold">services</h2>
            <div className="footer-link mt-5">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Flights
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Hotels
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Holidays
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.1rem] font-medium text-gray-800"
                  >
                    Bus
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:pr-20 mx-4 md:mx-0">
            <h2 className="capitalize text-2xl font-semibold">services</h2>
            <div className="footer-link mt-5">
              <ul>
                <li>
                  <a href="#">
                    <Image
                      src={android}
                      width={160}
                      alt="playstore_link_image"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={ios} width={160} alt="playstore_link_image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center justify-between mt-10">
          <div>
            <h5 className="text-[1.1rem] font-medium">
              ©2020 MyTripAry. All Rights Reserved.{" "}
            </h5>
          </div>
          {/* <div>
            <h5 className="text-[1.1rem] font-semibold">Tripary Group (P) Ltd. ,Kathmandu, Nepal </h5>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
