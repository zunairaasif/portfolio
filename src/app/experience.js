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
    <div className="flex flex-col items-center justify-center my-20">
      <h2
        className="md:text-7xl text-6xl leading-[70px] font-normal text-center bg-gradient-to-t 
        from-[#7f40ff] to-white bg-clip-text text-transparent mb-[90px]"
      >
        My career <span>&</span>
        <br /> experience
      </h2>

      <div
        className="relative h-auto lg:mx-40 md:mx-20 mx-10"
        ref={timelineRef}
      >
        <div className="career-timeline">
          <div className="career-line" ref={lineRef}></div>
          <div className="career-dot" ref={dotRef}></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 md:ml-0 ml-6">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-2xl">Frontend Developer</span>
              <span className="text-purple-400">Freelance</span>
            </div>
            <span className="text-xs  mt-2">Jan 2024 - Now</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            sit non ipsum temporibus quidem, deserunt eaque officiis mollitia
            ratione suscipit repellat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 md:ml-0 ml-6 my-10">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-2xl">React.js/Next.js Developer</span>
              <span className="text-purple-400">Altcode Labs</span>
            </div>
            <span className="text-xs mt-2">Oct 2022 - Dec 2023</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            sit non ipsum temporibus quidem, deserunt eaque officiis mollitia
            ratione suscipit repellat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 md:ml-0 ml-6">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-2xl">React.js Intern</span>
              <span className="text-purple-400">
                Global Software Consulting
              </span>
            </div>
            <span className="text-xs  mt-2">July 2022 - Sep 2022</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            sit non ipsum temporibus quidem, deserunt eaque officiis mollitia
            ratione suscipit repellat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
