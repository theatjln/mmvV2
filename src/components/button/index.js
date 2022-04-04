import React from "react";

export default function Button({ children, style, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-indigo-700 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded text-lg ${style}`}
    >
      {children}
    </button>
  );
}
