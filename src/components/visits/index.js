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
  // const wrapperStyle = `absolute z-10 right-1.5r ${
  //   noHeaderCaption ? "bottom-56" : "bottom-120-px"
  // } flex flex-col text-center text-white text-xs`;

  const wrapperStyle = `z-10 flex flex-col text-center text-black text-xs absolute md:top-14 md:right-4 bg-white p-2 rounded-lg`;

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
