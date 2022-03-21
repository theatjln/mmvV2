import { useState } from "react";
import { decode } from "html-entities";
import NewsletterInfo from "./NewsletterInfo";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailValue, setEmailValue] = useState();
 
  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);
    setEmailValue(email);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    setEmailValue("");
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="w-full flex flex-wrap my-6">
        {/* FORM INFO NOTIFICATION */}
        <div className="w-full flex justify-center items-center mb-4">
          <NewsletterInfo
            status={status}
            error={error}
            message={message}
            getMessage={getMessage}
          />
        </div>

        {/* INPUT DIV */}
        <div className="justify-center relative flex flex-wrap items-center mb-3 w-full">
          <input
            className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-4/12"
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Write your email here..."
            onKeyUp={(event) => handleInputKeyEvent(event)}
            value={emailValue}
          /> 

          {/* SUBSCRIBE BUTTON */}
          <button
            className="z-40 uppercase ml-6 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleFormSubmit}
          >
            <i className="lg:text-blueGray-800 text-blueGray-800 fas fa-bell text-lg leading-lg rotate31" />
          </button>
        </div>
      </div>

      <style>
        {`
          .rotate31 {
              transform: rotate(31deg);
          } 
        `}
      </style>
    </>
  );
};

export default NewsletterForm;
