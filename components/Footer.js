import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-1/2 w-full flex flex-col md:flex-row justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-bold text-white text-3xl pb-6">
              Pet <span className="text-orange-500">Care</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl text-white cursor-pointer hover:text-orange-500" />
              <FaTwitter className="text-2xl text-white cursor-pointer hover:text-orange-500" />
              <FaYoutube className="text-2xl text-white cursor-pointer hover:text-orange-500" />
              <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-orange-500" />
            </div>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <p className="font-bold text-2xl text-white pb-4 ">Platform</p>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Features
            </li>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Integration
            </li>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Telemedicine
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <p className="font-bold text-2xl text-white pb-4 ">Solutions</p>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Independent Practices
            </li>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Corporate Groups
            </li>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Smart Forms
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <p className="font-bold text-2xl text-white pb-4 ">Support</p>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              Contact
            </li>
            <li className="text-gray-100 font-semibold text-sm pb-2 cursor-pointer hover:text-orange-500">
              FAQ&apos;s
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-black">
        <h2 className="text-sm text-semibold text-gray-100">
          Copyright {new Date().getFullYear()} All Rights Reserved | Build with
          ❤️ by
          <span className="hover:text-orange-500 font-semibold cursor-pointer">
            {" "}
            Streamline
          </span>
        </h2>
      </div>
    </>
  );
};

export default Footer;
