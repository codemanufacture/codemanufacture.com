'use strict'

const { resolve } = require('path')

module.exports = exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const pageTemplate = resolve(`./src/templates/PageTemplate.tsx`)

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(filter: { id: { regex: "//pages//" } }, limit: 1000) {
          edges {
            node {
              id
              fields {
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

  allMarkdown.data.allMarkdownRemark.edges.forEach((edge) => {
    const slug = edge.node.fields.slug

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    })
  })
}