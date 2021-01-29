  import React from "react";
  import { Link, StaticQuery, graphql } from "gatsby";
  import styled from "styled-components";

  import { colors } from "../utils/vars";
  import { site } from "../utils/site";

  const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: ${colors.main};
    height: 3em;
    padding: 0.5em;
    color: ${colors.textSecond}; */
  `;

  export default () => (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { name: { eq: "logo" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL }
            }
          ]
        }
      }) => (
        <Footer>
          &copy;&nbsp;<time datetime="2021-01">2021</time>&nbsp;
          <Link to="/">{site.siteName}</Link>
        </Footer>
      )}
    />
  );