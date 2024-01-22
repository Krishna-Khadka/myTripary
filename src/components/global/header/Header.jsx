"use client";
import { useState } from "react";
import Logo from "../../../../public/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="border-b">
      <nav
        className="flex flex-row justify-between px-4 md:px-16 py-8 pb-3 pb-3 relative "
        style={{ height: "110px" }}
      >
        <div className="w-32  md:w-44">
          <img
            className="w-full"
            src="https://blog.mytripary.com/wp-content/uploads/2022/09/logo-old.png"
            alt="Logo"
          />
        </div>
        <div
          className={`absolute md:static right-0 top-0 md:static text-white md:text-black md:bg-white py-5  md:py-0 pr-5 md:pr-0  ${
            toggleNav ? "bg-primary" : "bg-white"
          }`}
        >
          <button
            onClick={() => setToggleNav(!toggleNav)}
            className={`md:hidden text-4xl  ${
              toggleNav ? "hidden" : "block"
            } text-black`}
          >
            <RxHamburgerMenu />
          </button>
          <ul
            className={`flex flex-col md:flex-row justify-start space-y-8 md:space-x-10 space-y-5 md:space-y-0  md:flex h-screen pl-10 md:pl-0  ${
              toggleNav ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => setToggleNav(false)}
              style={{ display: "flex", justifyContent: "center" }}
              className={`text-4xl text-center  text-white md:hidden ${
                toggleNav ? "block" : "hidden"
              }`}
            >
              <IoClose />
            </button>

            <li>
              <a
                className=" px-10 py-2 border md:border-collapse  rounded-md text-white bg-primary hover:bg-secondary ease-in duration-150"
                href=""
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="border px-10 py-2 rounded-md text-white md:text-black hover:bg-secondary hover:text-white ease-in duration-150"
                href=""
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
