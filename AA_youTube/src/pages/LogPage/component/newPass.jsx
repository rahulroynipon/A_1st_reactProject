import PopUp from "../../../component/popUp";

function NewPass({ newPassPage, setpassPage }) {
  const theme = "#7150B7";
  const btn = `px-4 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[#7150B7]`;

  return (
    <>
      <PopUp
        css={"w-[370px] md:w-[470px]"}
        Title={"New password"}
        Click={newPassPage}
        setClick={setpassPage}
        misData={true}
        note={`the OTP code is ${1}`}
        color={"bg-green-400"}
        Section={
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center px-12 mt-5"
          >
            <input
              className={`${btn} py-2 w-full bg-gray-100`}
              type="password"
              placeholder="new password"
              required
            />

            <input
              className={`${btn} py-2 w-full my-3 bg-gray-100`}
              type="password"
              placeholder="retype new password"
              required
            />

            <input
              className={`${btn} py-2 w-full bg-gray-100`}
              type="text"
              placeholder="Enter the otp code"
              required
            />

            <button
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
