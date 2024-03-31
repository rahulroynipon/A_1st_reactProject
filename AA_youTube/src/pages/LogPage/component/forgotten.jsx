import PopUp from "./../../../component/popUp";

function Forgotten({ forStatus, setForStatus }) {
  const theme = "#7150B7";
  const btn = `px-4 mb-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[${theme}]`;

  return (
    <>
      <PopUp
        css={"w-[370px] md:w-[470px]"}
        Title={"Search you account"}
        Click={forStatus}
        setClick={setForStatus}
        misData={false}
        Section={
          <main className="flex items-center justify-center gap-3 mx-10 pt-10">
            <input
              className={`${btn} py-2  w-full bg-gray-100`}
              type="text"
              placeholder="Enter you email or mobile number"
            />
            <button
              className={`${btn} py-2  bg-[${theme}] hover:bg-[#684ba7] text-white
            font-semibold`}
            >
              Search
            </button>
          </main>
        }
      />
    </>
  );
}

export default Forgotten;
