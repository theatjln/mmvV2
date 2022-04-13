//modules
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

//components
import Footer from "../footer";
import Header from "../header";
import Nav from "../header/nav";
import Wrapper from "../wrapper";
import Overlay from "../overlay";
import Modal from "../modal";
// import WritetestimonialForm from "../writetestimonialForm";
import WritetestimonialForm from "../../components/testimonials/writetestimonialForm/";

export default function Layout({
  children, 
  bloggerDetails,
  audioSrc,
  uploadedBgVideo,
  fallbackBgImg,
  photoGalleryUploads,
  featuredVblogGalleryUploads,
  videoGalleryUploads,
  heading,
  subheading,
  isModalOpen,
  handleModalOpen,
}) {
  const style = `layout container-fluid text-base xl:text-lg w-screen`;
  const router = useRouter();

  return (
    <>
      {isModalOpen && (
        <Wrapper style="page-overlay-wrapper fixed flex items-center justify-center w-full h-full z-50">
          <Modal>
            {router.pathname === "/" && (
              <WritetestimonialForm handleModalOpen={handleModalOpen} />
            )}
          </Modal>
          <Overlay
            style="page-overlay absolute bg-black opacity-70"
            onClick={handleModalOpen}
          />
        </Wrapper>
      )}

      <div className={style}>
        <Head>
          {/* custom favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          {/* end custom favicon */}
        </Head>
        <Nav audioSrc={audioSrc} />
        <Header
          audioSrc={audioSrc}
          uploadedBgVideo={uploadedBgVideo}
          fallbackBgImg={fallbackBgImg}
          photoGalleryUploads={photoGalleryUploads}
          featuredVblogGalleryUploads={featuredVblogGalleryUploads}
          videoGalleryUploads={videoGalleryUploads}
          heading={heading}
          subheading={subheading}
        />
        <main className="w-screen">{children}</main>
        <Footer {...bloggerDetails} />
      </div>
    </>
  );
}
