import fs from "fs";
import matter from "gray-matter";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import Layout from "../components/layout";
import PostFrontmatter from "../types/post-frontmatter";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

interface MDXPost {
  content: string;
  data: PostFrontmatter;
  filePath: string;
}

interface PostIndexProps {
  posts: MDXPost[];
}

export default function PostIndex({ posts }: PostIndexProps) {
  const { query } = useRouter();
  const tag = query.tag && typeof query.tag === "string" ? query.tag : null;

  const postList = posts
    .filter((post) => (tag ? post.data.tags.includes(tag) : true))
    .sort((pA, pB) => pB.data.date - pA.data.date)
    .map((post, idx) => (
      <div className="py-8" key={idx}>
        <h4
          className="text-sm font-semibold text-cyan uppercase"
          role="doc-subtitle"
        >
          {post.data.displayDate}
        </h4>
        <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} key={idx}>
          <div className="hover:opacity-70 transition-opacity">
            <h2 className="text-2xl text-white font-bold">{post.data.title}</h2>
            <p className="text-md mt-2 opacity-80 text-white">
              {post.data.description}
            </p>
          </div>
        </Link>
        <p className="mt-3">
          {post.data.tags.map((tag, tIdx) => (
            <Link
              href={`/writing?tag=${tag}`}
              className="inline mr-2 py-1 px-2 rounded-sm bg-gray-800 text-white text-xs hover:text-gray-300"
              key={tIdx}
            >
              {tag}
            </Link>
          ))}
        </p>
      </div>
    ));

  return (
    <Layout>
      <main>
        <Head>
          <title>Writing | Aditya Rathod</title>
        </Head>
        <NextSeo
          title="Writing"
          description="Musings on tech, life, and whatever else comes to mind."
        />
        <h1 className="text-4xl font-bold mb-4">Writing</h1>
        {tag && (
          <h2 className="text-md font-medium my-2">
            Filtering on tag
            <span className="inline ml-2 py-1 px-2 rounded-sm bg-gray-800 text-white">
              {tag}
            </span>
            <Link
              className="inline ml-5 text-white underline hover:text-gray-200"
              href="/writing"
            >
              Clear
            </Link>
          </h2>
        )}
        {postList}
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
