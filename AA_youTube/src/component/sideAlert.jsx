import { useState, useEffect } from "react";
import "./component.css";

function SideAlert({ icon, note, color, time, visible }) {
  const [visibility, setvisibility] = useState(visible);
  const timeline = {
    animationName: "timeLine",
    animationDuration: `${time}ms`,
  };
  useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        setvisibility(false);
      }, time - 800);
    }
  });

  return (
    <main
      className={`absolute bg-white right-5 top-14 border shadow rounded px-4 py-2 transition-all duration-300 ${
        visibility ? "visible opacity-80" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <img className="h-4 md:h-5 mt-2" src={icon} alt="Icon" />
        <p className="text-sm md:text-md">{note}</p>
      </div>
      <div
        className={`${color} h-1 border  mt-2 rounded`}
        style={timeline}
      ></div>
    </main>
  );
}

export default SideAlert;
