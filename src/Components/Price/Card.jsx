import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Card = ({
  standOutBg,
  marginMiddle,
  buttonBg,
  title,
  price,
  img,
  items,
  core,
}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 ${
        core ? "bg-gray-900 text-white md:-my-3 mt-" : "bg-white"
      } ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
    >
      <img
        src={img}
        alt="image"
        className="w-20 mx-auto mt-[-3rem] bg-white rounded-md"
      />
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="py-2 mx-8 mb-8 flex justify-center font-bold text-3xl">
        {price}
      </p>
      <div className="text-center font-medium">
        {items.map((item, index) => (
          <p key={index} className="py-2 border-b mx-8 flex justify-between">
            {item.itemTitle}{" "}
            <BsFillCheckCircleFill
              className={`ml-2 my-auto ${
                item.itemStatus ? "text-green-500" : "text-green-300"
              }`}
            />
          </p>
        ))}
        <button
          className={`flex justify-center mx-auto w-[200px] rounded-md font-medium my-6 py-3 ${
            core
              ? "text-white border mt-20 text-sm hover:bg-blue-300/10"
              : "bg-gray-300 hover:bg-gray-500/50"
          }`}
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Card;
