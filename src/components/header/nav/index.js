import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const classActive = `font-display text-lg font-bold`;

  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center">
      <Link href="/">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/` && classActive
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`mr-5 hover:text-gray-900 ${
            (router.pathname === `/blog` ||
              router.pathname === `/blog/[slug]`) &&
            classActive
          }`}
        >
          Blog
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/about` && classActive
          }`}
        >
          About
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`mr-5 hover:text-gray-900 ${
            router.pathname === `/contact` && classActive
          }`}
        >
          Contact
        </a>
      </Link>
    </nav>
  );
}
