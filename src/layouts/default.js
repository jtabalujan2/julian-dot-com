/**
 * Default layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from ".././components/header";
import Footer from ".././components/footer";

const DefaultLayout = ({ children }) => (
   <StaticQuery
      query={graphql`
         query SiteTitleQuery {
            site {
               siteMetadata {
                  title
                  avatar
               }
            }
         }
      `}
      render={(data) => (
         <>
            <div className="h-screen">
               <Header />
               <div>{children}</div>
               <Footer siteTitle={data.site.siteMetadata.title} />
            </div>
         </>
      )}
   />
);

DefaultLayout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default DefaultLayout;
