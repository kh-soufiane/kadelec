import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <div
        className="sm:flex justify-between py-10 px-8
       grid bg-gray-900"
      >
        <div className="text-white lg:pr-96 md:pr-36">
          <h1 className="w-full text-3xl font-bold cursor-pointer text-blue-400">
            Kadelec Solutions
          </h1>
          <p className="py-4">
            Welcome to LevelUp Solutions, where we transform raw information
            into actionable insights. With cutting-edge technology and a team of
            skilled analysts, we specialize in deciphering complex data sets to
            uncover valuable patterns and trends with which wee take your
            business to the Next Level.
          </p>
          <div className="flex md:w-[75%] justify-start gap-4 my-6 text-blue-200">
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaInstagram size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
          <div>
            <h1 className="sm:w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py2">
              Want tips & Tricks to optimize your Work flow?
            </h1>
            <p className="sm:pl-16 text-center sm:ml-[-9%] pb-4">
              Sign up to our newsletter and stay up to date.
            </p>
          </div>
          <div className="my-4 ">
            <div className="justify-center flex">
              <input
                className="placeholder:pl-2 flex mr-[-50px] h-10 sm:w-[50%] sm:h--[35%] mx-auto rounded-md text-black"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-blue-400 mx-auto w-28 hover:bg-blue-500 rounded-md font-medium">
                Sign Up
              </button>
            </div>
            <p className="text-sm mx-10 flex-col text-center pt-4">
              Wee care about the protection of your data. Read our{" "}
              <span className="underline cursor-pointer text-blue-400">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" sm:mx-auto  pt-10 pb-8 px-24 sm:grid flex-row lg:grid-cols-3 w-screen gap-8 text-gray-300 bg-gray-800">
        <div className="lg:col-span-3 flex justify-between max-w-screen ml-[-21%] sm:ml-0 sm:mb-0 mb-4">
          <div className="pr-4">
            <h6 className="font-medium text-blue-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Analytics
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Marketing
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Commerce
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Insights
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-blue-400">Support</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Pricing
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Documentation
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Guides
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">API</li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-blue-400">Company</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                About
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Blog
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Jobs
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Careers
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Press
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h6 className="font-medium text-blue-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Claim
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Policy
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Terms
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-gray-100/20 w-[100rem] ml-[-20rem]"></div>
        <p className="pt-4 text-sm flex justify-center text-center text-gray-200/40">
          All Rights Reserved 2024 - Kadelec Solutions
        </p>
      </div>
    </div>
  );
};

export default Footer;
