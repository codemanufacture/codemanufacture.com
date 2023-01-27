/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import type { GatsbyNode } from 'gatsby'

export const onCreateNode: GatsbyNode['onCreateNode'] = require('./gatsby/onCreateNode')

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter! }`,
    `type AuthorJson implements Node {
      name: String!
      jsonId: String!
      posts: [MarkdownRemark] @link(by: "frontmatter.authors.elemMatch.jsonId", from: "jsonId")
    }
    `,
    schema.buildObjectType({
      name: `Frontmatter`,
      fields: {
        comingSoon: {
          type: `Boolean`,
          resolve(source) {
            const {comingSoon} = source
            return comingSoon == null ? false : comingSoon
          }
        },
        summary: {
          type: `String`
        },
        authors: {
          type: `[AuthorJson]!`,
          resolve(source) {
            const {authors} = source
            return authors == null ? [] : authors
          },
          extensions: {
            link: {
              by: 'jsonId'
            }
          }
        }
      }
    })
  ]

  createTypes(typeDefs)
}

