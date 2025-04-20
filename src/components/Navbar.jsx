"use client";
import { useEffect } from "react";
import "@styles/Navbar.css";
import HoverLinks from "./HoverLinks.jsx";

const Navbar = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
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

    const links = document.querySelectorAll(".header ul a");
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
      <div className="header">
        <span className="navbar-title">Zunaira Asif</span>
        <a
          href="mailto:zunairaa.dev@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          zunairaa.dev@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
