import React from "react";
import "../styles/tailwind.css";
import Footer from "./Footer";
import Navbar from "./Nav/Navbar";
import PropTypes from "prop-types";

const Layout: React.FC = ({ children }) => {
  console.log(children);
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <main>{children}</main>
        <h1 className="">hello</h1>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
