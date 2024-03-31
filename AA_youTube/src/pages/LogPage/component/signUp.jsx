import PopUp from "../../../component/popUp";

function SignUp({ createID, setCreateID }) {
  const theme = "#7150B7";
  const btn = `px-4 mb-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[${theme}]`;

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i <= 100; i++) {
    years.push(currentYear - i);
  }

  const Genger = ["Female", "Male", "Other"];

  return (
    <PopUp
      css={"w-[370px] md:w-[470px]"}
      Title={"Sign Up"}
      Click={createID}
      setClick={setCreateID}
      Section={
        <>
          <p className="px-5 opacity-60 pt-1">It's quick and easy</p>
          <hr className="my-4 border" />
          <main className="px-5 flex flex-col">
            <div className="flex gap-2">
              <input
                className={`${btn} py-2 mb-3 bg-gray-100 w-full`}
                type="text"
                placeholder="First name"
                required
              />
              <input
                className={`${btn} py-2 mb-3 bg-gray-100 w-full`}
                type="text"
                placeholder="Surname"
                required
              />
            </div>

            <input
              className={`${btn} py-2 mb-3 bg-gray-100 w-full`}
              type="text"
              placeholder="Mobile number or email address"
              required
            />
            <input
              className={`${btn} py-2 mb-3 bg-gray-100 w-full`}
              type="password"
              placeholder="New password"
              required
            />

            {/* date of birth */}
            <p className="font-light text-sm mb-1">Date of birth</p>
            <div className="flex gap-3 mb-3">
              <select className={`${btn} py-2 w-full`}>
                {dates.map((date) => (
                  <option value={date} key={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select className={`${btn} py-2 w-full`}>
                {months.map((month, index) => (
                  <option value={month} key={index}>
                    {month}
                  </option>
                ))}
              </select>
              <select className={`${btn} py-2 w-full`}>
                {years.map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* gender */}
            <p className="font-light text-sm">Gender</p>
            <div className="flex gap-3 mb-3">
              {Genger.map((item, index) => (
                <label
                  htmlFor={item}
                  key={index}
                  className={`${btn} flex py-2 justify-between items-center gap-3 w-full`}
                >
                  <label htmlFor={item}>{item}</label>
                  <input type="radio" name="gender" id={item} />
                </label>
              ))}
            </div>

            {/* tream and condition */}
            <p className="text-[12px] font-thin">
              People who use our service may have uploaded your contact
              information to Friendzone. Learn more.
            </p>

            <p className="text-[12px] font-thin py-2">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>

            <button
              onClick={() => setCreateID(false)}
              className={`${btn}  mt-5 py-1 px-10 bg-[#3eb227] hover:bg-[#3ca626] font-bold text-xl text-white`}
            >
              Sign Up
            </button>
          </main>
        </>
      }
    />
  );
}

export default SignUp;
