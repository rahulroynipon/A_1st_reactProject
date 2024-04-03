function FromIN({ setCreateID }) {
  const btn = `px-4 border border-gray-300 rounded outline-none focus:ring-1`;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-screen md:w-[400px] bg-white flex flex-col my-5 p-5 rounded-md border shadow-[#b9b9b9d3] md:shadow-lg"
    >
      {/* input userName */}
      <input
        className={`${btn} focus:ring-theme py-3 mb-4`}
        type="text"
        placeholder="Email address or phone number"
      />

      {/* input password */}
      <input
        className={`${btn} focus:ring-theme py-3 mb-4`}
        type="password"
        placeholder="Password"
      />

      {/* log in buttons */}
      <section className="flex gap-2">
        <input
          className={`${btn} py-3 focus:ring-theme cursor-pointer font-bold text-white text-xl bg-theme hover:bg-themeHover transition-all mb-4 w-full`}
          type="button"
          value="Log in"
        />
        <input
          className={`${btn} py-3 focus:ring-theme cursor-pointer font-bold text-white text-xl bg-theme hover:bg-themeHover transition-all mb-4 w-full`}
          type="button"
          value="Demo Log in"
        />
      </section>

      {/* forgotten password */}
      <p className={`text-center text-theme hover:underline cursor-pointer`}>
        Forgotten password?
      </p>
      <hr className={`my-4 border`} />

      {/* create new account */}
      <input
        onClick={() => {
          setCreateID(true);
        }}
        className={`${btn} focus:ring-secTheme bg-secTheme cursor-pointer hover:bg-secHoverTheme transition-all my-3 py-3 rounded text-white text-lg font-bold`}
        type="button"
        value="Create new account"
      />
    </form>
  );
}

export default FromIN;
