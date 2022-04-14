import Head from "next/head";
import { createClient } from "contentful";

// helpers
import { getClient, getData } from "../src/helpers/client";

// components
import Footer from "../src/components/footer";
import Wrapper from "../src/components/wrapper";
import FullpageMediarender from "../src/components/fullpageMediarender";

export async function getStaticProps() {
  const client = createClient(getClient());

  return {
    props: {
      bloggerDetails: await getData(client, "bloggerDetails"),
      photoGalleryImages: await getData(client, "photoGalleryReference"),
    },
  };
}

export default function FullpageImages({ bloggerDetails, photoGalleryImages }) {
  return (
    <>
      <Head>
        <title>Full Page Carousel - Markus Markus Viajero</title>
        <meta
          name="description"
          content="Full Page Carousel: for Assets of Markus Markus Viajero"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="fullpagemediarender-page container-fluid text-base xl:text-lg w-screen px-0 mx-0">
        <Wrapper style="w-full flex flex-col text-gray-600 body-font relative items-center h-full text-base">
          <FullpageMediarender photoGalleryImages={photoGalleryImages} />
        </Wrapper>
      </main>
      <Footer {...bloggerDetails} />
    </>
  );
}
