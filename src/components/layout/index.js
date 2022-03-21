import React from "react";
import Footer from "../footer";
import Header from "../header";
import HeaderBackground from "../header/headerBackground";
import PolygonComponent from "../polygonComponent";

export default function Layout({ children, bgVidSrc, bloggerDetails, audioSrc }) {
  return (
    <div className="layout container-fluid relative">
      <Header audioSrc={audioSrc} />
      <HeaderBackground bgVidSrc={bgVidSrc} /> 
      <main>{children}</main>
      <Footer {...bloggerDetails} />
    </div>
  );
}
