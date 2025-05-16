"use client";
import {
  FaHtml5,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaShopify,
  FaCss3Alt,
} from "react-icons/fa";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import React from "react";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BackgroundBeamsWithCollision } from "@components/ui/background-beams-with-collision";

const Skills = () => {
  return (
    <BackgroundBeamsWithCollision
      className="flex flex-col items-center justify-center gap-16 
      lg:px-40 md:px-20 px-5 md:py-20 py-10"
    >
      <h1 className="uppercase xl:text-7xl text-6xl font-bold tracking-widest md:ml-0 ml-4">
        Tech <span className="md:ml-0 ml-10">Stack</span>
      </h1>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:gap-y-10 gap-y-5 lg:gap-x-10 md:gap-x-5 gap-x-0">
        <div
          className="rounded-[22px] bg-gradient-to-b to-neutral-100 dark:from-neutral-950 
          dark:to-neutral-800 h-full flex flex-col gap-10 p-7 bg-white dark:bg-zinc-900"
        >
          <h2
            className="text-xl bg-gradient-to-b from-purple-200 
            to-purple-500 bg-clip-text text-transparent"
          >
            Libraries & Frameworks
          </h2>

          <div className="grid grid-cols-3 items-center text-center justify-center">
            <div className="flex flex-col gap-3 items-center font-light">
              <FaReact className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>React.js</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <RiNextjsFill className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <RiTailwindCssFill className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div
          className="rounded-[22px] bg-gradient-to-b to-neutral-100 dark:from-neutral-950 
          dark:to-neutral-800 h-full flex flex-col gap-10 p-7 bg-white dark:bg-zinc-900"
        >
          <h2
            className="text-xl bg-gradient-to-b from-purple-200 
            to-purple-500 bg-clip-text text-transparent"
          >
            Tools & Platforms
          </h2>

          <div className="grid grid-cols-3 items-center text-center justify-center">
            <div className="flex flex-col gap-3 items-center font-light">
              <FaShopify className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>Shopify</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <FaGithub className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>GitHub</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <FaFigma className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>Figma</span>
            </div>
          </div>
        </div>

        <div
          className="rounded-[22px] bg-gradient-to-b to-neutral-100 dark:from-neutral-950 
          dark:to-neutral-800 h-full flex flex-col gap-10 p-10 bg-white dark:bg-zinc-900"
        >
          <h2
            className="text-xl bg-gradient-to-b from-purple-200 
            to-purple-500 bg-clip-text text-transparent"
          >
            Languages & Markup
          </h2>

          <div className="grid md:grid-cols-4 grid-cols-3 items-center text-center justify-center">
            <div className="flex flex-col gap-3 items-center font-light">
              <FaHtml5 className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <FaCss3Alt className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <RiJavascriptFill className="xl:size-9 size-8 hover:-translate-y-1.5 duration-300" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <BiLogoTypescript className="xl:size-9 size-8 hover:-translate-y-1.5 duration-300" />
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        <div
          className="rounded-[22px] bg-gradient-to-b to-neutral-100 dark:from-neutral-950 
          dark:to-neutral-800 h-full flex flex-col gap-10 p-7 bg-white dark:bg-zinc-900"
        >
          <h2
            className="text-xl bg-gradient-to-b from-purple-200 
            to-purple-500 bg-clip-text text-transparent"
          >
            Backend Development
          </h2>

          <div className="grid grid-cols-2 items-center text-center justify-center">
            <div className="flex flex-col gap-3 items-center font-light">
              <FaNodeJs className="xl:size-8 size-7 hover:-translate-y-1.5 duration-300" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col gap-3 items-center font-light">
              <SiExpress className="xl:size-9 size-8 hover:-translate-y-1.5 duration-300" />
              <span>Express.js</span>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Skills;
