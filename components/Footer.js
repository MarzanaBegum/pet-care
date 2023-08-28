import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-around w-full p-20 bg-black h-1/2 md:flex-row">
        <div className="">
          <ul>
            <p className="pb-6 text-3xl text-white text-bold">
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
            <p className="pb-4 text-2xl font-bold text-white ">Platform</p>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Features
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Integration
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Telemedicine
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-white ">Solutions</p>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Independent Practices
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Corporate Groups
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Smart Forms
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-white ">Support</p>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              Contact
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-100 cursor-pointer hover:text-orange-500">
              FAQ&apos;s
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center bg-black">
        <h2 className="text-sm text-gray-100 text-semibold">
          Copyright {new Date().getFullYear()} All Rights Reserved | Build with
          ❤️ by
          <span className="font-semibold cursor-pointer hover:text-orange-500">
            {" "}
            Streamline
          </span>
        </h2>
      </div>
    </>
  );
};

export default Footer;
