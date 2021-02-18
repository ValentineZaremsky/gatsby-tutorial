import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { site } from "../utils/site";
import Layout from "../components/layout";

const createFullPostMarkup = (title, html) => {
  return { __html: `<h1>` + title + `</h1>` + html}
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
            banner: {
              file: {
                url
              }
            },
            link,
            updatedAt
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
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={site.siteURL} />
        <meta property="og:image" content={"https:" + url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={updatedAt} />
        <meta property="article:author" content="" />           //  ???
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
          author {
            childMarkdownRemark {
              html
            }
          }
          banner {
            file {
              url
            }
          }
          link
          orderNumber
          updatedAt
        }
      }
    }
  }
`;
