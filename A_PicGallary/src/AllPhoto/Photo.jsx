import { useState, useCallback, useEffect } from "react";
import useData from "../hook/useData";

function Photo() {
  const [dataName, setDataName] = useState("nipa");
  const AllData = useData(dataName);

  return (
    <>
      <section
        className="border mx-3 h-[90%] grid grid-cols-2
      md:grid-cols-3 grid-flow-dense gap-5 transition-all duration-300"
      >
        {AllData.map((item, index) => (
          <img
            className="w-full h-full object-cover rounded"
            src={item["webformatURL"]}
            key={index}
            alt=""
          />
        ))}
      </section>
    </>
  );
}

export default Photo;
