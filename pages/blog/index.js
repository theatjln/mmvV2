// modules
import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../../src/helpers/client";

// components
import Layout from "../../src/components/layout";
import BlogList from "../../src/components/blogList";

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
  return (
    <Layout
      bgVidSrc={homepageData.backgroundVideo}
      bloggerDetails={bloggerDetails}
      audioSrc={audioSrc}
    >
      <Head>
        <title>Blog - Markus Markus Viajero</title>
        <meta name="description" content="Blog Page: Blog for fun viajeros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font md:top-0 top-40 relative md:mb-0 mb-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-200">
                Blogs
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <BlogList blogs={blogs} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
