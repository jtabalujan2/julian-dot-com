import React from "react";
import { Link, graphql } from "gatsby";

import DefaultLayout from "../layouts/default";
import SEO from "../components/seo";

import { groupBy, getDateYear } from "../utils";

const IndexPage = ({ data }) => {
   // all posts without dates are assumed to be drafts or pages
   // not to be added to postsList
   const posts = data.allMarkdownRemark.edges.filter(
      (p) => p.node.frontmatter.date !== null,
   );
   const postsList = (posts) =>
      posts.map((post) => (
         <li key={post.node.id}>
            <div className="post-date code">
               <small>{post.node.frontmatter.date}</small>
            </div>
            <div className="title">
               <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
               </Link>
            </div>
         </li>
      ));

   return (
      <DefaultLayout>
         <SEO title="Home" />
         <div className="flex-col bg-julian-navy absolute overflow-auto top-24 bottom-24 w-full">
            <div className="h-full w-5/12 bg-gradient-to-r from-julian-orange to-julian-red inline-flex absolute"></div>
            <div className="flex items-center justify-center h-full">
               <div className="h-3/5 w-3/5 z-10 flex">
                  <div className="bg-gradient-to-r from-julian-red to-julian-red w-6/12 h-full shadow-lg rounded-md"></div>
                  <div className="bg-julian-med-grey text-white w-6/12 h-full shadow-lg rounded-md">
                     <div className="mt-12 ml-10 ">
                        <h1 className="text-9xl font-bold tracking-tight">
                           Hello
                        </h1>
                        <h3 className="text-2xl mt-6">{`Here's who I am & what I do`}</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default IndexPage;

export const pageQuery = graphql`
   query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
         edges {
            node {
               id
               fields {
                  slug
               }
               frontmatter {
                  date(formatString: "MMMM DD, YY")
                  title
               }
            }
         }
      }
   }
`;
