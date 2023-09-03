import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-blue-900 px-2 py-8 md:px-4 lg:px-8 xl:px-10 2xl:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-around text-white">
        {/* Contact Item 1: Phone */}
        <div className="w-full md:w-1/3 flex items-center space-x-4 mb-6 md:mb-0">
          <LuPhoneCall className="md:text-3xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Call us:</p>
            <div className="flex flex-col">
              <a href="tel:8805754219" className="hover:text-black">
                9623161432
              </a>
            </div>
          </div>
        </div>

        {/* Contact Item 2: Email */}
        <div className="w-full md:w-1/3 flex items-center space-x-4 mb-6 md:mb-0">
          <AiOutlineMail className="md:text-5xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Email:</p>
            <a
              href="mailto:Contact@rspatilpharma.com"
              className="hover:text-black"
            >
              dnynankurdms@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Item 3: Location */}
        <div className="w-full md:w-1/3 flex items-center space-x-4">
          <CiLocationOn className="md:text-5xl text-3xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Visit us:</p>
            <p className="break-words">
              (Pathrot) Dist:Amravati Tq:Achalpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
