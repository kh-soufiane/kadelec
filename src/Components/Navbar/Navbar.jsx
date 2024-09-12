import Icon from "../../assets/images/level.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useTheme } from "../../Common/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const themeIcon =
    theme === "light" ? (
      <IoSunnySharp onClick={toggleTheme} size={20} />
    ) : (
      <IoMoonSharp onClick={toggleTheme} size={20} />
    );

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-gray-900 fixed sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400 sm:h-auto">
        {/* Desktop Nav */}
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={Icon}
              alt="icon"
              className="w-[35px] pt-2 pl-2 sm:block sm:w-[35px] sm:-h-[35] sm:pl-0 sm:pt-0"
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              Kadelec Solutions
            </span>
          </Link>

          <div className="flex text-white ">
            <ul className="sm:flex justify-center gap-6 hidden">
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white rounded-xl mr-2 hover:bg-blue-500 nav-buttons"
            >
              Get Started
            </button>
            <button className="text-white border font-medium rounded-lg ml-2 text-sm px-4 hover:bg-blue-300/10 nav-buttons">
              Pricing
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu className="mt-2 mr-2 text-white/70" size={30} />
            </button>
          </div>
          <div className="text-white hover:text-blue-400 cursor-pointer nav-theme">
            {theme == "light" ? (
              <IoSunnySharp onClick={toggleTheme} size={25} className="" />
            ) : (
              <IoMoonSharp onClick={toggleTheme} size={25} />
            )}
          </div>
        </div>

        {/* Desktop nav ends */}

        <div className={`${open ? null : "hidden"} sm:hidden h-[17rem]`}>
          <ul>
            <li className="text-white hover:text-blue-400 font-semibold cursor-pointer pl-8 pt-6 flex items-center gap-4">
              <IoHomeOutline /> <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold cursor-pointer pl-8 pt-6 flex items-center gap-4">
              <IoIosInformationCircleOutline />
              <Link to="/about">About</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold cursor-pointer pl-8 pt-6 flex items-center gap-4">
              <GrServices />
              <Link to="/services">Services</Link>
            </li>
            <li className="text-white hover:text-blue-400 font-semibold cursor-pointer pl-8 pt-6 flex items-center gap-4">
              <GrContact />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Theme Section */}
          <div className="bg-gray-200/30 h-[1px] w-[93%] ml-4 mt-4"></div>
          <div className="text-white  pt-4 hover:text-blue-400 cursor-pointer flex justify-center gap-12">
            <ul className="flex justify-center gap-4">
              <li>
                <button
                  type="button"
                  className="bg-blue-600 px-2 py-1 text-xs text-white rounded-xl mr-2 hover:bg-blue-500 "
                >
                  Get Started
                </button>
              </li>
              <li>
                <button className="text-xs text-white border font-medium rounded-lg ml-2  px-2 py-1 hover:bg-blue-300/10">
                  Pricing
                </button>
              </li>
            </ul>
            <div className="mt-1 theme-icon">{themeIcon}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
