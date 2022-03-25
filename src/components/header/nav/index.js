// modules
import Link from "next/link";
import { useRouter } from "next/router";
import uniqid from "uniqid";
import { useState } from "react";

// components
import SubscribeButton from "../subscribeButton";
import Audio from "../../audio";
import Brand from "../brand";

export default function Nav({ audioSrc }) {
  const router = useRouter();
  const classActive = `font-display text-xl font-black`;
  const [navbarOpen, setNavbarOpen] = useState(false);

  let pageNavs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "VBlog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  pageNavs = pageNavs.map((item) => (
    <Link href={item.link} key={uniqid()}>
      <a
        className={`md:mr-8 hover:scale-125 ${
          (router.pathname === item.link ||
            (router.pathname === `/blog/[slug]` && item.name === `VBlog`)) &&
          classActive
        }`}
      >
        {item.name}
      </a>
    </Link>
  ));

  return (
    <div className="full-nav-wrapper container-fluid w-full mx-auto flex flex-col lg:flex-row p-5 lg:py-0 items-center fixed bg-indigo-800 text-base tracking-wider leading-relaxed z-20 text-white w-screen">
      <div className="brand-and-burger flex justify-between w-full lg:w-max">
        <Brand />
        <div className="hamburger-and-audio flex lg:hidden mr-3">
          {/* hamburger icon */}
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none "
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={`fill-indigo-700 ${
                navbarOpen ? `fa fa-close` : `fas fa-bars`
              }`}
            ></i>
          </button>
          {/* end hamburger icon */}
          <Audio src={audioSrc} />
        </div>
      </div>

      {/* right nav for big screens, fullscreen nav for small screens */}
      <nav
        className={`the-nav lg:ml-auto ${
          navbarOpen
            ? `flex flex-col w-screen h-screen justify-evenly items-center`
            : `hidden lg:flex lg:min-w-min lg:justify-between lg:items-center lg:min-h-min`
        }`}
      >
        {pageNavs}
        <SubscribeButton />
        <div className="hidden lg:flex">
          <Audio src={audioSrc} />
        </div>
      </nav>
      {/* end right nav for big screens, fullscreen nav for small screens */}
    </div>
  );
}
