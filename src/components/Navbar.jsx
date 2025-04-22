"use client";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks.jsx";

const Navbar = () => {
  useEffect(() => {
    const handleLinkClick = (e) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("data-href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const links = document.querySelectorAll(".header-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[100px] bg-gradient-to-b 
        from-[#0b080c] to-[#0b080c00] z-[9998] pointer-events-none"
      />

      <header
        className="flex max-w-[var(--cMaxWidth)] w-[var(--cWidth)] justify-between 
        -mb-[100px] box-border fixed left-1/2 -translate-x-1/2 top-0 z-[9999] 
        transition-all duration-300 ease-in-out py-7 xl:py-9"
      >
        <span className="font-display font-semibold tracking-wider xl:text-2xl text-xl">
          Zunaira Asif
        </span>

        <div className="flex md:flex-row flex-col md:items-center items-end md:gap-16 gap-2 xl:text-lg text-base">
          <a
            href="#about"
            data-href="#about"
            className="header-link font-medium"
          >
            <HoverLinks text="ABOUT" />
          </a>

          <a
            href="#projects"
            data-href="#projects"
            className="header-link font-medium"
          >
            <HoverLinks text="PROJECTS" />
          </a>

          <a
            href="#contact"
            data-href="#contact"
            className="header-link font-medium"
          >
            <HoverLinks text="CONTACT" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
