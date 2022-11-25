/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

import 'katex/dist/katex.min.css'
import '../../styles/dracula-prism.min.css'
import { ArticleMeta } from '../../components/meta'

// Wrapped <table> to prevent overflow
const WrappedTable = (props) => (
  <div className="max-w-full overflow-x-scroll">
    <table {...props} />
  </div>
)

const BlogPost: FC<PageProps> = ({ data }) => {
  const mdx = (data as any).mdx
  const url = (data as any).site.siteMetadata.siteUrl as string
  return (
    <Layout title={mdx.frontmatter.title}>
      <ArticleMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        url={`${url}/blog/${mdx.slug}`}
        domain={url}
        // TODO: add image metadata to each post
        image={''}
      />
      <Navbar />
      <main className="mt-24">
        <div className="mb-8 mx-auto max-w-xl">
          <h1 className="mb-2 text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-center">
            {mdx.frontmatter.title}
          </h1>
          <h2 className="text-cyan font-semibold text-center">
            {mdx.frontmatter.displayDate}
          </h2>
        </div>
        <article className="prose prose-md text-white mx-auto max-w-full text-justify">
          <MDXProvider components={{ table: WrappedTable }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        displayDate
        description
        hasMath
        title
      }
      body
      slug
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
export default BlogPost
