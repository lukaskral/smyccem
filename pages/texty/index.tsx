import Container from "../../components/container";
import MoreStories from "../../components/__blog/more-stories";
import Hero from "../../components/__blog/hero";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts, getAllLyrics } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Post from "../../types/post";
import React from "react";
import MoreLyrics from "../../components/more-lyrics";
import LyricType from "../../types/lyric";
import Link from "next/link";

type Props = {
  lyrics: LyricType[];
};

const Index = ({ lyrics }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Texty | {CMS_NAME}</title>
        </Head>
        <Container>
          <h2>Texty</h2>
          <br />
          <ul>
            {lyrics.map((lyric) => (
              <li>
                <Link href={`/texty/${lyric.slug}`}>
                  <a>{lyric.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const lyrics = getAllLyrics(["title", "slug"]);

  return {
    props: { lyrics },
  };
};
