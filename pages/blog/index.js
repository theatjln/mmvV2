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
import PageContent from "../../src/components/pageContent";

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
  const bgVideo = `https:${homepageData.videoUploadBackground.fields.file.url}`;
  const bgFallbackImg = `https:${homepageData.fallbackImageBackground.fields.file.url}`;

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
        bloggerDetails={bloggerDetails}
        audioSrc={audioSrc}
        uploadedBgVideo={bgVideo}
        fallbackBgImg={bgFallbackImg}
      >
        <Head>
          <title>Vblog - Markus Markus Viajero</title>
          <meta name="description" content="Blog Page: Blog for fun viajeros" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Page Content */}
        <PageContent>
          <PageTitle>VBlog</PageTitle>
          <div className="container pb-24 md:pb-14 max-w-none">
            <div className="flex flex-col w-full">
              <BlogList blogs={blogs} />
            </div>
          </div>
        </PageContent>
        {/* end Page Content */}
      </Layout>
    );
}
