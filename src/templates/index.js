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
            },
            link
          }
        }
      ]
    },
    allFile: {
      edges: [
        {
          node: {
            publicURL
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
        <meta property="og:url" content={"https://" + site.siteURL + link} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={site.siteURL} />
        <meta property="og:image" content={"https://" + site.siteURL + publicURL} />
        <meta name="twitter:site" content={site.siteURL} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
    allFile(filter: {name: {eq: "logo"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;