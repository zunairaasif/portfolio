"use client";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import React from "react";
import { MdEmail } from "react-icons/md";
import { LinkPreview } from "./ui/link-preview";
import { FaSquareUpwork, FaLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  const contact = [
    {
      title: "Zunaira Asif",
      icon: <FaUserAlt className="xl:size-5 size-4 text-purple-400" />,
    },
    {
      title: "+92 303 4774200",
      icon: <FaPhoneAlt className="xl:size-5 size-4 text-purple-400" />,
      link: () => window.open("https://wa.me/923034774200", "_blank"),
    },
    {
      title: "zunairaa.dev@gmail.com",
      icon: <MdEmail className="xl:size-6 text-purple-400" />,
      link: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&to=zunairaa.dev@gmail.com",
          "_blank"
        ),
    },
    {
      title: "Sahiwal, Pakistan",
      icon: <FaLocationDot className="xl:size-6 text-purple-400" />,
    },
  ];

  const social = [
    {
      link: "https://www.linkedin.com/in/zunaira-asif-9864i/",
      icon: <FaLinkedin className="xl:size-9" />,
    },
    {
      link: "https://github.com/zunairaasif",
      icon: <FaGithubSquare className="xl:size-9" />,
    },
    {
      link: "https://www.upwork.com/freelancers/~018da9dad38cf15c98?mp_source=share",
      icon: <FaSquareUpwork className="xl:size-9" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center lg:gap-12 gap-5 self-center md:ml-10 ml-5">
      <div className="flex flex-col gap-1">
        <span className="lg:text-base text-sm text-gray-400">Feel free to</span>
        <h1 className="lg:text-5xl text-4xl uppercase font-semibold">
          Contact <span className="text-purple-400">Me</span>
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        {contact.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <p className="text-xl mr-6 cursor-pointer duration-300">
              {item.icon}
            </p>
            <span
              onClick={item.link}
              className={`xl:text-xl text-base 
                ${
                  index != 0 && index != 3 && "cursor-pointer hover:underline"
                }`}
            >
              {item.title}
            </span>
          </div>
        ))}

        <div className="flex items-center mt-2">
          <span className="xl:text-2xl text-xl text-gray-300">Social</span>
          <div className="bg-gray-400 w-8 h-[2px] mx-4"></div>

          <div className="flex xl:gap-4 gap-3">
            {social.map((item, index) => (
              <LinkPreview
                url={item.link}
                key={index}
                className="text-3xl text-gray-300 hover:text-purple-400 
                hover:-translate-y-1.5 shadow-lg duration-300 w-fit"
              >
                {item.icon}
              </LinkPreview>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
