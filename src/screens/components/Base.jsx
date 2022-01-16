import React from "react";
import Header from "./Header";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: "80vh" }}>
        {children}
      </div>
      <footer className="footer bg-dark text-white mt-auto py-4">
        <div>
          <div className="text-center">
            <h4>AMAZONE STORE</h4>
            <h4>BUY PRODUCTS WITHOUT HASSLE</h4>
            <h4>NO RIGHT RESEREVED 2022</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Base;
