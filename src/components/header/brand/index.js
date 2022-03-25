import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/">
      <a className="flex title-font font-medium items-center mb-0">
        <span className="ml-3 lg:ml-0 text-lg font-display">Mark Markus Viajero</span>
      </a>
    </Link>
  );
}
