// modules
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useEffect, useState } from "react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Spinner({ isLoading }) {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#4F46E5");

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="sweet-loading"> 
      <PropagateLoader
        color={color}
        loading={loading}
        css={override}
        size={15}
        speedMultiplier={1}
      />
    </div>
  );
}
