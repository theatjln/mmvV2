// modules

// components 
import HeaderBackground from "../header/headerBackground";  

export default function Header({ bgVidSrc }) {
  return (
    <header className="header w-screen h-screen text-gray-600 body-font absolute">
      <HeaderBackground bgVidSrc={bgVidSrc} />
    </header>
  );
}
