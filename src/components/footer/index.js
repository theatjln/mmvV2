import SocialIcons from "../socialIcons";

export default function Footer(props) {
  const { name, instagramUsername } = props;
  return (
    <footer className="text-gray-600 w-full body-font px-5 py-8 mx-auto flex items-center flex-col md:flex-row">

      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl font-display">{name}</span>
      </a>

      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2022 Mark Markus Viajero —
        <a
          href={`https://instagram.com/${instagramUsername}`}
          className="text-gray-600 ml-1 font-display text-lg"
          rel="noopener noreferrer"
          target="_blank"
        >
          @{instagramUsername}
        </a>
      </p>

      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <SocialIcons {...props} />
      </span>

    </footer>
  );
}
