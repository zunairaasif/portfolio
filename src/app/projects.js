"use client";
import { Carousel } from "react-responsive-carousel";
import { AnimatePresence, motion } from "motion/react";
import React, { useRef, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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

  useEffect(() => {
    if (selectedProject) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div
      id="projects"
      className="flex flex-col pt-10 pb-0 lg:ml-40 lg:mr-0 md:ml-10 md:mr-10 ml-5 mr-5"
    >
      <div className="md:text-6xl text-5xl font-medium flex items-center md:gap-5 gap-3">
        <span>My</span>
        <h2 className="bg-gradient-to-t from-[#7f40ff] to-white bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      <section
        ref={containerRef}
        className="lg:block hidden relative w-full"
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
              className={`h-[90vh] flex w-[350px] flex-shrink-0 flex-col justify-start gap-5 border-r
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

              <div className="flex flex-col">
                <h4 className="xl:text-lg text-base">Description and Tools</h4>
                <div
                  className="flex flex-col gap-1 xl:text-base text-sm font-light 
                  text-zinc-400 mt-1"
                >
                  <span className="line-clamp-2">{item.desc}</span>
                  <span
                    onClick={() => openModal(item)}
                    className="w-fit text-indigo-400 font-medium cursor-pointer hover:underline"
                  >
                    Read more →
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-center">
                <div className="relative group">
                  <img
                    loading="lazy"
                    alt={item.name}
                    src={item.img[0]}
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

      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        className="lg:hidden block"
      >
        {projectDetails.map((item, index) => (
          <div
            key={index}
            className="my-10 md:p-10 p-5 flex flex-col border border-[#363636] rounded-xl"
          >
            <div className="flex w-full justify-between mb-4">
              <h3 className="md:text-5xl text-4xl font-bold">0{index + 1}</h3>
              <div className="text-right">
                <h4 className="text-lg">{item.name}</h4>
                <p className="text-sm font-light text-zinc-400 mt-1">
                  {item.type}
                </p>
              </div>
            </div>

            <div className="flex flex-col text-start md:mb-10 mb-5">
              <h4 className="md:text-lg text-base">Description and Tools</h4>
              <div
                className="flex flex-col gap-1 xl:text-base text-sm font-light 
                text-zinc-400 mt-1"
              >
                <span className="line-clamp-2">{item.desc}</span>
                <span
                  onClick={() => openModal(item)}
                  className="w-fit text-indigo-400 font-medium cursor-pointer hover:underline"
                >
                  Read more →
                </span>
              </div>
            </div>

            <div className="flex w-full justify-center">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block"
                >
                  <img
                    loading="lazy"
                    alt={item.name}
                    src={item.img[0]}
                    className="max-w-full max-h-[150px] md:max-h-[200px] lg:max-h-[250px] transition-transform group-hover:scale-105"
                  />
                </a>
              ) : (
                <div className="relative group">
                  <img
                    loading="lazy"
                    alt={item.name}
                    src={item.img[0]}
                    className="max-w-full max-h-[150px] md:max-h-[200px] lg:max-h-[250px]"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={closeModal}
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%]
              bg-neutral-900 p-6 rounded-lg z-50 lg:max-w-3xl md:max-w-2xl max-w-xs w-full max-h-[84vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 left-4 text-white hover:text-indigo-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <Carousel
                autoPlay={true}
                className="my-7"
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
              >
                {selectedProject.img.map((image, index) => (
                  <div key={index} className="h-64 md:h-80 lg:h-96">
                    <img
                      src={image}
                      loading="lazy"
                      alt={index + 1}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>

              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <h2 className="md:text-3xl text-2xl font-bold text-white">
                      {selectedProject.name}
                    </h2>
                    <p className="text-purple-400">{selectedProject.type}</p>
                  </div>

                  {selectedProject.url && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={selectedProject.url}
                      className="px-4 py-3 bg-black/40 text-white rounded-full
                      hover:bg-black/20 h-fit font-bold"
                    >
                      ↗
                    </a>
                  )}
                </div>

                <div className="border-t border-neutral-700 pt-4">
                  <h3 className="md:text-xl text-lg font-medium text-white mb-2">
                    Description
                  </h3>
                  <p className="md:text-sm text-xs text-neutral-300">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="border-t border-neutral-700 pt-4">
                  <h3 className="text-xl font-medium text-white mb-2">
                    Tools & Technology
                  </h3>

                  <div className="flex flex-wrap gap-3 items-center">
                    {selectedProject.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="rounded-full py-1 px-3 border border-neutral-300 md:text-sm 
                        text-xs text-neutral-300"
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const projectDetails = [
  {
    name: "FILÀTO Studio",
    type: "Shopify",
    url: "https://www.filato.co/",
    tools: ["Shopify"],
    desc: "I customized a Shopify theme to align precisely with the client’s vision, refining both design and functionality. Beyond selling clothing, the site also offers tailored services. Made several code-level adjustments to ensure an optimal user experience and meet specific client requirements.",
    img: [
      "/images/filato-studio/1.png",
      "/images/filato-studio/2.png",
      "/images/filato-studio/3.png",
      "/images/filato-studio/4.png",
      "/images/filato-studio/5.png",
      "/images/filato-studio/6.png",
    ],
  },
  {
    name: "FILÀTO Tailoring",
    type: "Next.js",
    url: "",
    tools: [
      "Next.js",
      "TypeScript",
      "MUI",
      "Redux",
      "Stripe",
      "AWS S3",
      "Tailwind",
      "Framer Motion",
      "Lottie React",
      "React Toastify",
    ],
    desc: "Built a responsive and user-friendly tailoring service platform using Next.js, ensuring seamless performance with backend integration and an intuitive interface. Contributed to the design process by providing reference designs and offering constructive feedback to align with client expectations. Integrated AWS S3 bucket for secure and efficient handling of user-uploaded reference images. Implemented Stripe for secure and hassle-free payment processing, enhancing user convenience. Managed application state efficiently using Redux. Enhanced UI/UX with animations and transitions using Framer Motion, along with other packages for a modern and engaging experience and proper error handling. Assisted in backend development to ensure smooth functionality and data flow.",
    img: [
      "/images/filato-tailoring/1.png",
      "/images/filato-tailoring/2.png",
      "/images/filato-tailoring/3.png",
      "/images/filato-tailoring/4.png",
      "/images/filato-tailoring/5.png",
      "/images/filato-tailoring/6.png",
      "/images/filato-tailoring/7.png",
      "/images/filato-tailoring/8.png",
      "/images/filato-tailoring/9.png",
    ],
  },
  {
    name: "Grazle",
    type: "Next.js",
    url: "https://grazle.co.in/?store=grazle",
    tools: ["Next.js", "TypeScript", "MUI", "Redux", "Figma"],
    desc: "Spearheaded UI improvements and responsiveness fixes, ensuring a seamless and visually consistent experience across all devices. Identified and resolved front-end issues to match the exact figma design, optimizing performance and enhancing user interaction. Advocated for and implemented clean code practices to improve code readability and maintainability, ensuring smoother collaboration across the development team. Conducted comprehensive audit of all required API integrations, identifying missing connections. Implemented necessary API integrations to complete system functionality.",
    img: [
      "/images/grazle/1.png",
      "/images/grazle/2.png",
      "/images/grazle/3.png",
      "/images/grazle/4.png",
    ],
  },
  {
    name: "Habit Coin",
    type: "React.js",
    url: "",
    tools: ["React.js", "JavaScript", "Figma", "Tailwind", "Solana"],
    desc: "Translated Figma designs into pixel-perfect, responsive UI components with high fidelity. Delivered a fully responsive implementation across all breakpoints while meeting aggressive deadlines and a clean code quality. Ensured design-system consistency across every interactive element and visual component. Optimized frontend performance without compromising design integrity. Executed rapid iterations to align development with design specs under tight timelines.",
    img: [
      "/images/habit-coin/1.png",
      "/images/habit-coin/2.png",
      "/images/habit-coin/3.png",
      "/images/habit-coin/4.png",
      "/images/habit-coin/5.png",
      "/images/habit-coin/6.png",
      "/images/habit-coin/7.png",
      "/images/habit-coin/8.png",
      "/images/habit-coin/9.png",
      "/images/habit-coin/10.png",
    ],
  },
  {
    name: "mlpbarmory",
    type: "Next.js",
    url: "https://mlpbarmory.com/",
    tools: ["Next.js", "TypeScript", "Tailwind"],
    desc: "I developed the minting portal and designed engaging email templates aimed at capturing user attention. Additionally, I contributed to the project by integrating APIs and resolving UI and responsiveness issues to ensure a seamless user experience across all devices. Resolved critical responsiveness issues, achieving 100% mobile compatibility. Implemented design refinements that increased overall user satisfaction.",
    img: [
      "/images/mlpb/1.png",
      "/images/mlpb/2.png",
      "/images/mlpb/3.png",
      "/images/mlpb/4.png",
      "/images/mlpb/5.png",
      "/images/mlpb/6.png",
      "/images/mlpb/7.png",
      "/images/mlpb/8.png",
      "/images/mlpb/9.png",
      "/images/mlpb/10.png",
      "/images/mlpb/11.png",
      "/images/mlpb/12.png",
      "/images/mlpb/13.png",
    ],
  },
  {
    name: "Finarch",
    type: "React.js",
    url: "https://www.finarch.co/",
    tools: ["React.js", "JavaScript", "MUI", "Redux"],
    desc: "Successfully rebuilt and modernized the entire website using React, ensuring full responsiveness and adherence to industry best practices. Implemented Redux for efficient state management, optimizing performance and scalability. Integrated all backend APIs seamlessly, ensuring smooth data flow and real-time updates. One of the key challenges was revamping the 'Get a Quote' workflow, which I resolved with an intuitive and user-friendly solution, delivering high-quality results.",
    img: [
      "/images/finarch/1.png",
      "/images/finarch/2.png",
      "/images/finarch/3.png",
      "/images/finarch/4.png",
      "/images/finarch/5.png",
      "/images/finarch/6.png",
    ],
  },
  {
    name: "AltCode Labs",
    type: "Next.js",
    url: "https://www.altcodelabs.com/",
    tools: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
    ],
    desc: "Designed and developed a high-performance web application tailored to the company's specifications. This challenging project allowed me to enhance my expertise in modern UI animations and advanced responsive design, delivering a seamless user experience across all devices with best practices.",
    img: [
      "/images/altcode/1.png",
      "/images/altcode/2.png",
      "/images/altcode/3.png",
      "/images/altcode/4.png",
      "/images/altcode/5.png",
      "/images/altcode/6.png",
      "/images/altcode/7.png",
      "/images/altcode/8.png",
    ],
  },
];

export default Projects;
