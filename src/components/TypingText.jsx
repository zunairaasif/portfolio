"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="xl:text-4xl md:text-3xl text-snowWhite text-xl"
      sequence={[
        "Frontend Developer",
        3000,
        "React.js Developer",
        3000,
        "Shopify Developer",
        3000,
        "Next.js Developer",
        3000,
      ]}
    />
  );
};

export default TypingText;
