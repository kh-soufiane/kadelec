import "./Hero.css";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/heroImage.jpg";
import Stars from "../../assets/images/stars.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-screen overflow-x-hidden font-poppins ">
      <div>
        <div className="relative bg-[#e0e0e0] pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
          <div className="container mx-auto">
            <div className="mr-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-5/12">
                <div className="hero-content">
                  <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600 mb-5  font-bold !leading-[1.208] dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl text-xl">
                      Here you can <br />
                      <span className="sm:text-8xl text-6xl">
                        Level Up Your Business
                      </span>
                    </h1>
                    <p className="mb-8 max-w-[480px] sm:text-base text-sm text-body-color dark:text-dark-6">
                      Welcome and thank you for taking your time to take a look
                      at our solutions, wee can ensure you that wee will take
                      your Business to the next level, so hang in tight and lets
                      Level UP!
                    </p>
                  </motion.div>

                  <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -75 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <ul className="flex flex-wrap items-center gap-8 hero-button">
                      <li>
                        <Link
                          to="/"
                          className="inline-flex items-center justify-center rounded-md bg-blue-400 px-6 py-4 text-center text-base font-medium text-white hover:bg-blue-500 lg:px-7"
                        >
                          Get Started
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="border rounded-lg ml-2  hover:border-blue-400 hover:bg-blue-400/10 nav-buttons inline-flex items-center justify-center px-6 py-4 pl-10 pr-10 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.5, delay: 0.25 }}
                    className="clients pt-16"
                  >
                    <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                      Some Of Our Clients
                      <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                    </h6>

                    <div className="flex items-center space-x-4">
                      <SingleImage
                        href="#"
                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                      />

                      <SingleImage
                        href="#"
                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                      />

                      <SingleImage
                        href="#"
                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                  <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                      hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="relative z-10 inline-block pt-11 lg:pt-0"
                  >
                    <img
                      src={HeroImage}
                      alt="hero"
                      className="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[5%]"
                    />
                    <img
                      src={Stars}
                      alt="stars"
                      className="z-20 w-28 absolute mt-[-102%] right-[-5%] opacity-70 hover:opacity-100"
                    />
                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};
