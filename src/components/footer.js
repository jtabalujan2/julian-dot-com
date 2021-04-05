import React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) => (
   <div className="w-full absolute bottom-0 py-8 px-5 bg-julian-navy text-white flex items-center">
      <span className="">
         <small>
            Powered by {`  `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` </>`}
         </small>
         <small className="block">Made with ❤️</small>
      </span>
      <small className="inline-block absolute right-0 pr-5">
         &copy; {new Date().getFullYear()} {siteTitle}
      </small>
   </div>
);

Footer.propTypes = {
   siteTitle: PropTypes.string,
};

Footer.defaultProps = {
   siteTitle: ``,
};

export default Footer;
