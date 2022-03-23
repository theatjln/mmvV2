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
import Reviews from "../src/components/reviews";

export async function getStaticProps() {
  const client = createClient(getClient());
  return {
    props: {
      homepageData: await getData(client, "homepage"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      aboutpageData: await getData(client, "aboutpage"),
      audio: await getData(client, "audio"),
    },
  };
}

export default function Home({
  homepageData,
  bloggerDetails,
  aboutpageData,
  audio,
}) {
  const audioSrc = `https:${audio.fields.src.fields.file.url}`;
  return (
    <Layout
      bgVidSrc={homepageData.backgroundVideo}
      bloggerDetails={bloggerDetails}
      audioSrc={audioSrc}
    >
      <Head>
        <title>Home - Markus Markus Viajero</title>
        <meta name="description" content="Homepage: Blog for fun viajeros" />
        <link rel="icon" href="/favicon.ico" />

  
      </Head>
      <Banner
        heading={homepageData.heading}
        subheading={homepageData.subheading}
      />
      <AboutExcerpt {...bloggerDetails} {...aboutpageData} />
      <Cta />
      <Reviews />
    </Layout>
  );
}
