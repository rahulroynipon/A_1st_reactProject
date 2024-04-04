import React, { useEffect, useState } from "react";
import SignUp from "./component/signUp";
import FromIN from "./component/fromIN";
import PopUp from "../../component/popUp";
import SideAlert from "./../../component/sideAlert";

function LogSign() {
  const btn = `px-4 mb-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-theme transition-all duration-300`;

  const [notify, setNotify] = useState(0);
  const [createID, setCreateID] = useState(false);
  const [otpGen, setOTPgen] = useState(true);
  const [reCount, setRecount] = useState(3);

  useEffect(() => {
    let timeoutId;
    if (notify) {
      timeoutId = setTimeout(() => {
        setNotify(0);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [notify]);

  return (
    <main
      className={`h-screen w-screen bg-backColor flex flex-col lg:flex-row lg:gap-20 items-center justify-center`}
    >
      <section className="flex flex-col items-center lg:items-start">
        <h1
          className={`text-5xl lg:text-6xl font-bold text-theme cursor-default`}
        >
          friendZone
        </h1>
        <p className="text-xl text-center lg:text-left leading-7 my-5 mx-3 md:mx-0  md:text-2xl lg:text-3xl opacity-90 md:w-[400px] lg:max-w-[600px] lg:min-w-[530px]">
          Friendzone helps you connect and share with the people in your life.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center mt-3">
        <FromIN setCreateID={setCreateID} />
        <p className="text-center opacity-70">
          Create a Page for a celebrity, brand, or business.
        </p>
      </section>
      {createID && (
        <SignUp
          createID={createID}
          setCreateID={setCreateID}
          setIdstatus={setOTPgen}
        />
      )}

      {otpGen && (
        <PopUp
          css="w-[370px] md:w-[470px]"
          Title="ID verification"
          Click={otpGen}
          setClick={setOTPgen}
          notification={<SideAlert />}
          Section={
            <main className="px-10 mt-5">
              <input
                className={`${btn} py-2 w-full bg-gray-100`}
                type="text"
                placeholder="Enter the OTP"
              />

              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={() => {
                    setRecount(reCount - 1);
                  }}
                  className={`${btn} w-[85px] py-1 text-center bg-theme hover:bg-themeHover font-semibold text-white transition-all`}
                >
                  Send({reCount})
                </button>
                <button
                  className={`${btn} py-1 bg-theme hover:bg-themeHover font-semibold text-white`}
                >
                  Verify
                </button>
              </div>
            </main>
          }
        />
      )}
    </main>
  );
}

export default LogSign;
