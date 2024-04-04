import React, { useCallback, useEffect, useState } from "react";
import SignUp from "./component/signUp";
import FromIN from "./component/fromIN";
import PopUp from "../../component/popUp";
import SideAlert from "./../../component/sideAlert";
import error from "/src/assets/error.svg";

import OTPgen from "./../../hook/OtpGen";
import Verified from "./component/IDVerify";

function LogSign() {
  const [notify, setNotify] = useState(false);
  const [createID, setCreateID] = useState(false);
  const [otpGen, setOTPgen] = useState(false);
  const [verify, setVerify] = useState(false);
  const [IDcreateStatus, setIDcreateStatus] = useState(true);

  const otp = useCallback(() => {
    return OTPgen(6);
  }, []);

  useEffect(() => {
    if (!otpGen) {
      setVerify(false);
    }

    let timeoutId;
    if (notify) {
      timeoutId = setTimeout((e) => {
        setNotify(false);
        setOTPgen(false);
      }, 20000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [notify, otpGen]);

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
        <Verified
          otpGen={otpGen}
          setOTPgen={setOTPgen}
          notify={notify}
          otp={otp}
          setNotify={setNotify}
          setVerify={setVerify}
          verify={verify}
          setIDcreateStatus={setIDcreateStatus}
        />
      )}
    </main>
  );
}

export default LogSign;
