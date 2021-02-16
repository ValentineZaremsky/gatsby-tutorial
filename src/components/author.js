  import React from "react";
  // import { StaticQuery, graphql } from "gatsby";
  import styled from "styled-components";

  import { colors } from "../utils/vars";
  import { site } from "../utils/site";

  const Author = styled.section`
    display: flex;
    justify-content: end;
    color: ${colors.textBody};
    font-style: italic;
    font-size: 0.9rem;

    & strong, & em {
      color: ${colors.textBody};
    }

    & div {
      max-width: 20em;
    }

    & p {
      padding: 0;
      margin: 0;
    }
  `;


  export default () => (
    <>
      <Author>
        <div dangerouslySetInnerHTML={{ __html: site.artAuthor }} />
      </Author>
    </>
  );


  // export default () => (
  //   <StaticQuery
  //     query={graphql`
  //       query($slug: String!) {
  //         allContentfulArticle(filter: { link: { eq: $slug } }) {
  //           edges {
  //             node {
  //               author {
  //                 childMarkdownRemark {
  //                   html
  //                 }
  //               }
  //               link
  //             }
  //           }
  //         }
  //       }
  //     `}
  //     render={({
  //       allContentfulArticle: {
  //         edges: [
  //           {
  //             node: {
  //               author: {
  //                 childMarkdownRemark: {  html }
  //               },
  //               link
  //             }
  //           }
  //         ]
  //       }
  //     }) => (
  //       <Author>
  //         <div dangerouslySetInnerHTML={{ __html: html }} />
  //       </Author>
  //     )}
  //   />
  // );
