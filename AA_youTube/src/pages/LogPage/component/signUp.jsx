function SignUp() {
  const theme = "#7150B7";
  const btn = `py-2 px-4 mb-2 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-[${theme}]`;

  return (
    <main className="absolute inset-0 opacity-60 backdrop-blur p-14">
      <form onSubmit={(e) => e.preventDefault()} className="">
        <div className="flex flex-col">
          <input type="text" placeholder="First name" className={btn} />
          <input type="text" placeholder="Last name" className={btn} />
        </div>

        <div className="flex flex-col">
          <input type="email" placeholder="Gmail" className={btn} />
          <input type="text" placeholder="Last name" className={btn} />
        </div>

        <div className="flex flex-col">
          <input
            type="password"
            placeholder="type your password"
            className={btn}
          />
          <input
            type="password"
            placeholder="retype your password"
            className={btn}
          />
        </div>
      </form>
    </main>
  );
}

export default SignUp;
