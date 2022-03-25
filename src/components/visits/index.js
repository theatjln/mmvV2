import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import countapi from "countapi-js";

const VisitsCounter = () => {
  const router = useRouter();
  const noHeaderCaption =
    router.pathname === "/terms" ||
    router.pathname === "/privacyPolicy" ||
    router.pathname === "/profile";

  const [visitsCount, setVisitsCount] = useState(0);
  const formattedVisitsCount = String(visitsCount).replace(
    /(.)(?=(\d{3})+$)/g,
    "$1,",
  ); 

  const wrapperStyle = `visits-wrapper flex flex-col text-center text-black text-xs absolute bg-white p-2 rounded-lg ml-2 z-10 ${router.pathname !== `/contact` ? `bottom-0` : `bottom-72`} lg:top-14 right-1 md:right-5 border-solid border-2 border-indigo-400 h-fit`;

  useEffect(() => {
    countapi.visits("global").then((result) => {
      setVisitsCount(result.value);
    });
  }, []);

  return (
    <div className={wrapperStyle}>
      <p className="font-normal text-md">{formattedVisitsCount}</p>
      <p>visits</p>
    </div>
  );
};

export default VisitsCounter;
