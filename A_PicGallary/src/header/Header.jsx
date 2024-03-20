// Header.js
import { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./logo";

function Header(props) {
  return (
    <>
      <section className="flex px-5 pt-3 h-[10%]">
        <Logo />
        <SearchBar setSearchData={props.setSearchData} />
      </section>
    </>
  );
}

export default Header;
