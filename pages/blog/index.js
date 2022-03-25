// modules
import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../../src/helpers/client";

// components
import Layout from "../../src/components/layout";
import BlogList from "../../src/components/blogList";
import Spinner from "../../src/components/spinner";
import PageTitle from "../../src/components/pageTitle";

export async function getStaticProps() {
  const client = createClient(getClient());
  return {
    props: {
      homepageData: await getData(client, "homepage"),
      blogs: await getData(client, "title"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      audio: await getData(client, "audio"),
    },
  };
}

export default function BlogPage({
  homepageData,
  blogs,
  bloggerDetails,
  audio,
}) {
  const audioSrc = `https:${audio.fields.src.fields.file.url}`;

  /* conditional spinner */
  if (!homepageData || !blogs || !bloggerDetails || !audio)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner isLoading={true} />
      </div>
    );
  /* end conditional spinner */ else
    return (
      <Layout
        bgVidSrc={homepageData.backgroundVideo}
        bloggerDetails={bloggerDetails}
        audioSrc={audioSrc}
      >
        <Head>
          <title>Vblog - Markus Markus Viajero</title>
          <meta name="description" content="Blog Page: Blog for fun viajeros" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="lg:w-4/6 mx-auto md:mt-0 flex flex-col text-gray-600 body-font relative items-center h-full px-0 md:p-10">
          <PageTitle>VBlog</PageTitle>
          <div className="container px-5 py-24 max-w-none">
            <div className="flex flex-col items-center w-full">
              <BlogList blogs={blogs} />
            </div>
          </div>
        </section>
      </Layout>
    );
}
