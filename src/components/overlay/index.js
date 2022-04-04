import React from "react";

export default function Overlay({ children, style, onClick }) {
  return (
    <div className={`overlay w-full h-full ${style}`} onClick={onClick}>
      {children}
    </div>
  );
}
