module.exports = {
  siteMetadata: {
    siteUrl: `https://codemanufacture.com`,
    title: `Codemanufacture - AWS and Magento Consultancy`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/`,
        name: `pages`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KP9TM7L`,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,
  ],
}
