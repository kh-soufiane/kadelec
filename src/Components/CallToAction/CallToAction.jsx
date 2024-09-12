import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CallToAction = () => {
  const { innerwidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControllers = useAnimation(isInView);

  useEffect(() => {
    if (isInView) {
      mainControllers.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <section className="py-20 lg:py-[120px] bg-[#e0e0e0] dark:bg-dark font-poppins">
        <div className="container mx-auto">
          <div className="relative z-10 overflow-x-hidden rounded bg-blue-500 py-12 px-8 md:p-[70px]">
            <div className="flex flex-wrap items-center -mx-4">
              <motion.div
                ref={ref}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -75 },
                }}
                initial="hidden"
                animate={mainControllers}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-full px-4 lg:w-1/2"
              >
                <span className="block mb-4 text-base font-medium text-white">
                  Find the perfect team to realise your business Gols!!
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  Get started Today and let us{" "}
                  <br className="xs:block hidden" />
                  Take Care of the{" "}
                  <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500">
                    Rest!
                  </span>
                </h2>
              </motion.div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 75 },
                    }}
                    initial="hidden"
                    animate={mainControllers}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <button className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-gray-300 text-primary px-7">
                      Contact us
                    </button>
                  </motion.div>
                  <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 75 },
                    }}
                    initial="hidden"
                    animate={mainControllers}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <button className="inline-flex py-3 my-1 text-base font-medium text-white transition rounded-md bg-gray-900 px-7 hover:bg-gray-900/70">
                      Services
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </>
  );
};

export default CallToAction;
