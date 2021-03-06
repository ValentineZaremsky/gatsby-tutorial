  import React from "react";
  // import { StaticQuery, graphql } from "gatsby";
  import styled from "styled-components";

  import { colors } from "../utils/vars";
  import { site } from "../utils/site";

  const Title = styled.section`
    width: 100%;
    color: ${colors.textSecond};

    div {
      display: flex;
      justify-content: start;
      align-items: end;
      height: 300px;
      background-image: url(${site.artBanner});
    }

    h1 {
      font-variant: small-caps;
      font-size: 2.5rem;
      margin: 2.5rem;
    }
  `;

  export default () => (
    <>
      <Title>
        <div>
          <h1>{site.siteName}</h1>
        </div>
      </Title>
    </>
  );




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
