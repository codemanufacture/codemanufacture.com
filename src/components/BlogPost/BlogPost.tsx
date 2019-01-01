import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../Layout'
import { colors } from '../../theme'
import { Frontmatter_2 } from '../../graphql-types'

const StyledPageWrapper = styled.div`
  margin: 0 auto;

  a {
    color: ${colors.brand};
  }

  h1 {
    font-size: 2rem;
    text-rendering: optimizeLegibility;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.45rem;
  }

  p {
    padding: 0;
  }

  h1,
  h2,
  img,
  p {
    margin: 0 0 1.45rem;
  }

  ul {
    list-style-type: disc;
  }

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`

interface BlogPostProps {
  excerpt: string
  title: string
  html: string
  frontmatter: Frontmatter_2
}

interface BlogPostHelmetProps {
  excerpt: string
  frontmatter: Frontmatter_2
  html: string
}

const BlogPostHelmet: React.FunctionComponent<BlogPostHelmetProps> = props => {
  const data = props.frontmatter

  // TODO - add proper handling of multiple authors

  return (
    <Helmet title={data.title || ''}>
      <script type="application/ld+json">
        {`
        {
          "@context: "http://schema.org/",
          "@type": "BlogPosting",
          "name": "${data.title}",
          "author": "${data.authors}",
          "date": "${data.date}",
          "keywords": "${data.tags}",
          "text": "${props.excerpt}",
          "articleBody": "${props.html}",
        }
        `}
      </script>
    </Helmet>
  )
}

const BlogPost: React.FunctionComponent<BlogPostProps> = ({
  excerpt,
  frontmatter,
  title,
  html,
}) => {
  return (
    <Layout>
      <StyledPageWrapper>
        <BlogPostHelmet
          frontmatter={frontmatter}
          excerpt={excerpt}
          html={html}
        />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPageWrapper>
    </Layout>
  )
}

export default BlogPost
