import * as React from 'react'
import styled from 'styled-components'
import { colors, transitions, typography } from '../../theme'
import { MarkdownRemark } from '../../graphql-types'

const StyledBlogPost = styled.li`
    padding: 0;
    margin: 0;
    background: ${colors.backgroundLightGray};
    border-radius: 4px;
    overflow: hidden;
    text-align: center;
    transition: box-shadow ${transitions.basicTransition};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.33);

    &:hover {
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.33);

        img {
            filter: grayscale(0.7);
        }
    }

    a {
        text-decoration: none;
        color: ${colors.textColor};
        cursor: pointer;
        position: relative;

        img {
            transition: filter ${transitions.basicTransition};
        }
    }

    h3 {
        margin: 10px 0 0;
        font-size: ${typography.headingSize};
        font-weight: normal;
    }

    .tags-list {
        display: inline-flex;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        list-style: none;
        opacity: 0.5;
        font-size: ${typography.subtitleSize};

        li {
            + li {
                margin-left: 7px;
            }
        }
    }

    .content-wrapper {
        padding: 10px 15px 20px;
    }
`

interface BlogPostProps {
    item: MarkdownRemark
}

const createTagsList = (tags?: string[]) => {
    if (!tags || !tags.length) {
        return null
    }

    return(
        <ul className="tags-list">
            {tags.map((tag: string) => <li>{tag}</li>)}
        </ul>
    )
}


const BlogPostListItem: React.FunctionComponent<BlogPostProps> = ({ item }) => {
    const slug = (item && item.fields && item.fields.slug) || ''
    const frontmatter = item && item.frontmatter || {}
    const publicURL = (frontmatter && frontmatter.backgroundImage && frontmatter.backgroundImage.publicURL) || ''
    const tags = (frontmatter && frontmatter.tags) || []
    const title = (frontmatter && frontmatter.title) || []

    return (
        <StyledBlogPost>
            <a href={slug}>
                <figure>
                    <img src={publicURL} />
                    <figcaption className="content-wrapper">
                        {createTagsList(tags)}
                        <h3>{title}</h3>
                    </figcaption>
                </figure>
            </a>
        </StyledBlogPost>
    )
}

export default BlogPostListItem
