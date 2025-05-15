"use client";
import React, { useRef, useEffect, useState } from "react";

const Projects = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const projectDetails = [
    {
      name: "FILÁTO Studio",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/filato-studio/1.png",
      url: "https://www.filato.co/",
    },
    {
      name: "FILÁTO Tailoring",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/filato-tailoring/1.png",
      url: "",
    },
    {
      name: "Grazle",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/grazle/1.png",
      url: "https://grazle.co.in/?store=grazle",
    },
    {
      name: "Habit Coin",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/habit-coin/1.png",
      url: "",
    },
    {
      name: "mlpbarmory",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/mlpb/1.png",
      url: "https://mlpbarmory.com/",
    },
    {
      name: "Finarch",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/finarch/1.png",
      url: "https://www.finarch.co/",
    },
    {
      name: "AltCode Labs",
      type: "e-commerce",
      desc: "Javascript, TypeScript, React, Threejs",
      img: "/images/altcode/1.png",
      url: "https://www.altcodelabs.com/",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    const onScroll = () => {
      if (window.innerWidth < 1024) return;

      const offsetTop = container.offsetTop;
      const scrollY = window.scrollY;
      const maxScroll = slider.scrollWidth - window.innerWidth;

      const startScroll = offsetTop + window.innerHeight;

      const distance = Math.min(Math.max(scrollY - startScroll, 0), maxScroll);
      slider.style.transform = `translateX(-${distance}px)`;
    };

    const updateSizes = () => {
      if (slider) {
        setSliderWidth(slider.scrollWidth);
      }
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    updateSizes();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateSizes);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateSizes);
    };
  }, []);

  return (
    <div className="flex flex-col lg:gap-0 gap-10 pt-10 pb-0 lg:ml-36 md:ml-20 ml-5">
      <div className="text-6xl font-medium flex items-center gap-5">
        <span>My</span>
        <h2 className="bg-gradient-to-t from-[#7f40ff] to-white bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      <section
        ref={containerRef}
        className="relative w-full"
        style={{
          height:
            viewportWidth >= 1024
              ? `${sliderWidth - viewportWidth + viewportHeight}px`
              : "auto",
        }}
      >
        <div
          ref={sliderRef}
          className={`${viewportWidth >= 1024 ? "sticky top-0 h-screen" : ""} 
          flex w-max items-center transition-transform duration-200 ease-out 
          pr-[10vw] flex-wrap gap-y-10`}
        >
          {projectDetails.map((item, index) => (
            <div
              key={index}
              className={`h-[80vh] flex w-[350px] flex-shrink-0 flex-col justify-start gap-5 border-r
              border-[#363636] px-8 py-10 md:w-[450px] md:px-12 md:py-12 lg:w-[500px] 
              border-y ${index % 2 === 1 ? "flex-col-reverse" : ""}`}
            >
              <div className="flex w-full justify-between mb-4">
                <h3 className="text-5xl font-bold">0{index + 1}</h3>
                <div className="text-right">
                  <h4 className="xl:text-xl text-lg">{item.name}</h4>
                  <p className="xl:text-base text-sm font-light text-zinc-400 mt-1">
                    {item.type}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="xl:text-lg text-base">Tools and features</h4>
                <p className="xl:text-base text-sm font-light text-zinc-400 mt-1">
                  {item.desc}
                </p>
              </div>
              <div className="flex w-full justify-center">
                <div className="relative group">
                  <img
                    alt={item.name}
                    src={item.img}
                    className="max-w-full max-h-[150px] md:max-h-[200px] lg:max-h-[250px]"
                  />
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 w-[50px] h-[50px] rounded-full 
                      bg-gray-800 flex items-center justify-center text-[25px] opacity-0 
                      shadow-[0_0_10px_rgba(255,255,255,0.5),inset_0_0_10px_#393939] 
                      group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
