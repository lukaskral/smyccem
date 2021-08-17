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
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          <h3>Co se chystá</h3>
          <ul>
            <li>
              <div
                style={{ background: "url(/assets/actions/patkultury.jpg)" }}
              >
                <h5>12. 12. 2021, 18.00 Pátkultuty</h5>
                <p>
                  <a href="as">Online -Na FCB</a>
                </p>
              </div>
            </li>
          </ul>
          {/* <h4>Co už bylo</h4>
          <ul>
            <li></li>
          </ul> */}
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
