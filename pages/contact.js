/* DEBUG: CONTACT US PAGE */

// modules
import { createClient } from "contentful";
import { useForm } from "react-hook-form";
import axios from "axios"; 
import { useState } from "react";

// helpers
import { getClient, getData } from "../src/helpers/client";

// components
import Layout from "../src/components/layout";
import SocialIcons from "../src/components/socialIcons";
import Alert from "../src/components/alert";
import Spinner from "../src/components/spinner";

export async function getStaticProps() {
  const client = createClient(getClient());
  return {
    props: {
      homepageData: await getData(client, "homepage"),
      bloggerDetails: await getData(client, "bloggerDetails"),
      audio: await getData(client, "audio"),
    },
  };
}

export default function Contact({ homepageData, bloggerDetails, audio }) {
  const [responseAlert, setResponseAlert] = useState({
    message: "",
    isError: false,
    type: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  async function submitHandler(values) {
    let config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: getValues(),
    };

    try {
      const response = await axios(config);
      // console.log(response);
      if (response.status === 200) {
        reset();
        setResponseAlert({
          message: "Message successfully sent!",
          isError: false,
          type: "Success",
        });
      }
    } catch (err) {
      setResponseAlert({
        message: "Something went wrong. Try sending it later.",
        isError: true,
        type: "Error",
      });
      console.error("Error: ", err);
    }
  }

  const audioSrc = `https:${audio.fields.src.fields.file.url}`;

  /* conditional spinner */
  if (!homepageData || !bloggerDetails || !audio)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner isLoading={true} />
      </div>
    );
  /* end conditional spinner */ else
    return (
      <Layout
        bgVidSrc={homepageData.backgroundVideo}
        bloggerDetails={bloggerDetails}
        audioSrc={audioSrc}
      >
        <section className="text-indigo-200 body-font relative md:top-0 top-24">
          <div className="container px-8 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-indigo-200">
                Contact Us
              </h1>
              {/* FORM RESPONSE MESSAGE */}
              {/* CONTINUE LATER, MAKE THIS FUNCTION */}
              {responseAlert.message.length > 0 && (
                <Alert responseAlert={responseAlert} />
              )}
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-200">
                Please fill out this form and we will contact you within 24
                hours.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <form
                  method="POST"
                  onSubmit={handleSubmit(submitHandler)}
                  className="flex flex-wrap"
                >
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="fullName"
                        className="leading-7 text-sm text-indigo-200"
                      >
                        Name
                      </label>
                      <input
                        {...register("fullName", {
                          required: {
                            value: true,
                            message: "You must enter your full name",
                          },
                        })}
                        type="text"
                        id="name"
                        name="fullName"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-indigo-200"
                      >
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "You must enter your email address",
                          },
                          minLength: {
                            value: 8,
                            message: "This is not long enough to be an email",
                          },
                          maxLength: {
                            value: 120,
                            message: "This is too long",
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "This needs to be a valid email address",
                          },
                        })}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-indigo-200"
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message", {
                          required: {
                            value: true,
                            message: "You need to enter your message",
                          },
                          maxLength: {
                            value: 1000,
                            message:
                              "Your message can't be more than 1000 characters",
                          },
                        })}
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center px-4 md:px-0">
                  {/* <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p> */}
                  <span className="inline-flex">
                    {/* <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a> */}
                    <SocialIcons {...bloggerDetails} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}
