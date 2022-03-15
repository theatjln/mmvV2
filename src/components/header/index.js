import React from "react";
import Brand from "./brand";
import Hero from "./banner";
import Nav from "./nav";
import SubscribeButton from "./SubscribeButton";
import HeaderBackground from "./headerBackground";

export default function Header() {
  return (
    <header className="header text-gray-600 body-font">
      <div className="container-fluid w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white z-10">
        <Brand />
        <Nav />
        <SubscribeButton />
      </div> 
    </header>
  );
}
