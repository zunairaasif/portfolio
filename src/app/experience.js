"use client";
import { useEffect, useRef } from "react";
import "@styles/experience.css";

const Experience = () => {
  const timelineRef = useRef(null);
  const dotRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current || !dotRef.current || !lineRef.current) return;

      const timeline = timelineRef.current;
      const dot = dotRef.current;
      const line = lineRef.current;

      // Wait until element is visible and has height
      if (timeline.offsetHeight === 0) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const offsetTop = timeline.getBoundingClientRect().top + window.scrollY;
      const offsetHeight = timeline.offsetHeight;

      const start = offsetTop - windowHeight;
      const end = offsetTop + offsetHeight;

      let progress = (scrollTop - start) / (end - start);
      progress = Math.max(0, Math.min(1, progress));

      dot.style.top = `${progress * 100}%`;
      line.style.height = `${progress * 100}%`;
      line.style.top = "0";
    };

    const handle = () => requestAnimationFrame(onScroll);
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    requestAnimationFrame(onScroll);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:my-20 my-5">
      <h2
        className="md:text-7xl text-6xl leading-[70px] font-normal text-center bg-gradient-to-t 
        from-[#7f40ff] to-white bg-clip-text text-transparent md:mb-[90px] mb-[80px]"
      >
        My career <span>&</span>
        <br /> experience
      </h2>

      <div className="relative h-auto lg:mx-40 md:mx-20 mx-7" ref={timelineRef}>
        <div className="career-timeline">
          <div className="career-line" ref={lineRef}></div>
          <div className="career-dot" ref={dotRef}></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 md:ml-0 ml-6">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="xl:text-3xl text-2xl">Frontend Developer</span>
              <span className="text-purple-400 xl:text-lg text-base">
                Freelance
              </span>
            </div>
            <span className="xl:text-sm text-xs mt-2">Jan 2024 - Now</span>
          </div>
          <span className="xl:text-base text-sm tracking-wide leading-5 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            sit non ipsum temporibus quidem, deserunt eaque officiis mollitia
            ratione suscipit repellat.
          </span>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 md:ml-0 ml-6 my-10">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="xl:text-3xl text-2xl">
                React.js/Next.js Developer
              </span>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/alt-code-labs/"
                className="text-purple-400 hover:text-purple-300 xl:text-lg text-base"
              >
                Altcode Labs
              </a>
            </div>
            <span className="xl:text-sm text-xs mt-2">Oct 2022 - Dec 2023</span>
          </div>
          <span className="xl:text-base text-sm tracking-wide leading-5 font-extralight">
            Implemented best practices for code quality and maintainability.
            Actively participated in code reviews and debugging issues. Assisted
            in optimizing application performance. Successfully delivered
            projects within deadlines, prioritized tasks and managed time
            effectively.
          </span>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 md:ml-0 ml-6">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="xl:text-3xl text-2xl">React.js Intern</span>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/global-software-consulting/"
                className="text-purple-400 hover:text-purple-300 xl:text-lg text-base"
              >
                Global Software Consulting
              </a>
            </div>
            <span className="xl:text-sm text-xs mt-2">
              July 2022 - Sep 2022
            </span>
          </div>
          <span className="xl:text-base text-sm tracking-wide leading-5 font-extralight">
            Learned to develop responsive and user-friendly websites and web
            applications. Collaborated closely with designers and product
            managers in agile environments. Integrated RESTful APIs to build
            dynamic, data-driven applications. Learned how to consistently
            deliver high-quality work within tight deadlines through effective
            time management.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
