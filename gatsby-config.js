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
          `**/pages/**`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/homepage`,
          `/blog/sample-post`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KP9TM7L`,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://codemanufacture.us16.list-manage.com/subscribe/post?u=f65f415cd77c5c7f3128774c0&id=72598455c7`,
      },
    }
  ],
}
