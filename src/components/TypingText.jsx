"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="xl:text-3xl md:text-2xl text-xl text-purple-300 my-4"
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
