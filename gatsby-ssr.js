/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react')

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-s3-app-directory"
      href="https://app-directory.s3.amazonaws.com"
    />,
  ])

  setPreBodyComponents([
    <noscript
      key="noscript"
    >Your browser does not support JavaScript!</noscript>,
  ])
}
