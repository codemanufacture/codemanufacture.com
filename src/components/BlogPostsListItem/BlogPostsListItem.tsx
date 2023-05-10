import * as React from 'react'

interface BlogPostItemProps {
  post: Queries.BlogPostListItemFragment
  key: React.Key | null | undefined
}

const BlogPostListItem: React.FunctionComponent<BlogPostItemProps> = ({
  post,
}) => {
  const slug = post.fields?.slug || ''
  const title = post.frontmatter?.title ?? ''
  const date = post.frontmatter?.date ?? ''
  const comingSoon = post.frontmatter?.comingSoon
  const authors = post.frontmatter?.authors

  return (
    <div
      key={`blog-list-item-${slug}`}
      tw="flex flex-col overflow-hidden rounded-lg shadow-lg border-t-4 border-sky-500"
    >
      <div tw="flex flex-1 flex-col justify-between bg-white p-6">
        <div tw="flex-1">
          {comingSoon ? (
            <div tw="mt-2 block">
              <p tw="text-xl font-semibold text-gray-900">{title}</p>
              <p tw="mt-3 text-base text-gray-500">
                {post.frontmatter?.summary ?? post.excerpt}
              </p>
            </div>
          ) : (
            <a href={slug} tw="mt-2 block">
              <p tw="text-xl font-semibold text-gray-900">{title}</p>
              <p tw="mt-3 text-base text-gray-500">
                {post.frontmatter?.summary ?? post.excerpt}
              </p>
            </a>
          )}
        </div>
        <div tw="mt-6 flex items-center">
          <div tw="flex-shrink-0">
            {authors?.map(
              author =>
                author && (
                  <div key={`author-avatar-${author.jsonId}`}>
                    <span tw="sr-only">{author.name}</span>
                    {author?.avatar?.publicURL && (
                      <img
                        tw="h-10 w-10 rounded-full"
                        src={author.avatar.publicURL}
                        alt={author.name}
                      />
                    )}
                  </div>
                )
            )}
          </div>
          <div tw="ml-3">
            <p tw="text-sm font-medium text-gray-900">
              {authors?.map(
                author =>
                  author && (
                    <span key={`author-name-${author.jsonId}`}>
                      {author.name}
                    </span>
                  )
              )}
            </p>
            <div tw="flex space-x-1 text-sm text-gray-500">
              {!comingSoon ? (
                <time dateTime={date}>{date}</time>
              ) : (
                <span>Coming soon</span>
              )}
              <span aria-hidden="true">&middot;</span>
              {!comingSoon && <span>{post.timeToRead} min read</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostListItem
