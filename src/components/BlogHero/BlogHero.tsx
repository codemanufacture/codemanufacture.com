import * as React from 'react'
import styled from 'styled-components'
import { Frontmatter_2, AuthorJson, File } from '../../graphql-types'
import { colors, displayDimensions, sizes, typography } from '../../theme'

interface StyledBlogHeroProps {
  backgroundColor: string
  backgroundImage?: File
}

/* prettier-ignore */
const StyledBlogHero = styled.div`
  display: flex;
  margin: ${sizes.headerHeight} auto 0;
  padding: 3em 0 17em;
  flex-direction: column;
  background-color: ${(props: StyledBlogHeroProps) => props.backgroundColor};
  background-image: url('${(props: StyledBlogHeroProps) => props.backgroundImage ? props.backgroundImage.publicURL : ''}');
  background-size: cover;
  background-position: center bottom;
  text-align: center;
  color: #fff;

  .post-title {
    font-size: 38px;

    @media (max-width: ${displayDimensions.tabletSize}) {
      font-size: 2rem;
    }
  }

  .author-wrapper {
    display: flex;

    img {
      margin: auto;
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }

    figcaption {
      margin: auto 10px;
      padding-right: 10px;
      position: relative;

      &:after {
        content: '';
        width: 1px;
        height: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }

  .post-date {
    margin: auto;
  }

  .meta-data-wrapper {
    color: rgba(255, 255, 255, 0.7);
    font-size: ${typography.subtitleSize};
    margin: 0 auto;
    display: flex;
  }
`

const createAuthorData = (authors?: AuthorJson[]) => {
  if (!authors || !authors.length) {
    return false
  }

  return authors.map((author: AuthorJson) => {
    const imageUrl =
      author.avatar && author.avatar.publicURL ? author.avatar.publicURL : ''

    return (
      <figure className="author-wrapper">
        <img src={imageUrl} />
        <figcaption>{author.name}</figcaption>
      </figure>
    )
  })
}

interface BlogHeroProps {
  frontmatter: Frontmatter_2
}

const BlogHero: React.FunctionComponent<BlogHeroProps> = ({ frontmatter }) => {
  const backgroundColor = frontmatter.backgroundColor
    ? frontmatter.backgroundColor
    : colors.brand
  const backgroundImage = frontmatter.backgroundImage
    ? frontmatter.backgroundImage
    : undefined
  const authors = frontmatter.authors ? frontmatter.authors : []

  return (
    <StyledBlogHero
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <h1 className="post-title">{frontmatter.title}</h1>
      <div className="meta-data-wrapper">
        {createAuthorData(authors)}
        <span className="post-date">{frontmatter.date}</span>
      </div>
    </StyledBlogHero>
  )
}

export default BlogHero
