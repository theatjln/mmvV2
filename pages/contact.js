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
import PageTitle from "../src/components/pageTitle";
import PageContent from "../src/components/pageContent";

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
  const bgVideo = `https:${homepageData.videoUploadBackground.fields.file.url}`;
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
        uploadedBgVideo={bgVideo}
      >
        {/* Page Content */}
        <PageContent>
          <PageTitle>Contact</PageTitle>
          <div className="container pt-10 md:pt-0 pb-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-shadow-md">
                Contact Us
              </h1>
              {/* FORM RESPONSE MESSAGE */}
              {/* CONTINUE LATER, MAKE THIS FUNCTION */}
              {responseAlert.message.length > 0 && (
                <Alert responseAlert={responseAlert} />
              )}
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-300 text-shadow-md">
                Please fill out this form and we will contact you within 24
                hours.
              </p>
            </div>
            <div className="md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <form
                  method="POST"
                  onSubmit={handleSubmit(submitHandler)}
                  className="flex flex-wrap mb-20"
                >
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      {/*   <label
                        htmlFor="fullName"
                        className="leading-7 text-sm text-white text-shadow-xl"
                      >
                        Name
                      </label> */}
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
                        placeholder="Name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-indigo-700 placeholder-opacity-60 font-medium"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      {/*  <label
                        htmlFor="email"
                        className="leading-7 text-sm text-white text-shadow-xl"
                      >
                        Email
                      </label> */}
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
                        placeholder="Email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-indigo-700 placeholder-opacity-60 font-medium"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      {/*   <label
                        htmlFor="message"
                        className="leading-7 text-sm text-white text-shadow-xl"
                      >
                        Message
                      </label> */}
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
                        placeholder="Message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder-indigo-700 placeholder-opacity-60 font-medium"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto text-white bg-indigo-700 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg"
                      type="submit"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </form>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center px-4 md:px-0">
                  <span className="inline-flex">
                    <SocialIcons {...bloggerDetails} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
        {/* end Page Content */}
      </Layout>
    );
}
