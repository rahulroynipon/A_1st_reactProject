import React, { useState, useEffect } from "react";
import PopUp from "../../../component/popUp";
import DropDown from "./../../../component/dropDown";
import SideAlert from "./../../../component/sideAlert";
import error from "/src/assets/error.svg";

function SignUp({ createID, setCreateID, setIdstatus }) {
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

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - i);

  const genders = ["Female", "Male", "Other"];

  // State variables for input values
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(1);
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState(2024);

  // State variables for notifications
  const [notFill, setNotFill] = useState(false);
  const [INpass, setInpass] = useState(false);
  const [preFound, setPreFound] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission

    const dateOfBirth = `${date} ${month} ${year}`;
    if (
      firstName !== "" &&
      surname !== "" &&
      userName !== "" &&
      password !== "" &&
      gender !== ""
    ) {
      if (password.length >= 6) {
        const createData = {
          firstName: firstName,
          surname: surname,
          userId: userName,
          password: password,
          DOB: dateOfBirth,
          gender: gender,
        };
        const allData = JSON.parse(localStorage.getItem("allData"));
        if (allData) {
          if (allData.userId === userName) {
            setPreFound(true);
          } else {
            localStorage.setItem("allData", JSON.stringify(createData));
            setIdstatus(true);
            setCreateID(false);
          }
        } else {
          localStorage.setItem("allData", JSON.stringify(createData));
          setIdstatus(true);
          setCreateID(false);
        }
      } else {
        setInpass(true);
      }
    } else {
      setNotFill(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotFill(false);
      setInpass(false);
      setPreFound(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [notFill, INpass, preFound]);

  return (
    <PopUp
      css="w-[370px] md:w-[470px]"
      Title="Sign Up"
      Click={createID}
      setClick={setCreateID}
      notification={
        // Notification section start
        <>
          {notFill && (
            <SideAlert
              icon={error}
              note="Fill all the information properly"
              color="bg-red-400"
              time={2000}
              visible={true}
            />
          )}
          {INpass && (
            <SideAlert
              icon={error}
              note="Password must be at least 6 characters long"
              color="bg-red-400"
              time={2000}
              visible={true}
            />
          )}
          {preFound && (
            <SideAlert
              icon={error}
              note="Try another username; it has a previous account."
              color="bg-red-400"
              time={2000}
              visible={true}
            />
          )}
        </>
        // Notification section end
      }
      Section={
        <main>
          <p className="px-5 opacity-60 pt-1">It's quick and easy</p>
          <hr className="my-4 border" />
          <form
            onSubmit={submitHandler} // Call submitHandler directly without event.preventDefault()
            className="px-5 flex flex-col"
          >
            <div className="flex gap-2">
              <input
                className={`btn py-2 mb-3 bg-gray-100 w-full`}
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className={`btn py-2 mb-3 bg-gray-100 w-full`}
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>

            <input
              className={`btn py-2 mb-3 bg-gray-100 w-full`}
              type="text"
              placeholder="Mobile number or email address"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              className={`btn py-2 mb-3 bg-gray-100 w-full`}
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <p className="font-light text-sm mb-1">Date of birth</p>
            <div className="flex gap-3 mb-3">
              <DropDown arr={dates} getData={setDate} />
              <DropDown arr={months} getData={setMonth} />
              <DropDown arr={years} getData={setYear} />
            </div>

            <p className="font-light text-sm">Gender</p>
            <div className="flex gap-3 mb-3">
              {genders.map((item, index) => (
                <label
                  key={index}
                  className={`btn flex py-2 justify-between items-center gap-3 w-full`}
                >
                  <span>{item}</span>
                  <input
                    type="radio"
                    name="gender"
                    value={item}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
              ))}
            </div>

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
              type="submit" // Ensure button type is submit
              className={`btn mt-5 py-1 px-10 bg-secTheme hover:bg-secHoverTheme font-bold text-xl text-white`}
            >
              Sign Up
            </button>
          </form>
        </main>
      }
    />
  );
}

export default SignUp;
