//modules
import Head from "next/head";

//components
import Footer from "../footer";
import Header from "../header";
import Nav from "../header/nav";

export default function Layout({
  children,
  bgVidSrc,
  bloggerDetails,
  audioSrc,
  uploadedBgVideo,
  photoGalleryUploads,
  featuredVblogGalleryUploads,
  videoGalleryUploads,
  heading,
  subheading,
}) {
  const style = `layout container-fluid text-base xl:text-lg w-screen`;

  return (
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
        bgVidSrc={bgVidSrc}
        uploadedBgVideo={uploadedBgVideo}
        photoGalleryUploads={photoGalleryUploads}
        featuredVblogGalleryUploads={featuredVblogGalleryUploads}
        videoGalleryUploads={videoGalleryUploads}
        heading={heading}
        subheading={subheading}
      />
      <main className="w-screen">{children}</main>
      <Footer {...bloggerDetails} />
    </div>
  );
}
