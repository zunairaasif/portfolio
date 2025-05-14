import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <div
      className="flex md:flex-row flex-col items-center md:gap-0 gap-1 justify-between md:mx-10 mx-5 
      border-t border-zinc-900 md:text-sm text-xs text-zinc-400 md:py-5 py-3"
    >
      <span>&copy; {year.getFullYear()} All Rights Reserved</span>
      <span className="text-end">
        Designed & Developed by{" "}
        <span className="text-purple-400">Zunaira Asif</span>
      </span>
    </div>
  );
};

export default Footer;
