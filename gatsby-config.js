module.exports = {
  siteMetadata: {
    siteUrl: `https://codemanufacture.com`,
    title: `Codemanufacture - AWS and Magento Consultancy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KP9TM7L`,
        includeInDevelopment: false,
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,
  ],
}
