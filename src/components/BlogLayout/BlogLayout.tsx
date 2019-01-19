import * as React from 'react'
import styled from 'styled-components'
import { colors, displayDimensions, typography } from '../../theme'
import SocialShareButtons from '../SocialShareButtons'

const articlePaddingBase = 50
const articlePadding = `${articlePaddingBase * 2}px`
const sidebarWidth = `300px`
const sidebarMobileWidth = `200px`

const StyledBlogLayout = styled.article`
  display: grid;
  grid-template-columns: calc(100% - ${sidebarWidth}) 200px;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: calc(100% - ${sidebarMobileWidth}) 200px;
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
    display: block;
  }

  &:after {
    position: absolute;
    content: '';
    width: ${sidebarWidth};
    top: 0;
    right: 0;
    bottom: 0;
    background: ${colors.borderColor};

    @media (max-width: 1024px) {
      width: ${sidebarMobileWidth};
    }

    @media (max-width: ${displayDimensions.tabletSize}) {
      display: none;
    }
  }

  .content-wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
    padding-top: ${articlePadding};
    padding-bottom: ${articlePadding};
    background: #fff;
    font-size: ${typography.paragraphSize};

    .blog-post-content {
      margin-bottom: ${articlePaddingBase}px;
    }

    blockquote {
      margin: 0;
      padding: 30px;
      font-size: ${typography.headingSize};
      font-weight: 300;
      background: ${colors.borderColor};
      margin-bottom: 1em;

      blockquote {
        padding: 0;
        padding-left: 30px;
        margin: 0;

        p {
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .gatsby-highlight {
    margin-bottom: 1.45rem;
  }

  pre[class*='language-'] {
    border-radius: 0;
    padding: 2em;
  }

  .sidebar {
    width: ${sidebarWidth};
    position: sticky;
    padding: ${articlePadding} 20px;
    right: 0;
    bottom: 0;
    top: 0;
    align-self: flex-start;
    z-index: 1;

    @media (max-width: 1024px) {
      width: ${sidebarMobileWidth};
    }

    @media (max-width: ${displayDimensions.tabletSize}) {
      display: none;
    }
  }
`

interface BlogLayoutProps {
  html: string
}

const BlogLayout: React.FunctionComponent<BlogLayoutProps> = ({ html }) => {
  return (
    <StyledBlogLayout>
      <div className="content-wrapper">
        <section
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <SocialShareButtons />
      </div>
      <aside className="sidebar" role="sidebar">
        Lorem ipsum dolor sit amet
      </aside>
    </StyledBlogLayout>
  )
}

export default BlogLayout
