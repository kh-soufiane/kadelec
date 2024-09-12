import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
import Image1 from "../../assets/images/Testimonials/1.png";
import Image2 from "../../assets/images/Testimonials/2.jpg";
import Image3 from "../../assets/images/Testimonials/3.jpg";
import Image4 from "../../assets/images/Testimonials/4.jpg";

const Testimonial = () => {
  const { innerWidth: width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div className="overflow-x-hidden max-w-screen font-poppins">
        <section className="dark:bg-gray-100 dark:text-gray-800">
          {width < 631 ? (
            <>
              <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                  <div className="max-w-2xl mx-auto my-8 rounded bg-blue-100/10 p-6 space-y-4 shadow-md text-center xl:col-span-2 xl:text-left">
                    <h2 className="text-4xl font-bold">
                      What our customers say about us
                    </h2>
                    <p className="dark:text-gray-600">
                      Here are some reviews from our customers about their
                      experience with the services we provide.
                    </p>
                  </div>
                  <div className="p-6 xl:col-span-3">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid content-center gap-4">
                        <div className="p-6 rounded shadow-md bg-blue-200/60">
                          <p>
                            Excellent service from start to finish. The team
                            delivered outstanding results and was always
                            responsive. Highly recommend for top-notch digital
                            solutions!
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image1}
                              alt="image1"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-sm sm:text-lg font-semibold">
                                Sam Smith
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Marketing Manager
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-6 rounded shadow-md bg-blue-200/30">
                          <p>
                            Impressed by the professionalism and expertise of
                            this agency. They transformed our online presence
                            with creative and effective strategies. Great job!
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image2}
                              alt="image2"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                Ethan Wiliams
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Marketing Manager
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid content-center gap-4">
                        <div className="p-6 rounded shadow-md bg-blue-200/30">
                          <p>
                            The agency's work was top-tier, with noticeable
                            improvements in our digital performance. Their
                            dedication and expertise were clear throughout the
                            project.
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image3}
                              alt="image3"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                Olivia Johnson
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Shop Owner
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-6 rounded shadow-md bg-blue-200/60">
                          <p>
                            Fantastic experience! The team provided exceptional
                            service and delivered results that exceeded our
                            expectations. We'll definitely be back for more.
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image4}
                              alt="image4"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                Michael Anderson
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Sales Manager
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                  <motion.div
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 2, delay: 0.25 }}
                    className="max-w-2xl mx-auto my-8 rounded bg-blue-100/10 p-6 space-y-4 shadow-md text-center xl:col-span-2 xl:text-left"
                  >
                    <h2 className="text-4xl font-bold">
                      What our customers say about us
                    </h2>
                    <p className="dark:text-gray-600">
                      Here are some reviews from our customers about their
                      experience with the services we provide.
                    </p>
                  </motion.div>
                  <div className="p-6 xl:col-span-3">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid content-center gap-4">
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, x: -75, y: -30 },
                            visible: { opacity: 1, x: 0, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 1, delay: 0.25 }}
                          className="p-6 rounded shadow-md bg-blue-200/60"
                        >
                          <p>
                            Excellent service from start to finish. The team
                            delivered outstanding results and was always
                            responsive. Highly recommend for top-notch digital
                            solutions!
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image1}
                              alt="image1"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-sm sm:text-lg font-semibold">
                                Sam Smith
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Marketing Manager
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, x: -75, y: 30 },
                            visible: { opacity: 1, x: 0, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 1, delay: 0.25 }}
                          className="p-6 rounded shadow-md bg-blue-200/30"
                        >
                          <p>
                            Impressed by the professionalism and expertise of
                            this agency. They transformed our online presence
                            with creative and effective strategies. Great job!
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image2}
                              alt="image2"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                Ethan Wiliams
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Marketing Manager
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="grid content-center gap-4">
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, x: 75, y: -30 },
                            visible: { opacity: 1, x: 0, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 1, delay: 0.25 }}
                          className="p-6 rounded shadow-md bg-blue-200/30"
                        >
                          <p>
                            The agency's work was top-tier, with noticeable
                            improvements in our digital performance. Their
                            dedication and expertise were clear throughout the
                            project.
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image3}
                              alt="image3"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                Olivia Johnson
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Shop Owner
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, x: 75, y: 30 },
                            visible: { opacity: 1, x: 0, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 1, delay: 0.25 }}
                          className="p-6 rounded shadow-md bg-blue-200/60"
                        >
                          <p>
                            Fantastic experience! The team provided exceptional
                            service and delivered results that exceeded our
                            expectations. We'll definitely be back for more.
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                            <img
                              src={Image4}
                              alt="image4"
                              className="w-12 h-12 bg-center bg-cover rounded-full"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                Michael Anderson
                              </p>
                              <p className="text-sm dark:text-gray-600">
                                Sales Manager
                              </p>
                            </div>
                            <div className="flex">
                              <MdVerified
                                className="text-green-400 sm:ml-14"
                                size={width < 630 ? 30 : 40}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>

      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </>
  );
};

export default Testimonial;
