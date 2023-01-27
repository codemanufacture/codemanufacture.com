/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from 'react'
import type { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents, setPreBodyComponents }) => {
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
