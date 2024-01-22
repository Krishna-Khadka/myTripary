"use client";

import { FaUserPlus } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const BookingForm = () => {
  return (
    <>
      <div>
        <div className="flex items-center bg-secondary text-white text-2xl font-semibold tracking-wider py-3 pl-4">
          <div>
            <FaUserPlus />
          </div>
          <h2 className="pl-4">Passenger Information (Primary Contact)</h2>
        </div>
        <div className="bg-white">
          <form>
            <div className="py-4 px-2">
              <div class="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <select
                    name="gender"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-5 focus:border-gray-50"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Rahul</option>
                  </select>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="first_name"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-4 focus:border-gray-50"
                    placeholder="First Name"
                  />
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="last_name"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-4 focus:border-gray-50"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="nationality"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-4 focus:border-gray-50"
                    placeholder="Nationality"
                  />
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="phone"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-4 focus:border-gray-50"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-4 focus:border-gray-50"
                    placeholder="Email Id"
                  />
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="flyer_number"
                    class="text-lg font-medium bg-gray-50 border border-gray-300 text-gray-900 rounded-md block w-full p-4 focus:border-gray-50"
                    placeholder="Flyer Number"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="flex items-center gap-4">
        <div>
          <FaUserPlus className="text-4xl text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary tracking-wider">
            Enter Traveller Details
          </h2>
        </div>
      </div>
      <div className="bg-white py-6 px-8 mt-4 rounded-md">
        <div>
          <div className="lg:flex">
            <div className="lg:w-3/12 md:w-1/2 sm:w-full text-lg tracking-wider text-center font-medium text-black mt-2">
              Contact Details
            </div>
            <div className="lg:w-9/12 md:w-1/2 sm:w-full">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Email Id"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="mt-4 pb-4">
                <p className="text-md text-gray-700">
                  Your booking details will be sent to this email address and
                  mobile number.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="lg:flex">
            <div className="lg:w-3/12 md:w-1/2 sm:w-full text-lg tracking-wider text-center font-medium text-black mt-2">
              Adult 1
            </div>
            <div className="lg:w-9/12 md:w-1/2 sm:w-full">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <select
                    id="select"
                    name="select"
                    class="w-full px-6 py-3 border-gray-400 focus:outline-none focus:border-blue-500"
                  >
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">Rahul</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-4 pb-4">
                <p className="text-gray-700">
                  <span className="font-medium text-lg">Important Note:</span>{" "}
                  Please ensure that the names of the passengers on the travel
                  documents is the same as on their government issued identity
                  proof.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-secondary text-white font-medium py-2 px-12 border border-white rounded">
            Continue
          </button>
        </div>
      </div> */}
    </>
  );
};

export default BookingForm;

{
  /* <div class="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:gap-4 gap-4">
            <div className="font-medium text-lg text-left">Contact Details</div>
            <div className="">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>
            <div className="">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Email Id"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Mobile Number"
              />
            </div>
          </div> */
}

{
  /* <div>
          <div className="flex items-center gap-4">
            <div className="font-medium text-lg text-left">Contact Details</div>
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Email Id"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>
              Your booking details will be sent to this email address and mobile
              number.
            </p>
          </div>
        </div> */
}
