import { useEffect, useState } from "react";
import PopUp from "../../../component/popUp";
import SideAlert from "../../../component/sideAlert";
import passIcon from "/src/assets/password.svg";

function Verified({
  otp,
  otpGen,
  setOTPgen,
  notify,
  setNotify,
  setVerify,
  verify,
}) {
  const [sentOtp, setRecipetOpt] = useState("");
  const [wrong, setWrong] = useState(false);
  const [otpValue, setOtpValue] = useState(""); // State to store the generated OTP

  // Function to generate OTP when the "Send" button is clicked
  const sentBtnHandler = () => {
    // Generate OTP only if it's not already generated
    if (!otpValue) {
      const VoTp = otp();
      setOtpValue(VoTp);
    }

    setNotify(true);
    setVerify(true);
  };

  // Function to handle verification
  const submitionHandler = () => {
    if (sentOtp === otpValue) {
      setWrong(false);
      setOTPgen(false);
    } else {
      setWrong(true);
      // Set timeout to remove local storage data after 2 minutes if OTP is wrong
      setTimeout(() => {
        localStorage.removeItem("allData");
      }, 19950); // 2 minutes in milliseconds
    }
  };

  // Cleanup function to remove local storage data when component unmounts
  useEffect(() => {
    return () => {
      // Check if the popup is open (verify is true)
      if (!otpGen) {
        localStorage.removeItem("allData");
      }
    };
  }, []);

  return (
    <PopUp
      css="w-[370px] md:w-[470px]"
      Title="ID verification"
      Click={otpGen}
      setClick={setOTPgen}
      notification={
        notify && (
          <SideAlert
            icon={passIcon}
            note={`Your OTP is ${otpValue}`}
            color="bg-green-400"
            time={20000}
            visible={true}
          />
        )
      }
      Section={
        <main className="px-10 mt-5">
          <input
            className={`btn py-2 w-full bg-gray-100 ${
              verify && "ring-1 ring-theme"
            }`}
            type="text"
            placeholder={`${verify ? "Enter the OTP" : "Disable"}`}
            value={sentOtp}
            onChange={(e) => {
              setRecipetOpt(e.target.value);
            }}
            disabled={!verify} // Disable the input field if verification hasn't been triggered
          />

          <p className="text-sm font-thin">
            Your account must be verified within 2 minutes, otherwise, it will
            not be created.
          </p>

          <div className="flex items-center justify-center mt-3 transition-all duration-300">
            {verify ? (
              <button
                onClick={submitionHandler}
                className={`btn py-1 bg-theme hover:bg-themeHover font-semibold text-white`}
              >
                Verify
              </button>
            ) : (
              <button
                onClick={sentBtnHandler}
                className={`btn py-1 text-center bg-theme hover:bg-themeHover font-semibold text-white transition-all`}
              >
                Send
              </button>
            )}
          </div>

          <p
            className={`${
              wrong ? "opacity-80" : "opacity-0"
            } text-red-400  transition-all duration-300`}
          >
            Wrong, try again.
          </p>
        </main>
      }
    />
  );
}

export default Verified;
