// "use client";

// import React, {useState} from "react";
// import Card from "./Card";
// import Filter from "./Filter";
// import buddha from "../../../../public/logo/buddha.png";
// import shree from "../../../../public/logo/shree.png";
// import yeti from "../../../../public/logo/yeti.png";
// import { CardTite } from "./CardTite";
// const FlightList = () => {
//   const initialFlightData = [
//     {
//       flightLogo: shree,
//       flightName: "Shree Airline",
//       flightModel: "QV12",
//       departTime: "10:00",
//       departPlace: "Kathmandu",
//       arrivalTime: "11:00",
//       arrivalPlace: "Pokhara",
//       duration: "01h 00m",
//       way: "Nonstop",
//       price: "400",
//     },
//     {
//       flightLogo: buddha,
//       flightName: "Buddha Air",
//       flightModel: "AS12",
//       departTime: "12:00",
//       departPlace: "Pokhara",
//       arrivalTime: "13:00",
//       arrivalPlace: "Kathmandu",
//       duration: "01h 00m",
//       way: "Nonstop",
//       price: "500",
//     },
//     {
//       flightLogo: yeti,
//       flightName: "Yeti Air",
//       flightModel: "AS12",
//       departTime: "14:00",
//       departPlace: "Kathmandu",
//       arrivalTime: "16:30",
//       arrivalPlace: "Biratnagar",
//       duration: "02h 30m",
//       way: "Nonstop",
//       price: "1000",
//     },
//     {
//       flightLogo: shree,
//       flightName: "Shree Airline",
//       flightModel: "QV12",
//       departTime: "16:00",
//       departPlace: "Biratnagar",
//       arrivalTime: "19:00",
//       arrivalPlace: "Pokhara",
//       duration: "03h 00m",
//       way: "Nonstop",
//       price: "400",
//     },
//     {
//       flightLogo: buddha,
//       flightName: "Buddha Air",
//       flightModel: "QV12",
//       departTime: "10:00",
//       departPlace: "Kathmandu",
//       arrivalTime: "14:30",
//       arrivalPlace: "Mustang",
//       duration: "04h 30m",
//       way: "Nonstop",
//       price: "1500",
//     },
//     {
//       flightLogo: yeti,
//       flightName: "Yeti Air",
//       flightModel: "AS12",
//       departTime: "14:00",
//       departPlace: "Kathmandu",
//       arrivalTime: "16:30",
//       arrivalPlace: "Biratnagar",
//       duration: "02h 30m",
//       way: "Nonstop",
//       price: "1000",
//     },
//   ];

//   const [flightData, setFlightData] = useState(initialFlightData);
//   const [filteredFlights, setFilteredFlights] = useState(initialFlightData);

//   const hanleFilterChange = (filterData) => {
//     setFilteredFlights(filterData);
//   }

//   return (
//     <>
//       <div className="w-full bg-[#EBF2F2]">
//         <div className="container mx-auto px-4 md:px-0">
//           <div className="lg:flex">
//             <div className="lg:w-3/12 md:w-1/2 sm:w-full">
//               <Filter flightData={flightData} onFilterChange={hanleFilterChange} />
//             </div>
//             <div className="lg:w-9/12 md:w-1/2 sm:w-full">
//               <CardTite />
//               {flightData.map((flight, index) => (
//                 <Card key={index} {...flight} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FlightList;

"use client";

import React from "react";
import Card from "./Card";
import Filter from "./Filter";
import buddha from "../../../../public/logo/buddha.png";
import shree from "../../../../public/logo/shree.png";
import yeti from "../../../../public/logo/yeti.png";
import { CardTite } from "./CardTite";
const FlightList = () => {
  const flightData = [
    {
      flightLogo: shree,
      flightName: "Shree Airline",
      flightModel: "QV12",
      departTime: "10:00",
      departPlace: "Kathmandu",
      arrivalTime: "11:00",
      arrivalPlace: "Pokhara",
      duration: "01h 00m",
      way: "Nonstop",
      price: "400",
    },
    {
      flightLogo: buddha,
      flightName: "Buddha Air",
      flightModel: "AS12",
      departTime: "12:00",
      departPlace: "Pokhara",
      arrivalTime: "13:00",
      arrivalPlace: "Kathmandu",
      duration: "01h 00m",
      way: "Nonstop",
      price: "500",
    },
    {
      flightLogo: yeti,
      flightName: "Yeti Air",
      flightModel: "AS12",
      departTime: "14:00",
      departPlace: "Kathmandu",
      arrivalTime: "16:30",
      arrivalPlace: "Biratnagar",
      duration: "02h 30m",
      way: "Nonstop",
      price: "1000",
    },
    {
      flightLogo: shree,
      flightName: "Shree Airline",
      flightModel: "QV12",
      departTime: "16:00",
      departPlace: "Biratnagar",
      arrivalTime: "19:00",
      arrivalPlace: "Pokhara",
      duration: "03h 00m",
      way: "Nonstop",
      price: "400",
    },
    {
      flightLogo: buddha,
      flightName: "Buddha Air",
      flightModel: "QV12",
      departTime: "10:00",
      departPlace: "Kathmandu",
      arrivalTime: "14:30",
      arrivalPlace: "Mustang",
      duration: "04h 30m",
      way: "Nonstop",
      price: "1500",
    },
    {
      flightLogo: yeti,
      flightName: "Yeti Air",
      flightModel: "AS12",
      departTime: "14:00",
      departPlace: "Kathmandu",
      arrivalTime: "16:30",
      arrivalPlace: "Biratnagar",
      duration: "02h 30m",
      way: "Nonstop",
      price: "1000",
    },
  ];
  return (
    <>
      <div className="w-full bg-[#EBF2F2]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="lg:flex">
            <div className="lg:w-3/12 md:w-1/2 sm:w-full">
              <Filter />
            </div>
            <div className="lg:w-9/12 md:w-1/2 sm:w-full">
              <CardTite />
              {flightData.map((flight, index) => (
                <Card key={index} {...flight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightList;
