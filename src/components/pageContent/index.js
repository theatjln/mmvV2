import React from 'react'

export default function PageContent({ children }) {
  return  <section className="lg:w-4/6 mx-auto md:mt-0 flex flex-col text-gray-600 body-font relative items-center h-full px-5 md:p-10 text-base">
    {children}
  </section>
}
