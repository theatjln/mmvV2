import React from "react";
import Button from "../button";

export default function WritetestimonialForm({ onClick }) {
  return (
    <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Testimonial
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Write your experience about the Vblog site.
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email or Name
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <Button
        style="text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-base"
        onClick={onClick}
      >
        Post Testimonial
      </Button>
      {/* <p className="text-xs text-gray-500 mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p> */}
    </div>
  );
}
