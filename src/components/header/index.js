// modules

// components
import Brand from "./brand"; 
import Nav from "./nav";
import SubscribeButton from "./subscribeButton";
import Audio from "../audio";

export default function Header({ audioSrc }) {
  return (
    <header className="header text-gray-600 body-font">
      <div className="container-fluid w-full mx-auto flex flex-wrap p-5 md:py-2 md:px-20 flex-col md:flex-row items-center fixed bg-white z-10">
        <Brand />
        <div className="flex p-0 m-0 mt-2 md:mt-0 md:ml-auto">
          <Nav />
          <SubscribeButton />
          <Audio src={audioSrc} />
        </div>
      </div>
    </header>
  );
}
