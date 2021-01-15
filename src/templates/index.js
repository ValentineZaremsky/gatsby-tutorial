import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { site } from "../utils/site";
import Layout from "../components/layout";

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
            description,
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
        <meta name="description" content={description} />
        <title>{site.siteName} | {title}</title>
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
          description
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