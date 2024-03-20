// Header.js
import { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./logo";

function Header(props) {
  return (
    <>
      <section className="flex px-5 pt-3 h-[10%] fixed z-50 bg-white left-0 right-0 top-0">
        <Logo />
        <SearchBar setSearchData={props.setSearchData} />
      </section>
    </>
  );
}

export default Header;
