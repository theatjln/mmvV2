// modules
import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../src/helpers/client";

// components
import Layout from "../src/components/layout";
import Cta from "../src/components/cta";
import AboutExcerpt from "../src/components/aboutExcerpt";
import Banner from "../src/components/header/banner";

export async function getStaticProps() {
  const client = createClient(getClient());
  return {
    props: {
      homepageData: await getData(client, "homepage"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      aboutpageData: await getData(client, "aboutpage"),
    },
  };
}

export default function Home({ homepageData, bloggerDetails, aboutpageData }) {
  return (
    <Layout
      bgVidSrc={homepageData.backgroundVideo}
      bloggerDetails={bloggerDetails}
    >
      <Head>
        <title>Home - Markus Markus Viajero</title>
        <meta name="description" content="Homepage: Blog for fun viajeros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AboutExcerpt {...bloggerDetails} {...aboutpageData} />
      <Cta />
    </Layout>
  );
}
