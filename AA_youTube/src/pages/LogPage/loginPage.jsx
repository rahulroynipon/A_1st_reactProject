import SignUp from "./component/signUp";
import { useState } from "react";
import SideAlert from "./../../component/sideAlert";
import notifi from "/src/assets/notification.svg";
import Forgotten from "./component/forgotten";
import NewPass from "./component/newPass";

function LogSign() {
  const theme = "#7150B7";
  const btn = `px-4 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[#7150B7]`;

  const [createID, setCreateID] = useState(false);
  const [IDstatus, setIdstatus] = useState(false);
  const [forStatus, setForStatus] = useState(false);
  const [newPassPage, setpassPage] = useState(false);
  const [changeStatus, setChange] = useState(false);

  // Function to close the side alert after 2 seconds
  const handleCloseSideAlert = () => {
    setTimeout(() => setIdstatus(false), 1500);
  };

  return (
    <>
      <main className=" h-screen w-screen bg-[#F0F2F5] flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
        <section className="flex flex-col items-center lg:items-start">
          <h1
            className={`text-5xl lg:text-6xl font-bold text-[#7150B7] cursor-default`}
          >
            friendZone
          </h1>
          <p className="text-xl text-center lg:text-left leading-7 my-5 mx-3 md:mx-0  md:text-2xl lg:text-3xl opacity-90 md:w-[400px] lg:max-w-[600px] lg:min-w-[530px]">
            Friendzone helps you connect and share with the people in your life.
          </p>
        </section>
        <section className="flex flex-col items-center justify-center mt-3">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-screen md:w-[400px] bg-white flex flex-col my-5 p-5 rounded-md border shadow-[#b9b9b9d3] md:shadow-lg"
          >
            {/* input userName */}
            <input
              className={`${btn} py-3 mb-4`}
              type="text"
              placeholder="Email address or phone number"
            />

            {/* input password */}
            <input
              className={`${btn} py-3 mb-4`}
              type="password"
              placeholder="Password"
            />

            {/* log in buttons */}
            <section className="flex gap-2">
              <input
                className={`px-4 py-2 cursor-pointer border rounded font-bold text-white text-xl bg-[#7150B7] hover:bg-[#765cad] transition-all mb-4 w-full`}
                type="button"
                value="Log in"
              />
              <input
                className={`px-4 py-2 cursor-pointer border rounded font-bold text-white text-xl bg-[#7150B7] hover:bg-[#765cad] transition-all mb-4 w-full`}
                type="button"
                value="Demo Log in"
              />
            </section>

            {/* forgotten password */}
            <p
              onClick={() => setForStatus(true)}
              className={`text-center text-[#7150B7] hover:underline cursor-pointer`}
            >
              Forgotten password?
            </p>
            <hr className={`my-4 border`} />

            {/* create new account */}
            <input
              className={`bg-[#3eb227] cursor-pointer hover:bg-[#3ca626] transition-all my-3 py-3 rounded text-white text-lg font-bold`}
              type="button"
              value="Create new account"
              onClick={() => setCreateID(true)}
            />
          </form>

          <p className="text-center opacity-70">
            Create a Page for a celebrity, brand, or business.
          </p>
        </section>

        {/* all function start here */}
        <SignUp
          createID={createID}
          setCreateID={setCreateID}
          setIdstatus={setIdstatus}
        />

        {/* all function end here */}
        {IDstatus && (
          <SideAlert
            icon={notifi}
            note={"Your account is created successfully"}
            color={"bg-green-500"}
          />
        )}
        {/* Close the side alert after 2 seconds */}
        {IDstatus && handleCloseSideAlert()}
        <Forgotten
          forStatus={forStatus}
          setForStatus={setForStatus}
          setpassPage={setpassPage}
        />

        {newPassPage && (
          <NewPass
            newPassPage={newPassPage}
            setpassPage={setpassPage}
            setChange={setChange}
          />
        )}
        {changeStatus && (
          <SideAlert
            icon={notifi}
            note={"password changed successful"}
            color={"bg-green-500"}
          />
        )}
      </main>
    </>
  );
}

export default LogSign;
