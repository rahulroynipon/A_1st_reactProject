import SignUp from "./component/signUp";
import PopUp from "./../../component/popUp";
import { useState } from "react";

function LogSign() {
  const theme = "#7150B7";
  const btn = `px-4 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[${theme}]`;

  const [createID, setCreateID] = useState(false);

  return (
    <>
      <main className="h-screen w-screen bg-[#F0F2F5] flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
        <section className="flex flex-col items-center lg:items-start">
          <h1
            className={`text-5xl lg:text-6xl font-bold text-[${theme}] cursor-default`}
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
                className={`px-4 py-2 cursor-pointer border rounded font-bold text-white text-xl bg-[${theme}] hover:bg-[#765cad] transition-all mb-4 w-full`}
                type="button"
                value="Log in"
              />
              <input
                className={`px-4 py-2 cursor-pointer border rounded font-bold text-white text-xl bg-[${theme}] hover:bg-[#765cad] transition-all mb-4 w-full`}
                type="button"
                value="Demo Log in"
              />
            </section>

            {/* forgotten password */}
            <p
              className={`text-center text-[${theme}] hover:underline cursor-pointer`}
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
        <PopUp
          Title={"Sign Up"}
          Click={createID}
          setClick={setCreateID}
          Section={
            <>
              <p className="px-5 opacity-60">It's quick and easy</p>
              <hr className="my-3" />
              <main className="px-5">
                <div className="flex gap-2">
                  <input
                    className={`${btn} py-2 mb-3 bg-gray-100`}
                    type="text"
                    placeholder="First name"
                  />

                  <input
                    className={`${btn} py-2 mb-3 bg-gray-100`}
                    type="text"
                    placeholder="Surname"
                  />
                </div>
                <input
                  className={`${btn} py-2 mb-3 bg-gray-100 w-full`}
                  type="text"
                  placeholder="Mobile number or email address"
                />

                <input
                  className={`${btn} py-2 bg-gray-100 w-full`}
                  type="password"
                  placeholder="new password"
                />
              </main>
            </>
          }
        />
      </main>
    </>
  );
}

export default LogSign;
