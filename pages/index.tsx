import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import React from "react";
import CoverImage from "../components/cover-image";

type Props = {
  allPosts: Post[];
};

const Index = ({}: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <CoverImage title={"xasxas"} src={"/assets/site/cover001.jpeg"} />
          <h2>Kdo jsme</h2>
          Trhni si smyčcem je šansonový dvojboj mezi punkem a filharmonií. Jsme
          dva, hrajeme jen na 9 strun a celé se to sbalí do větší tašky.
          <h2>Co hrajeme</h2>
          Vlastní tvorbu, texty převážně na aktuální a literární témata.
          Formálně spadáme pod magický realismus ale ještě nám nevolali.
          <h2>Kde hrajeme rádi</h2>V akusticky a nebo jinak zajímavých
          prostorech, mezi skvělými lidmi, v přírodě.
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
