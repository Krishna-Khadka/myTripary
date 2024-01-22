// import React from "react";

// const Hero = () => {
//   return (
//     <div>
//       <div className="h-screen bg-[url(https://travio.smartdemowp.com/wp-content/uploads/2021/01/banner-1.jpg)] bg-no-repeat">
//         <div className="flex flex-col justify-center  items-center h-full p-4 ">
//           <p className="text-8xl text-white">Explore Your Travel</p>
//           <p className="text-wrap text-center text-4xl z-10 text-white">
//             Discover your next great adventure, become an explorer to get
//             started!
//           </p>
//         </div>
//       </div>
//       <div className="container mx-auto py-8  my-5 px-5 text-sm">
//         <p className="text-center text-4xl">
//           Search Your <span className="text-primary">Tour</span>
//         </p>
//         <div className="mt-10 grid grid-cols-12 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-x-4 gap-y-8">
//           <div className="col-span-12 lg:col-span-1">
//             <label
//               htmlFor="city"
//               className="block  md:text-lg font-medium leading-6 text-gray-900"
//             >
//               From Where
//             </label>
//             <div className="mt-2">
//               <div class="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autocomplete="country-name"
//                   class="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-12 lg:col-span-1">
//             <label
//               htmlFor="region"
//               className="block text-sm md:text-lg font-medium leading-6 text-gray-900"
//             >
//               To Where
//             </label>
//             <div className="mt-2">
//               <select
//                 id="country"
//                 name="country"
//                 autocomplete="country-name"
//                 class="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
//               >
//                 <option>United States</option>
//                 <option>Canada</option>
//                 <option>Mexico</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-span-12 lg:col-span-1">
//             <label
//               htmlFor="postal-code"
//               className="block text-sm md:text-lg font-medium leading-6 text-gray-900"
//             >
//               Return Date
//             </label>
//             <div className="mt-2">
//               <input
//                 type="date"
//                 name="postal-code"
//                 id="postal-code"
//                 autoComplete="postal-code"
//                 className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="col-span-12 lg:col-span-2">
//             <label
//               htmlFor="postal-code"
//               className="block text-sm md:text-lg font-medium leading-6 text-gray-900"
//             >
//               Adults
//             </label>
//             <div className="mt-2">
//               <input
//                 type="number"
//                 name="postal-code"
//                 id="postal-code"
//                 autoComplete="postal-code"
//                 className="pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="col-span-12 lg:col-span-6">
//             <label
//               htmlFor="postal-code"
//               className="block text-sm md:text-lg font-medium leading-6 text-gray-900"
//             >
//               Children
//             </label>
//             <div className="mt-2">
//               <input
//                 type="number"
//                 name="postal-code"
//                 id="postal-code"
//                 autoComplete="postal-code"
//                 className=" pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="col-span-12 lg:col-span-12 ">
//             <div className="mt-2">
//               <a href="">
//                 <button className=" w-full  px-10 py-2 border md:border-collapse  rounded-md text-white bg-primary hover:bg-secondary ease-in duration-150">
//                   Search
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import flightImage from "../../../../public/images/flight.jpg";

import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        {/* Using the Image component within a container */}
        <div className="hero-bg h-96 relative">
          {/* Image */}
          <Image
            src={flightImage}
            alt="Flight Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          {/* Overlay using ::before pseudo-element */}
          <div className="overlay absolute inset-0 bg-gradient-to-r from-transparent to-[#4857bc]"></div>
        </div>
        
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-wider">
            Best Flight Booking Experience
          </h1>
          <p className="text-lg sm:text-xl md:text-xl font-medium tracking-wider py-2">
            We have the perfect flight deal exclusively for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
