import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { PRICES_PACKAGES } from "../../Constants/Prices";
import { useAnimation, useInView, motion } from "framer-motion";

const CardPrice = () => {
  const { innerWidth: Width } = window;
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
      <div className="max-w-screen overflow-x-hidden font-poppins">
        <div className="w-full py-[10rem] px-4 bg-white">
          <div className="flex justify-center mb-10 mt-[-4%]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl ">
              Our Packages
            </h2>
          </div>
          <p className="text-xl flex justify-center pb-20 text-center">
            Find your Package that fits your needs, weather your a new company
            or a Enterprise wee got you covered!
          </p>

          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8 mt-[3%]">
            {Width < 631 ? (
              <>
                {PRICES_PACKAGES.map((price, index) => (
                  <Card
                    key={index}
                    title={price.title}
                    price={price.price}
                    img={price.image}
                    items={price.items}
                    core={price.core}
                  />
                ))}
              </>
            ) : (
              <>
                {PRICES_PACKAGES.map((price, index) => (
                  <motion.div
                    key={index}
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, y: price.variants.hidden.val },
                      visible: { opacity: 1, y: price.variants.visible.val },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{
                      duration: price.variants.transition.duration,
                      delay: price.variants.transition.delay,
                    }}
                  >
                    <Card
                      key={index}
                      title={price.title}
                      price={price.price}
                      img={price.image}
                      items={price.items}
                      core={price.core}
                    />
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </>
  );
};

export default CardPrice;
