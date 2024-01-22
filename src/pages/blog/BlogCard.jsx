"use client";

import Image from "next/image";
import React from "react";

import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";

const BlogCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="relative blogImage mb-8 overflow-hidden rounded-md group mx-2 sm:mx-0">
          <div className="absolute rounded-md"></div>
            <Image src={blog1} alt="blog_image" width={380} height={280} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="blogContent">
            <div className="mb-4">
              <a
                href="#"
                className="relative inline-block bg-[#f0f1f2] text-[#808080] text-lg font-medium text-center px-[20px] py-[2px] rounded-3xl hover:bg-primary hover:text-white transition-all duration-700"
              >
                Offers
              </a>
            </div>
            <h3 className="leading-10 text-3xl font-bold text-primary mb-4 transition-colors duration-500 hover:text-[#be1e2d]">
              <a href="#">New Year Mega Sale! Upto 20% off</a>
            </h3>
            <ul className="mb-4">
              <li className="inline-block text-base text-[#808080] pr-2">
                <span className="font-medium">By </span>
                <a href="#" className="text-primary font-medium capitalize inline-block">Admin</a>
              </li>
              <li className="inline-block text-base text-[#808080]">
                -<time className="pl-2">April 1, 2024</time>
              </li>
            </ul>
            <p className="mb-6 text-[#808080] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              quam laboriosam. Quidem tenetur ut sequi?
            </p>
          </div>
        </div>
        <div>
          <div className="relative blogImage mb-8 group">
          <div className="absolute rounded-md"></div>
            <Image src={blog2} alt="blog_image" width={380} height={280} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="blogContent">
            <div className="mb-4">
              <a
                href="#"
                className="relative inline-block bg-[#f0f1f2] text-[#808080] text-lg font-medium text-center px-[20px] py-[2px] rounded-3xl hover:bg-primary hover:text-white transition-all duration-700"
              >
                Offers
              </a>
            </div>
            <h3 className="leading-10 text-3xl font-bold text-primary mb-4 transition-colors duration-500 hover:text-[#be1e2d]">
              <a href="#">New Year Mega Sale! Upto 20% off</a>
            </h3>
            <ul className="mb-4">
              <li className="inline-block text-base text-[#808080] pr-2">
                <span className="font-medium">By </span>
                <a href="#" className="text-primary font-medium capitalize inline-block">Admin</a>
              </li>
              <li className="inline-block text-base text-[#808080]">
                -<time className="pl-2">April 1, 2024</time>
              </li>
            </ul>
            <p className="mb-6 text-[#808080] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              quam laboriosam. Quidem tenetur ut sequi?
            </p>
          </div>
        </div>
        <div>
          <div className="relative blogImage mb-8 group">
          <div className="absolute rounded-md"></div>
            <Image src={blog3} alt="blog_image" width={380} height={280} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="blogContent">
            <div className="mb-4">
              <a
                href="#"
                className="relative inline-block bg-[#f0f1f2] text-[#808080] text-lg font-medium text-center px-[20px] py-[2px] rounded-3xl hover:bg-primary hover:text-white transition-all duration-700"
              >
                Offers
              </a>
            </div>
            <h3 className="leading-10 text-3xl font-bold text-primary mb-4 transition-colors duration-500 hover:text-[#be1e2d]">
              <a href="#">New Year Mega Sale! Upto 20% off</a>
            </h3>
            <ul className="mb-4">
              <li className="inline-block text-base text-[#808080] pr-2">
                <span className="font-medium">By </span>
                <a href="#" className="text-primary font-medium capitalize inline-block">Admin</a>
              </li>
              <li className="inline-block text-base text-[#808080]">
                -<time className="pl-2">April 1, 2024</time>
              </li>
            </ul>
            <p className="mb-6 text-[#808080] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              quam laboriosam. Quidem tenetur ut sequi?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
