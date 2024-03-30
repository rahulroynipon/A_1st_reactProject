function LogSign() {
  const theme = "#7150B7";
  const btn = `py-2 px-4 mb-4 border rounded outline-none focus:ring-2 focus:ring-${theme}`;

  return (
    <>
      <main className="h-screen w-screen bg-[#e2e2e2d2]">
        <section>1</section>
        <section>
          <form className="bg-white flex flex-col m-5 p-5 rounded-md border shadow-xl">
            {/* input userName */}
            <input
              className={btn}
              type="text"
              placeholder="Email address or phone number"
            />

            {/* input password */}
            <input className={btn} type="password" placeholder="Password" />

            {/* log in button */}
            <input
              className="px-4 py-2 border rounded font-bold text-white text-xl bg-[#7150B7]
               hover:bg-[#765cad] transition-all mb-4"
              type="submit"
              value="Log in"
            />

            {/* forgotten password */}
            <p className="text-center text-[#7150B7] hover:underline">
              Forgotten password?
            </p>
            <hr className="my-4" />

            {/* creat new account */}
            <input
              className="bg-[#3eb227] py-2 rounded text-white text-lg font-bold"
              type="button"
              value="Create new account"
            />
          </form>
        </section>
      </main>
    </>
  );
}

export default LogSign;
