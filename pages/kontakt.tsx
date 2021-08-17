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
          <title>Kontakty - {CMS_NAME}</title>
        </Head>
        <Container>
          <a href="https://www.facebook.com/Trhni-si-smy%C4%8Dcem-100603462205271">
            Facebook
          </a>
          <br />
          <br />
          Kontakt: <br />
          Tomáš Randus - tom.randus@gmail.com, +420 724 023 901
          <br />
          <br />
          <h2>Zvučení</h2>
          Pokud je to možné, hrajeme bez jakéhokoliv dozvučení, v prostorech
          jako jsou budovy divadel, kostely, amfiteátry, galerie. Pokud to
          situace vyžaduje, hrajeme na jediný kondenzátorový mikrofon s
          předzesilovačem s velkou membránou a aardioidní charakteristikou.
          <br />
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
