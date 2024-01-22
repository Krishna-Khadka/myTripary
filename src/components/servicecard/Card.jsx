"use client";

import React, { useState } from "react";
import "../../app/globals.css";

// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, subtitle, features }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div>
        <div
          className="service-card py-6 px-6 bg-white rounded-2xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div>
            <div>
              <div className="mb-[35px]">
                <FontAwesomeIcon
                  icon={icon}
                  style={{
                    fontSize: "60px",
                    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.5s ease-in-out",
                  }}
                  className=" text-primary"
                />
              </div>
            </div>
            <span className="text-[1rem] font-semibold capitalize text-gray-600">
              {subtitle}
            </span>
            <h2 className="text-2xl font-bold capitalize text-primary mt-[15px] mb-[25px]">
              {title}
            </h2>
          </div>
          <div className="service-list">
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  {feature.text}
                  <FontAwesomeIcon
                    icon={faCheck}
                    width={20}
                    className="text-black"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
