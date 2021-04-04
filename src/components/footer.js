import React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) => (
   <div className="w-full h-24 absolute bottom-0 px-5 bg-julian-red text-white flex items-center">
      <span className="inline-block">
         <small>
            {` </>`} Powered by {`  `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
         </small>
      </span>
      <span className="inline-block absolute right-0 pr-5">
         &copy; {new Date().getFullYear()} {siteTitle}
      </span>
   </div>
);

Footer.propTypes = {
   siteTitle: PropTypes.string,
};

Footer.defaultProps = {
   siteTitle: ``,
};

export default Footer;
