import { useEffect, useState } from "react";
import PopUp from "../../../component/popUp";
import SideAlert from "../../../component/sideAlert";
import passIcon from "/src/assets/password.svg";

function Verified({
  otpGen,
  setOTPgen,
  notify,
  otp,
  setNotify,
  setVerify,
  verify,
}) {
  const [sentOtp, setRecipetOpt] = useState("");
  const [Votp, setVotp] = useState("");
  const [wrong, setWrong] = useState(false);

  const sentBtnHandeler = () => {
    setNotify(true);
    setVerify(true);
    const VoTp = otp();
    setVotp(VoTp);
  };

  const submitionHandeler = () => {
    if (sentOtp == Votp) {
      setWrong(false);
      setOTPgen(false);
    } else {
      setWrong(true);
    }
  };

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
            note={`Your OTP is ${Votp}`}
            color="bg-green-400"
            time={20000}
            visible={true}
          />
        )
      }
      Section={
        <main className="px-10 mt-5">
          <input
            className={`btn py-2 w-full bg-gray-100`}
            type="text"
            placeholder="Enter the OTP"
            value={sentOtp}
            onChange={(e) => {
              setRecipetOpt(e.target.value);
            }}
          />

          <p className="text-sm font-thin">
            Your account must be verified within 2 minutes, otherwise, it will
            not be created.
          </p>

          <div className="flex items-center justify-center mt-3 transition-all duration-300">
            {verify ? (
              <button
                onClick={submitionHandeler}
                className={`btn py-1 bg-theme hover:bg-themeHover font-semibold text-white`}
              >
                Verify
              </button>
            ) : (
              <button
                onClick={sentBtnHandeler}
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
