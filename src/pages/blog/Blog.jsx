import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div className="w-full bg-[#FBF9F2] py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              {/* Content for the larger column (8/12 on large screens) */}
              <BlogCard />
            </div>
            <div className="col-span-12 lg:col-span-4">
              {/* Content for the smaller column (4/12 on large screens) */}
              <div className="bg-green-300 p-4">Smaller Column</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
