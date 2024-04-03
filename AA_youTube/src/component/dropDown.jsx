// DropDown.js
import React, { useEffect, useRef, useState } from "react";
import dropIcon from "/src/assets/dropDown.svg";

function DropDown({ arr, getData }) {
  const btn = `px-1 pl-4 border border-gray-300 rounded outline-none focus:ring-1`;

  const optionTop = useRef(null);
  const dropMain = useRef(null);
  const [data, setData] = useState(arr[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      optionTop.current.scrollTop = 0;
      const handleClickOutside = (event) => {
        if (dropMain.current && !dropMain.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  return (
    <main
      ref={dropMain}
      className={`${
        open && "ring-1 ring-theme"
      } rounded w-full cursor-pointer transition-all duration-300`}
    >
      <div className="relative w-full">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`${btn} py-1 relative z-10 bg-white hover:bg-gray-100 transition-all duration-300`}
        >
          <div className="flex items-center justify-between w-full">
            <div>{data}</div>
            <img
              className={`h-7 opacity-60 transform ${
                open && "rotate-180"
              } transition-transform duration-300`}
              src={dropIcon}
              alt="dropdown icon"
            />
          </div>
        </div>

        <div
          ref={optionTop}
          className={`${
            open ? "h-52 md:h-[190px] border rounded shadow-sm" : "h-0"
          } mt-1 absolute top-full left-0 z-20 bg-white w-full overflow-y-auto transition-all duration-300`}
        >
          {arr.map((item, index) => (
            <div
              key={index}
              onClick={(e) => {
                setData(item);
                setOpen(false);
                getData(e.target.innerText);
              }}
              className="hover:bg-gray-200 flex items-center justify-center px-2 py-1 cursor-pointer transition-all"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default DropDown;
