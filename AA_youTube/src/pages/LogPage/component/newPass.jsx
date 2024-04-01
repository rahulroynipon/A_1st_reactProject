import passIcon from "/src/assets/password.svg";
import PopUp from "../../../component/popUp";
import { useCallback, useEffect, useState } from "react";

function NewPass({ newPassPage, setpassPage, setChange, setNotChange }) {
  const theme = "#7150B7";
  const btn = `px-4 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[${theme}]`;
  const [newPass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [typeOTP, setOTP] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");

  const submitHandler = () => {
    if (newPass !== "" && rePass !== "" && typeOTP !== "") {
      if (newPass === rePass && typeOTP === generatedOTP) {
        setChange(true);
      } else {
        setNotChange(true);
      }
      setpassPage(false);
    }
  };

  const OtpGen = useCallback(() => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      OTP += charset[randomIndex];
    }
    return OTP;
  }, []);

  useEffect(() => {
    const otp = OtpGen();
    setGeneratedOTP(otp);
  }, [newPassPage, OtpGen]);

  useEffect(() => {
    // Clear input fields when the modal closes
    if (!newPassPage) {
      setPass("");
      setRePass("");
      setOTP("");
    }
  }, [newPassPage]);

  return (
    <>
      <PopUp
        css={"w-[370px] md:w-[470px]"}
        Title={"New password"}
        Click={newPassPage}
        setClick={setpassPage}
        misData={newPassPage}
        error={passIcon}
        note={`the OTP code is ${generatedOTP}`}
        color={"bg-green-400"}
        Section={
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center px-12 mt-5"
          >
            <input
              onChange={(e) => setPass(e.target.value)}
              value={newPass}
              className={`${btn} py-2 w-full bg-gray-100`}
              type="password"
              placeholder="New password"
              required
            />

            <input
              onChange={(e) => setRePass(e.target.value)}
              value={rePass}
              className={`${btn} py-2 w-full my-3 bg-gray-100`}
              type="password"
              placeholder="Retype new password"
              required
            />

            <input
              onChange={(e) => setOTP(e.target.value)}
              value={typeOTP}
              className={`${btn} py-2 w-full bg-gray-100`}
              type="text"
              placeholder="Enter the OTP code"
              required
            />

            <button
              onClick={submitHandler}
              className={`${btn} mt-3 py-2 w-24 bg-[${theme}] hover:bg-[#684ba7] text-white font-semibold`}
            >
              Save
            </button>
          </form>
        }
      />
    </>
  );
}

export default NewPass;
