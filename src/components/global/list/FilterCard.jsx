// "use client";

// import { useState } from "react";

// import buddha from "../../../../public/logo/buddha.png";
// import shree from "../../../../public/logo/shree.png";
// import yeti from "../../../../public/logo/yeti.png";
// import Image from "next/image";

// const FilterCard = ({ airlines }) => {
//   const airlineCheckInital = {};
//   airlines.forEach((airline) => {
//     airlineCheckInital[airline.id] = false;
//   });

//   const [airlineChecked, setAirlineChecked] = useState(airlineCheckInital);
//   const [refundableChecked, setRefundableChecked] = useState(false);
//   const [nonRefundableChecked, setNonRefundableChecked] = useState(false);
//   const [cheapestChecked, setCheapestChecked] = useState(false);
//   const [fastestChecked, setFastestChecked] = useState(false);

//   const handleAirlineChange = (airlineId) => {
//     setAirlineChecked((prevState) => ({
//       ...prevState,
//       [airlineId]: !prevState[airlineId],
//     }));
//   };

//   const handleRefundableChange = () => {
//     setRefundableChecked(!refundableChecked);
//   };

//   const handleNonRefundableChange = () => {
//     setNonRefundableChecked(!nonRefundableChecked);
//   };

//   const handleCheapestChange = () => {
//     setCheapestChecked(!cheapestChecked);
//   };

//   const handleFastestChange = () => {
//     setFastestChecked(!fastestChecked);
//   };

//   return (
//     <>
//       <div className="rounded-lg transition-all duration-500 bg-white shadow-md hover:border-opacity-60 hover:shadow-lg m-6">
//         <div className="px-4 pt-4">
//           <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
//             <h3 className="font-medium tracking-wider capitalize">Flights</h3>
//             <span className="font-normal text-sm capitalize tracking-wider py-2">
//               showing 100 flights
//             </span>
//           </div>
//           <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
//             <h3 className="font-semibold tracking-wider capitalize">
//               preferred airlines
//             </h3>
//             <div className="flex flex-col">
//               {airlines.map((airline) => (
//                 <div key={airline.id} className="py-3">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="h-5 w-5 border-2 focus:outline:none "
//                       id={airline.id}
//                       checked={airlineChecked[airline.id]}
//                       onChange={() => handleAirlineChange(airline.id)}
//                     />
//                     <label
//                       htmlFor={airline.id}
//                       className="ml-2 text-[2c2627] flex items-center"
//                     >
//                       <Image src={airline.image} width={100} />
//                     </label>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
//             <h3 className="font-semibold tracking-wider capitalize">Type</h3>
//             <div className="flex flex-col">
//               <div className="py-3">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="h-5 w-5 border-2 focus:outline:none "
//                     id="paymentType"
//                     checked={refundableChecked}
//                     onChange={handleRefundableChange}
//                   />
//                   <label htmlFor="paymentType" className="ml-2 text-[2c2627]">
//                     <p>Refundable</p>
//                   </label>
//                 </div>
//               </div>
//               <div className="py-3">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="h-5 w-5 border-2 focus:outline:none "
//                     id="paymentType"
//                     checked={nonRefundableChecked}
//                     onChange={handleNonRefundableChange}
//                   />
//                   <label htmlFor="paymentType" className="ml-2 text-[2c2627]">
//                     <p>Non-Rundable</p>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
//             <h3 className="font-semibold tracking-wider capitalize">Sort By</h3>
//             <div className="flex flex-col">
//               <div className="py-3">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="h-5 w-5 border-2 focus:outline:none "
//                     id="sortByPrice"
//                     checked={cheapestChecked}
//                     onChange={handleCheapestChange}
//                   />
//                   <label htmlFor="sortByPrice" className="ml-2 text-[2c2627]">
//                     <p>Cheapest</p>
//                   </label>
//                 </div>
//               </div>
//               <div className="py-3">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="h-5 w-5 border-2 focus:outline:none "
//                     id="sortByDuration"
//                     checked={fastestChecked}
//                     onChange={handleFastestChange}
//                   />
//                   <label
//                     htmlFor="sortByDuration"
//                     className="ml-2 text-[2c2627]"
//                   >
//                     <p>Fastest</p>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FilterCard;

