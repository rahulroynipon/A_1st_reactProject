import { useState, useCallback, useEffect } from "react";
import SearchBar from "./SearchBar";
import Logo from "./logo";

function Header() {
  return (
    <>
      <section className="flex px-5 pt-3 h-[10%">
        <Logo />
        <SearchBar />
      </section>
    </>
  );
}

export default Header;
