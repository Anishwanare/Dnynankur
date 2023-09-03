import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa"; // Changed from "react-icons/rx" to "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import News from "./News";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="">
      <div>
        <News news="Teachers are like candles that light up the path of knowledge. As we celebrate Teacher's Day, we extend a warm welcome to our educators at DNYNANKUR. Thank you for guiding us towards a brighter future.from Dnyneshwar Sontakke" />
      </div>
      <div className="my-8 flex flex-row md:flex-row justify-between items-center h-20 uppercase px-10 fixed top-0 w-full z-20 bg-gradient-to-l from-[#FDBF01] to-[#C7DEFF]">
        <div className="md:mb-0 text-white">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-16 md:w-20" />{" "}
            {/* Removed srcSet="" */}
          </Link>
        </div>
        <div className="flex items-center justify-between text-4xl">
          <div
            className={`flex items-center justify-between cursor-pointer md:hidden`}
            onClick={onClickMenu}
          >
            {menu ? <FaTimes /> : <BiMenu />}{" "}
            {/* Changed from <RxCross1 /> to <FaTimes /> */}
          </div>
          <div
            className={`${
              menu ? "block" : "hidden"
            } md:flex mt-4 md:mt-0 md:relative z-50`}
          >
            <ul
              onClick={onClickMenu}
              className={`flex flex-col items-center h-screen md:h-0 whitespace-nowrap md:flex-row gap-8 md:gap-10 text-lg md:text-2xl font-semibold md:right-0 md:static absolute top-20 right-0 px-10 py-5 z-0 bg-gradient-to-r md:bg-none from-[#FDBF01] to-[#e7cd92]`}
            >
              <li>
                <Link to={"/"} className="active:text-white focus:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/NMMS"}
                  className="active:text-white focus:text-white"
                >
                  NMMS
                </Link>
              </li>
              <li>
                <Link
                  to={"/quiz"}
                  className="active:text-white focus:text-white"
                >
                  Test
                </Link>
              </li>
              {/* Uncomment and modify the login and signup links as needed */}
              {/* <li>
                <Link to={"/login"} className="active:text-white focus:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/signup"} className="active:text-white focus:text-white">
                  Sign Up
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
