import React from "react";

const About = () => {
  return (
    <div
      className="flex lg:flex-row flex-col justify-between items-start lg:px-40 
      md:px-20 px-10 md:pt-20 pt-10 lg:gap-36 md:gap-20 gap-10"
    >
      <div className="flex flex-col justify-center gap-10 w-full">
        <h1 className="md:text-8xl text-7xl text-gray-300">
          ABOUT <br />
          <span className="text-purple-400 animate-pulse">ME</span>
        </h1>
        <span className="xl:text-sm text-xs text-gray-300 tracking-wide leading-5">
          For me, development isn't just about writing code — it's about
          creating solutions that deliver real value. Client partnerships are at
          the heart of my work. <br /> I believe the best results come from
          close collaboration, clear communication, and a shared commitment to
          excellence. Whether you need a dynamic web app or a sleek interactive
          interface, I'll be with you at every step—from concept to deployment
          and beyond.
        </span>
      </div>

      <div
        className="flex flex-col justify-center tracking-wide gap-5 border 
        border-purple-400 p-5 rounded-lg text-sm shadow-lg w-full"
      >
        <span>
          I don’t just build UIs — I build trust. I specialize in crafting
          responsive applications. My code isn't just functional — it's
          scalable, maintainable and performance-optimized. <br /> <br />
        </span>

        <div className="flex flex-col gap-2 text-center">
          <span className="text-base text-purple-400">What drives me?</span>
          <span>
            Solving tough technical puzzles and staying ahead of the curve. I
            approach every project with equal parts analytical thinking and
            creative problem-solving.
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-base text-purple-400">Why Me?</span>
          <ul className="list-disc list-inside text-xs leading-5">
            <li>Understand your needs and deliver a high-quality solution.</li>
            <li>Responsive and flexible design over all screens.</li>
            <li>24/7 availability.</li>
            <li>Best quality work with 100% satisfaction.</li>
            <li>Recreate or redesign the existing design with clean code.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
