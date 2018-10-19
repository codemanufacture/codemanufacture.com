const config = {
  siteUrl: `https://codemanufacture.com`,
}

module.exports = {
  siteMetadata: {
    description: `Ecommerce, AWS Consultancy and tech blog`,
    keywords: `magento, node.js, aws, react, serverless`,
    siteUrl: config.siteUrl,
    title: `Codemanufacture - AWS and Magento Consultancy`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
        ignore: [
          `**/\.*`,
          `**/pages/**`
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/`,
        name: `pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KP9TM7L`,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
  ],
}
