"use client";
import { useEffect } from "react";
import { TbNotes } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaUpwork, FaLinkedinIn } from "react-icons/fa6";

import "@styles/links.css";
import HoverLinks from "./HoverLinks";

const Links = () => {
  useEffect(() => {
    const social = document.getElementById("social");

    social.querySelectorAll("span").forEach((item) => {
      const elem = item;
      const link = elem.querySelector("a");

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  const handleDownload = () => {
    const url = "/zunaira-asif_resume.pdf";
    const fileName = url.split("/").pop();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/zunairaasif" target="_blank">
            <FaGithub className="xl:size-9 xl:mb-16" />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/zunaira-a-46b072216/"
          >
            <FaLinkedinIn className="xl:size-9 xl:mb-10" />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&to=zunairaa.dev@gmail.com"
          >
            <MdOutlineMail className="xl:size-9 xl:mb-5" />
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~018da9dad38cf15c98"
          >
            <FaUpwork className="xl:size-9" />
          </a>
        </span>
      </div>

      <button
        className="resume-button bottom-10 md:right-5 right-1"
        onClick={handleDownload}
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </button>
    </div>
  );
};

export default Links;
