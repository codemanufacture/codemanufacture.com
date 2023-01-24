import * as React from 'react'
import BlogPostsListItem from '../BlogPostsListItem'

interface BlogPostListProps {
  posts?: Queries.BlogPostListItemFragment[]
}

export default function BlogPostsList({ posts }: BlogPostListProps) {
  return (
    <div tw="relative bg-gray-50 px-6 pt-10 pb-16 lg:px-8 lg:pt-14 lg:pb-28">
      <div tw="absolute inset-0">
        <div tw="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div tw="relative mx-auto max-w-7xl">
        <div tw="text-center">
          <h2
            tw="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            id="blog"
          >
            From the blog
          </h2>
        </div>
        <div tw="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts?.map((post: Queries.BlogPostListItemFragment) => (
            <BlogPostsListItem
              post={post}
              key={`blog-list-${post.fields?.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
