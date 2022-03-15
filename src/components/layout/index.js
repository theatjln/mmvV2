import React from "react";
import Footer from "../footer";
import Header from "../header";
import HeaderBackground from "../header/headerBackground";

export default function Layout({ children }) {
  return (
    <div className="container-fluid relative">
      <Header /> 
      <HeaderBackground />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
