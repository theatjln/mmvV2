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

  const wrapperStyle = `visits-wrapper flex flex-col text-center text-black text-xs bg-white px-8 rounded-lg ml-2 z-10 lg:top-14 right-1 md:right-5 h-fit font-bold my-4 md:my-0`;

  useEffect(() => {
    countapi.visits("global").then((result) => {
      setVisitsCount(result.value);
    });
  }, []);

  return (
    <div className={wrapperStyle}>
      <p className="text-md">{formattedVisitsCount}</p>
      <p>visits</p>
    </div>
  );
};

export default VisitsCounter;
