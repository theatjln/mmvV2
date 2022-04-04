// modules
import Head from "next/head";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import { useState } from "react";

// helpers
import { getClient, getData } from "../src/helpers/client";

// components
import Layout from "../src/components/layout";
import Cta from "../src/components/cta";
import AboutExcerpt from "../src/components/aboutExcerpt";
import Banner from "../src/components/banner";
import Reviews from "../src/components/reviews";
import Spinner from "../src/components/spinner";
import Wrapper from "../src/components/wrapper";
import Button from "../src/components/button";
import Overlay from "../src/components/overlay";

const dummyImages = [
  {
    imgSrc: `https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
  {
    imgSrc: `https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
  },
];

const dummyVideos = [
  {
    vidSrc: `https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761`,
  },
  {
    vidSrc: `https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761`,
  },
];

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
  const bgVideo = `https:${homepageData.videoUploadBackground.fields.file.url}`;
  const router = useRouter();

  const photoGalleryUploads = homepageData.photoGalleryUploads.map((data) => {
    return { imgSrc: `https:${data.fields.file.url}` };
  });

  const featuredVblogGalleryUploads =
    homepageData.featuredBlogGalleryUploads.map((data) => {
      return { vidSrc: `https:${data.fields.file.url}` };
    });

  const videoGalleryUploads = homepageData.videoGalleryUploads.map((data) => {
    return { vidSrc: `https:${data.fields.file.url}` };
  });

  /* modal state */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }
  /* end modal state */

  /* conditional spinner */
  if (!homepageData || !bloggerDetails || !aboutpageData || !audio)
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
        photoGalleryUploads={photoGalleryUploads || dummyImages}
        featuredVblogGalleryUploads={featuredVblogGalleryUploads || dummyVideos}
        videoGalleryUploads={videoGalleryUploads || dummyVideos}
        heading={homepageData.heading}
        subheading={homepageData.subheading}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      >
        <Head>
          <title>Home - Markus Markus Viajero</title>
          <meta name="description" content="Homepage: Blog for fun viajeros" />
        </Head>
        {/* css default position: static */}
        <Wrapper
          style={`relative w-screen ${
            router.pathname === `/` ? `h-300%` : ``
          } md:h-0`}
        />
        <AboutExcerpt {...bloggerDetails} {...aboutpageData} />
        <Cta />
        <Reviews />

        <Wrapper
          style={`button-wrapper w-screen -mt-20 mb-20 flex justify-end container px-5 py-24 lg:px-20 mx-auto`}
        >
          <Button style="" onClick={handleModalOpen}>
            Write Testimonial
          </Button>
        </Wrapper>
      </Layout>
    );
}
