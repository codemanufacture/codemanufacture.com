/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict'

const { resolve } = require('path')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  if (node.internal.type === `MarkdownRemark`) {
    const { permalink } = node.frontmatter
    const { relativePath } = getNode(node.parent)

    const slug = permalink || `/${relativePath.replace(`.md`, ``)}/`

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: `slug`,
      value: slug || ``,
    })
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
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