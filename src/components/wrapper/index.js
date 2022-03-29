import React from "react";

export default function Wrapper({ children, style }) {
  return <div className={style}>{children}</div>;
}
