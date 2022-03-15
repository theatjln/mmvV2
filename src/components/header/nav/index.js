import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  console.log(router.pathname);
  
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/` && `font-bold`
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/blog` && `font-bold`
          }`}
        >
          Blog
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/about` && `font-bold`
          }`}
        >
          About
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/contact` && `font-bold`
          }`}
        >
          Contact
        </a>
      </Link>
    </nav>
  );
}
