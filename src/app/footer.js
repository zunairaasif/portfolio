import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <div
      className="flex items-center justify-between mx-10 py-5 border-t 
        border-zinc-900 md:text-sm text-xs text-zinc-400"
    >
      <span>&copy; {year.getFullYear()} All Rights Reserved</span>
      <span>
        Designed & Developed by{" "}
        <span className="text-purple-400">Zunaira Asif</span>
      </span>
    </div>
  );
};

export default Footer;
