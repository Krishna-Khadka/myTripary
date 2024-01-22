"use client";

import React from "react";
import Card from "./Card";
import {
  faHeadset,
  faIndianRupee,
  faLock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = () => {
  const cardData = [
    {
      icon: faIndianRupee,
      title: "Reasonable Price",
      subtitle: "Service 01",
      features: [
        { text: "Early Bird Discounts" },
        { text: "Bundle and Save" },
        { text: "Off-Peak Travel" },
      ],
    },
    {
      icon: faHeadset,
      title: "24/7 Customer Support",
      subtitle: "Service 02",
      features: [
        { text: "Responsive customer service" },
        { text: "Assistance with booking" },
        { text: "Quick problem resolution" },
      ],
    },
    {
      icon: faLock,
      title: " Highly Secure",
      subtitle: "Service 03",
      features: [
        { text: "Responsive customer service" },
        { text: "Assistance with booking" },
        { text: "Quick problem resolution" },
      ],
    },
    {
      icon: faStar,
      title: "Huge Discount",
      subtitle: "Service 04",
      features: [
        { text: "Responsive customer service" },
        { text: "Assistance with booking" },
        { text: "Quick problem resolution" },
      ],
    },
  ];

  return (
    <>
      <div className="w-full bg-[#FBF9F2] py-16">
        <div className="container mx-auto">
          <div className="px-4 md:px-0">
            <span className="uppercase font-semibold text-primary text-sm tracking-widest">
              Why Tripary
            </span>
            <h2 className="text-[#21283F] text-3xl font-bold py-4">
              Our Great Flight Options
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
