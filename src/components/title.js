  // import React from "react";
  // import { StaticQuery, graphql } from "gatsby";
  // import styled from "styled-components";
  //
  // const Title = styled.section`
  //   width: 100%;
  //   color: red;
  // `;



  // export default ({ children }) => (
  //   <>
  //     <Title>
  //       // {children}
  //       // <h1>{title}</h1>
  //     </Title>
  //   </>


  // export default () => (
  //   <StaticQuery
  //     query={graphql`
  //       query($slug: String!) {
  //         allContentfulArticle(filter: { link: { eq: $slug } }) {
  //           edges {
  //             node {
  //               title
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
  //               title,
  //               link
  //             }
  //           }
  //         ]
  //       }
  //     }) => (
  //       <Title>
  //         <h1>{title}</h1>
  //       </Title>
  //     )}
  //   />
  // );