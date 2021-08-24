import Container from "../components/container";
import MoreStories from "../components/__blog/more-stories";
import Hero from "../components/__blog/hero";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({}: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Hudba | {CMS_NAME}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          <h1>HUDBA</h1>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XcMHoApxLNk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XcMHoApxLNk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
