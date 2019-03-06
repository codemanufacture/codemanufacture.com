import * as React from 'react'
import styled from 'styled-components'
import { colors, typography } from '../../theme'
import { SitePageEdge } from '../../graphql-types'

const StyledBlogPost = styled.li`
    position: relative;
    padding: 0;
    margin: 0;
    background: ${colors.backgroundLightGray};
    border-radius: 4px;
    overflow: hidden;
    text-align: center;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    a {
        text-decoration: none;
        color: ${colors.textColor};
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
    }

    .content-wrapper {
        padding: 10px 15px 20px;
    }
`

interface BlogPostProps {
    element: SitePageEdge
}

const createTagsList = (tags: []) => {
    return(
        <ul className="tags-list">
            {tags.map((tag: string) => <li>{tag}</li>)}
        </ul>
    )
}


const BlogPost: React.FunctionComponent<BlogPostProps> = ({ element }) => {
    console.log(element);
    const node = element.node;

    return (
        <StyledBlogPost>
            <a href={node.fields.slug}>
                <figure>
                    <img src={node.frontmatter.backgroundImage.publicURL} />
                    <figcaption className="content-wrapper">
                        {createTagsList(node.frontmatter.tags)}
                        <h3>{node.frontmatter.title}</h3>
                    </figcaption>
                </figure>
            </a>
        </StyledBlogPost>
    )
}

export default BlogPost
