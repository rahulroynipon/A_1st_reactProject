import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./header/SearchBar.jsx";
import useData from "./hook/useData.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchBar></SearchBar>
  </React.StrictMode>
);
