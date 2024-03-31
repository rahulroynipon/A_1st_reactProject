import { useEffect, useState } from "react";
import PopUp from "./../../../component/popUp";
import error from "/src/assets/error.svg";
import right from "/src/assets/right.svg";

function Forgotten({ forStatus, setForStatus }) {
  const theme = "#7150B7";
  const btn = `px-4 mb-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[${theme}]`;
  const [searchData, setSearchData] = useState("");
  const [found, setFound] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userID"));

  const searchHandler = () => {
    if (searchData != "") {
      setSearchClick(true);
      if (userData && userData.mobile === searchData) {
        setFound(true);
      } else {
        setFound(false);
      }
      clearAlert();
    }
  };

  const clearAlert = () => {
    setTimeout(() => {
      setSearchClick(false);
    }, 1500);
  };

  useEffect(() => {
    if (!forStatus) {
      setSearchData("");
    }
  }, [forStatus]);

  return (
    <>
      <PopUp
        css={"w-[370px] md:w-[470px]"}
        Title={"Search your account"}
        Click={forStatus}
        setClick={setForStatus}
        misData={searchClick}
        error={!found ? error : right}
        note={
          !found
            ? "This account is not found here"
            : "This account is found here"
        }
        color={!found ? "bg-red-400" : "bg-green-400"}
        Section={
          <>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-3 mx-10 pt-10"
            >
              <input
                onChange={(e) => setSearchData(e.target.value)}
                className={`${btn} py-2 w-full bg-gray-100`}
                type="text"
                value={searchData}
                placeholder="Enter your email or mobile number"
                required
              />
              <button
                onClick={searchHandler}
                className={`${btn} py-2 w-24 bg-[${theme}] hover:bg-[#684ba7] text-white font-semibold`}
              >
                {found ? "Next" : "Search"}
              </button>
            </form>
          </>
        }
      />
    </>
  );
}

export default Forgotten;
