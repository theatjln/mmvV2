import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/">
      <a className="flex title-font font-medium items-center text-gray-900 mb-0">
       {/*  <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg> */}
        <span className="ml-3 text-lg font-display">Markus Markus Viajero</span>
      </a>
    </Link>
  );
}
