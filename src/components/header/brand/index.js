import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/">
      <a className="flex title-font font-medium items-center text-gray-900 mb-0">
        <span className="ml-3 text-lg font-display">Mark Markus Viajero</span>
      </a>
    </Link>
  );
}
