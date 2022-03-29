import React from "react";

export default function Subheading({ children }) {
  return (
    <p className="banner-subheading md:w-2/3 mx-auto tracking-widest text-base xl:text-2xl leading-relaxed text-indigo-100 px-5 md:px-0">
      {children}
    </p>
  );
}
