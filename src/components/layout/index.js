//modules
import Head from "next/head";

//components
import Footer from "../footer";
import Header from "../header";
import HeaderBackground from "../header/headerBackground";

export default function Layout({
  children,
  bgVidSrc,
  bloggerDetails,
  audioSrc,
}) {
  return (
    <div className="layout container-fluid relative">
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
      <Header audioSrc={audioSrc} />
      <HeaderBackground bgVidSrc={bgVidSrc} />
      <main>{children}</main>
      <Footer {...bloggerDetails} />
    </div>
  );
}
