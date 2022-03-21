import { useState, useEffect } from "react";
import { decode } from "html-entities";

// PROBLEM: if status exists, remove the component after 7 seconds

const NewsletterInfo = ({ status, error, message, getMessage }) => {
  const [willDisplay, setWillDisplay] = useState(false);

  useEffect(() => {
    if (status) { 
      setWillDisplay(true);

      setTimeout(() => {
        setWillDisplay(false);
      }, 7000);
    }
  }, [status]);

  return (
    <>
      {willDisplay && (
        <div className="newsletter-form-info text-base font-medium p-2 rounded w-4/12">

          {status === "sending" && (
            <div className="text-orange-500">Sending...</div>
          )}

          {status === "error" || error ? (
            <div
              className="newsletter-form-error text-red-500"
              dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
            />
          ) : null}

          {status === "success" && status !== "error" && !error && (
            <div
              className="text-emerald-500"
              dangerouslySetInnerHTML={{ __html: decode(message) }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default NewsletterInfo;
