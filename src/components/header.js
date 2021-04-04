import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = () => (
   <header className="flex items-center px-5 h-24 bg-julian-navy text-white ">
      <div className="inline-flex items-center">
         <div className="rounded-xl h-5 w-5 mr-2 ml-3 bg-julian-red" />
         <Link to="/" className=" inline-flex items-center">
            <p className="px-1 text-xl font-bold">Julian Tabalujan</p>
            <p>{`//`} Software Engineer</p>
         </Link>
      </div>
      <div className="absolute right-0 pr-5">
         <Link to="/" className="pr-3" activeClassName="text-julian-orange">
            About Me
         </Link>
         <Link to="/resume">Resume</Link>
      </div>
   </header>
);

Header.propTypes = {
   avatar: PropTypes.string,
};

Header.defaultProps = {
   avatar: ``,
};

export default Header;
