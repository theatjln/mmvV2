import React from 'react'

export default function PageTitle({children}) {
  return (
    <div className="text-start w-full absolute left-4 top-0 md:top-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-100">
        {children}
      </h1>
      <div className="h-1 w-20 bg-indigo-700 rounded"></div>
    </div>
  );
}
