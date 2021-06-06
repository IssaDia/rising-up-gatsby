import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import PropTypes from "prop-types";

const Layout: React.FC = ({ children }) => {
  console.log(children);
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
