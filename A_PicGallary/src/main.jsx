import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header.jsx";
import "./index.css";
import Photo from "./AllPhoto/Photo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <main className="h-screen">
        <Header />
        <Photo />
      </main>
    </>
  </React.StrictMode>
);
