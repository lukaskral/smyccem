import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/__blog/post-body";
import Header from "../../components/header";
import Layout from "../../components/layout";
import {
  getPostBySlug,
  getAllPosts,
  getLyricBySlug,
  getAllLyrics,
} from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import React from "react";
import PostHeader from "../../components/__blog/post-header";
import PostTitle from "../../components/__blog/post-title";
import LyricType from "../../types/lyric";

type Props = {
  lyric: LyricType;
};

const Lyric = ({ lyric }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !lyric?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {lyric.title} | Next.js Blog Example with {CMS_NAME}
                </title>
              </Head>
              <PostBody content={lyric.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Lyric;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const lyric = getLyricBySlug(params.slug, ["title", "slug", "content"]);
  const content = await markdownToHtml(lyric.content || "");

  return {
    props: {
      lyric: {
        ...lyric,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const lyrics = getAllLyrics(["slug"]);

  return {
    paths: lyrics.map((lyric) => {
      return {
        params: {
          slug: lyric.slug,
        },
      };
    }),
    fallback: false,
  };
}
