// Utilities
import cl from "classnames";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// Markdown loading/parsing imports
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import type PostFrontmatter from "../../types/post-frontmatter";

// Post layout
import PostLayout from "../../components/post-layout";
import code from "../../components/blog-components/code";
import Head from "next/head";
import Image from "next/image";
import MultiCode from "../../components/blog-components/multi-code";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Layout from "../../components/layout";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope here.

const components = {
  Head,
  code,
  Image,
  MultiCode,
};

interface PostPageProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontMatter: PostFrontmatter;
}

type PostPageStaticParams = ParsedUrlQuery & {
  slug: string;
};

export default function PostPage({ source, frontMatter }: PostPageProps) {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title} | Aditya Rathod</title>
      </Head>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: "article",
          article: { publishedTime: new Date(frontMatter.date).toISOString() },
        }}
      />
      <div className="post-header mb-8">
        <h1 className="text-3xl mb-1 font-semibold">{frontMatter.title}</h1>
        <h3 className="text-md text-cyan uppercase mb-3 font-semibold">
          {frontMatter.displayDate}
        </h3>
        {frontMatter.tags.map((tag, tIdx) => (
          <Link
            href={`/writing?tag=${tag}`}
            className="inline mr-2 py-1 px-2 rounded-sm bg-gray-800 text-white text-xs hover:text-gray-300"
            key={tIdx}
          >
            {tag}
          </Link>
        ))}
      </div>
      <main
        className={cl(
          "prose",
          "prose-lg",
          "prose-invert",
          "max-w-none",
          "prose-pre:bg-transparent",
          "prose-pre:p-0",
          "prose-code:before:content-['']",
          "prose-code:after:content-['']",
          "prose-p:text-white",
          "prose-a:text-cyan",
          "hover:prose-a:text-white",
          "hover:prose-a:underline",
          "prose-a:no-underline"
        )}
      >
        <MDXRemote {...(source as any)} components={components} />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<
  PostPageProps,
  PostPageStaticParams
> = async ({ params }) => {
  if (!params) {
    throw new Error("Not able to produce props");
  }

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath, remarkMdxCodeMeta],
      rehypePlugins: [rehypeKatex],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data as PostFrontmatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths<
  PostPageStaticParams
> = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
