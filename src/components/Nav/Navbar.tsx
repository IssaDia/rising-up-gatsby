import React from "react";
import NavItems from "./NavItems";
import SiteTitle from "./SiteTitle";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow text-customGrey">
      <NavItems />
      <div className="row nav-perso">
        <div className="col-md-12">
          <Link to="/">
            <SiteTitle />
          </Link>
          <div className="nav-links">
            <Link to="/" className="btn-nav">
              Home
            </Link>
            <Link to="/themes" className="btn-nav">
              Themes
            </Link>
            <Link to="/search" className="btn-nav">
              Search
            </Link>
            <Link to="/contact" className="btn-nav">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
