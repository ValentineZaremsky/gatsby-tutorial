import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

const siteName = "Andromeda";

const createFullPostMarkup = (title, html) => {
  return { __html: `<h1>` + title + `</h1>` + html }
}

export default ({
  data: {
    allContentfulArticle: {
      edges: [
        {
          node: {
            title,
            content: {
              childMarkdownRemark: { html }
            }
          }
        }
      ]
    }
  }
}) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteName} | {title}</title>
      </Helmet>
      <div dangerouslySetInnerHTML={createFullPostMarkup(title, html)} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allContentfulArticle(filter: { link: { eq: $slug } }) {
      edges {
        node {
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          link
          orderNumber
        }
      }
    }
  }
`;