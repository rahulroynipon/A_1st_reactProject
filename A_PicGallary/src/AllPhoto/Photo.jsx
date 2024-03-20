import { useState, useCallback, useEffect } from "react";
import useData from "../hook/useData";

function Photo(props) {
  const AllData = useData(props.searchData);

  return (
    <>
      <h1
        className="mt-20 md:mx-6 py-3 col-span-2 md:col-span-3 font-semibold text-4xl
        px-5 mb-5 text-gray-700 capitalize
      "
      >
        {props.searchData} Photos
      </h1>
      <section
        className=" mx-5 md:mx-12 h-[90%] grid grid-cols-2 
      md:grid-cols-3 grid-flow-dense gap-5 transition-all duration-300"
      >
        {AllData.map((item, index) => (
          <section key={index} className="relative group">
            <img
              className="w-full h-full object-cover rounded"
              src={item["webformatURL"]}
              key={index}
              alt=""
            />

            <div
              className=" backdrop-blur opacity-0 group-hover:opacity-40 bg-gray-950
             absolute inset-0 transition-all duration-500"
            ></div>

            <div>
              <h1
                className="absolute hidden md:block bottom-5 left-3 text-xl opacity-0
               group-hover:opacity-100 text-white transition-all duration-500"
              >
                {item["user"]}
              </h1>
              <button
                className="absolute z-30 bottom-4 right-4 rounded px-3 py-2 opacity-0 group-hover:opacity-100 bg-stone-300 hover:bg-white transition-all duration-500
              "
              >
                <img
                  className="h-5 md:h-6"
                  src="./src/assets/download-minimalistic-svgrepo-com.svg"
                  alt=""
                />
              </button>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default Photo;
