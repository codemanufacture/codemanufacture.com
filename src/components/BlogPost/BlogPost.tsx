import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../Layout'

interface BlogPostProps {
  excerpt: string
  title: string
  html: string
  frontmatter: Queries.Maybe<Queries.Frontmatter>
}

interface BlogPostHelmetProps {
  excerpt: string
  frontmatter: Queries.Maybe<Queries.Frontmatter>
  html: string
}

const createAuthorData = (authors?: Queries.Maybe<Queries.AuthorJson>[]) => {
  return (
    authors &&
    authors
      .filter((e): e is Queries.AuthorJson => !!e)
      .map((author: Queries.AuthorJson) => {
        const githubNick = author.github || ''
        const twitterNick = author.github || ''

        return `{
      "@type": "Person",
      "image": "${author.avatar ? author.avatar.publicURL : ''}",
      "name": "${author.name}",
      "description": "${author.bio}",
      "sameAs": [
        "http://github.com/${githubNick.substring(1)}",
        "http://twitter.com/${twitterNick.substring(1)}",
      ]
     },`
      })
  )
}

const BlogPostHelmet: React.FunctionComponent<BlogPostHelmetProps> = props => {
  const data = props.frontmatter
  const authors = props.frontmatter?.authors ?? []
  // @ts-ignore
  const authorData = createAuthorData(authors)

  return (
    <Helmet title={data?.title || ''}>
      <script type="application/ld+json">
        {`
        {
          "@context: "http://schema.org/",
          "@type": "BlogPosting",
          "name": "${data?.title}",
          "author": [${authorData}],
          "date": "${data?.date}",
          "keywords": "${data?.tags}",
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
  html,
}) => {
  return (
    <Layout>
      <BlogPostHelmet frontmatter={frontmatter} excerpt={excerpt} html={html} />
      <article>
        <div tw="mx-auto max-w-7xl pt-16 px-6 sm:pt-24 sm:pb-14 lg:px-8">
          <div tw="text-center">
            <h1 tw="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {frontmatter?.title}
            </h1>
            <div tw="py-5">{frontmatter?.date}</div>
          </div>
        </div>
        <div tw="relative px-6 lg:px-8 pb-10">
          <div
            tw="mx-auto max-w-prose text-lg prose"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
