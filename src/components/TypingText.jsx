"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="text-xl text-purple-300 my-4 text-center sm:text-2xl sm:mb-2 md:text-left"
      sequence={[
        "Frontend Developer",
        4000,
        "React.js Developer",
        4000,
        "Next.js Developer",
        4000,
        "Shopify Developer",
        4000,
      ]}
    />
  );
};

export default TypingText;
