'use strict'

const { resolve } = require('path')

module.exports = exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = resolve(`src/templates/PageTemplate.tsx`)
  const postTemplate = resolve(`src/templates/PostTemplate.tsx`)

  const allMarkdown = await graphql(
    `
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//pages|blog//" } }, limit: 1000) {
          edges {
            node {
              fileAbsolutePath
              fields {
                pageType
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  )

  if (allMarkdown.error) {
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({node}) => {
    const { slug, pageType } = node.fields

    createPage({
      path: slug,
      component: pageType === `post` ? postTemplate : pageTemplate,
      context: {
        slug
      },
    })
  })
}
