/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
module.exports = {
  siteMetadata: {
    title: "Andromeda",
    description: 'Per aspera ad astra',
    author: '@andromeda',
    siteURL: 'https://andromeda-blog.netlify.app',
    phone: "+380 66 777 88 99",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andromeda space blog`,
        short_name: `Andromeda`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#440088`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        include_favicon: false
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
  ]
};
