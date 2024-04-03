import React, { useEffect, useState } from "react";
import SignUp from "./component/signUp";
import FromIN from "./component/fromIN";

function LogSign() {
  const [notify, setNotify] = useState(0);
  const [createID, setCreateID] = useState(false);

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
      {createID && <SignUp createID={createID} setCreateID={setCreateID} />}
    </main>
  );
}

export default LogSign;
