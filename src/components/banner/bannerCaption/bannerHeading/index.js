import React from "react";

export default function Heading({ children }) {
  const style = `banner-heading flex items-center justify-center md:w-1/2 w-full text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-thin font-display leading-relaxed mb-5 md:mb-0 text-white`;

  return <h1 className={style}>{children}</h1>;
}
