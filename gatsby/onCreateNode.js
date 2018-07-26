'use strict'

module.exports = exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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
      value: slug,
    })
  }
}
