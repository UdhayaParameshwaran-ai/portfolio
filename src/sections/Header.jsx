import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center font-lato items-center fixed top-3 pt-4 w-screen max-w-screen overflow-x-hidden z-10">
      <nav className="flex flex-wrap md:gap-4 p-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#heroSection"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300
           max-w-xs truncate"
        >
          Home
        </a>
        <a
          href="#project"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300
           max-w-xs truncate"
        >
          Project
        </a>
        <a
          href="#about"
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300
           max-w-xs truncate"
        >
          About
        </a>
        <a
          href="#footerOrContacts"
          className="px-4 py-1.5   text-sm font-semibold  transition duration-300
           bg-white rounded-3xl text-gray-900 hover:bg-white/70 hover:text-gray-900 max-w-xs truncate"
        >
          Contacts
        </a>
      </nav>
    </div>
  );
};

export default Header;
