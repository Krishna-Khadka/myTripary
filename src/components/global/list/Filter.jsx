// "use state";

// import FilterCard from "./FilterCard";
// import { useState, useEffect } from "react";

// import buddha from "../../../../public/logo/buddha.png";
// import shree from "../../../../public/logo/shree.png";
// import yeti from "../../../../public/logo/yeti.png";


// const Filter = ({ flightData, onFilterChange }) => {
//   const airlineInfo = [
//     { id: "buddha", label: "buddha", image: buddha },
//     { id: "shree", label: "shree", image: shree },
//     { id: "yeti", label: "yeti", image: yeti },
//   ];

//   const [selectedFilters, setSelectedFilters] = useState({
//     airlines: [],
//     refundable: false,
//     nonRefundable: false,
//     cheapest: false,
//     fastest: false,
//   });

//   const handleFilterChange = (filterType, value) => {
//     setSelectedFilters((prevFilter) => ({
//       ...prevFilter,
//       [filterType]: value,
//     }));
//   };

//   const applyFilters = (flight) => {
//     const { airlines, refundable, nonRefundable, cheapest, fastest } =
//       selectedFilters;

//     const airlineFilter = airlines.length === 0 || airlines.includes(flight.id);
//     const refundableFilter = !refundable || flight.refundable;
//     const nonRefundableFilter = !nonRefundable || !flight.refundable;
//     const cheapestFilter =
//       !cheapest ||
//       flight.price === Math.min(...flightData.map((item) => item.price));
//     const fastestFilter =
//       !fastest ||
//       flight.duration ===
//         flightData.reduce((min, item) =>
//           parseInt(item.duration) < parseInt(min.duration) ? item : min
//         ).duration;

//     return (
//       airlineFilter &&
//       refundableFilter &&
//       nonRefundableFilter &&
//       cheapestFilter &&
//       fastestFilter
//     );
//   };

//   useEffect(() => {
//     const filteredFlights = flightData.filter(applyFilters);
//     onFilterChange(filteredFlights);
//   }, [selectedFilters, flightData, onFilterChange]);

//   return <FilterCard airlines={airlineInfo} />;
// };

// export default Filter;


import FilterCard from "./FilterCard";

import buddha from "../../../../public/logo/buddha.png"
import shree from "../../../../public/logo/shree.png";
import yeti from "../../../../public/logo/yeti.png";

const Filter = () => {
  const airlineInfo = [
    { id: "buddha", label: "buddha", image: buddha },
    { id: "shree", label: "shree", image: shree },
    { id: "yeti", label: "yeti", image: yeti },
  ];

  return <FilterCard airlines={airlineInfo}  />;
};

export default Filter;