"use client";

import { useState } from "react";

import buddha from "../../../../public/logo/buddha.png";
import shree from "../../../../public/logo/shree.png";
import yeti from "../../../../public/logo/yeti.png";
import Image from "next/image";

const FilterCard = ({ airlines }) => {
  const airlineCheckInital = {};
  airlines.forEach((airline) => {
    airlineCheckInital[airline.id] = false;
  });

  const [airlineChecked, setAirlineChecked] = useState(airlineCheckInital);
  const [refundableChecked, setRefundableChecked] = useState(false);
  const [nonRefundableChecked, setNonRefundableChecked] = useState(false);
  const [cheapestChecked, setCheapestChecked] = useState(false);
  const [fastestChecked, setFastestChecked] = useState(false);

  const handleAirlineChange = (airlineId) => {
    setAirlineChecked((prevState) => ({
      ...prevState,
      [airlineId]: !prevState[airlineId],
    }));
  };

  const handleRefundableChange = () => {
    setRefundableChecked(!refundableChecked);
  };

  const handleNonRefundableChange = () => {
    setNonRefundableChecked(!nonRefundableChecked);
  };

  const handleCheapestChange = () => {
    setCheapestChecked(!cheapestChecked);
  };

  const handleFastestChange = () => {
    setFastestChecked(!fastestChecked);
  };

  return (
    <>
      <div className="rounded-lg transition-all duration-500 bg-white shadow-md hover:border-opacity-60 hover:shadow-lg m-6">
        <div className="px-4 pt-4">
          <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
            <h3 className="font-medium tracking-wider capitalize">Flights</h3>
            <span className="font-normal text-sm capitalize tracking-wider py-2">
              showing 100 flights
            </span>
          </div>
          <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
            <h3 className="font-semibold tracking-wider capitalize">
              preferred airlines
            </h3>
            <div className="flex flex-col">
              {airlines.map((airline) => (
                <div key={airline.id} className="py-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-5 w-5 border-2 focus:outline:none "
                      id={airline.id}
                      checked={airlineChecked[airline.id]}
                      onChange={() => handleAirlineChange(airline.id)}
                    />
                    <label
                      htmlFor={airline.id}
                      className="ml-2 text-[2c2627] flex items-center"
                    >
                      <Image src={airline.image} width={100} />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
            <h3 className="font-semibold tracking-wider capitalize">Type</h3>
            <div className="flex flex-col">
              <div className="py-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 border-2 focus:outline:none "
                    id="paymentType"
                    checked={refundableChecked}
                    onChange={handleRefundableChange}
                  />
                  <label htmlFor="paymentType" className="ml-2 text-[2c2627]">
                    <p>Refundable</p>
                  </label>
                </div>
              </div>
              <div className="py-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 border-2 focus:outline:none "
                    id="paymentType"
                    checked={nonRefundableChecked}
                    onChange={handleNonRefundableChange}
                  />
                  <label htmlFor="paymentType" className="ml-2 text-[2c2627]">
                    <p>Non-Rundable</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-3 mb-3 border-b border-[1px solid rgba(96,187,70,.2509803922)]">
            <h3 className="font-semibold tracking-wider capitalize">Sort By</h3>
            <div className="flex flex-col">
              <div className="py-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 border-2 focus:outline:none "
                    id="sortByPrice"
                    checked={cheapestChecked}
                    onChange={handleCheapestChange}
                  />
                  <label htmlFor="sortByPrice" className="ml-2 text-[2c2627]">
                    <p>Cheapest</p>
                  </label>
                </div>
              </div>
              <div className="py-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-5 w-5 border-2 focus:outline:none "
                    id="sortByDuration"
                    checked={fastestChecked}
                    onChange={handleFastestChange}
                  />
                  <label
                    htmlFor="sortByDuration"
                    className="ml-2 text-[2c2627]"
                  >
                    <p>Fastest</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
