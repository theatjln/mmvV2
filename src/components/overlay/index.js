import React from "react";

export default function Overlay({ children, style }) {
  return <div className={`overlay w-full h-full ${style}`}>{children}</div>;
}
