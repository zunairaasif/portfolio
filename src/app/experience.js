"use client";
import { useEffect, useRef } from "react";

import "@styles/experience.css";
import { LinkPreview } from "@components/ui/link-preview";

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

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 lg:ml-0 md:ml-12 ml-6">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="xl:text-3xl text-2xl">Frontend Developer</span>
              <span className="text-purple-400 xl:text-xl text-base">
                Freelance
              </span>
            </div>
            <span className="xl:text-base text-xs mt-2">Jan 2024 - Now</span>
          </div>
          <div className="flex flex-col xl:text-base text-xs tracking-wide leading-5 font-extralight gap-2">
            <span>
              In my freelance journey, along with expertise in frontend, I have
              gained foundational knowledge of <b>backend development</b> with
              <b>Node.js</b> and <b>Express.js</b>, building simple APIs and
              handling basic server-side logic.{" "}
            </span>
            <span>
              Through this time, I’ve successfully collaborated with multiple
              clients, consistently meeting <b>tight deadlines</b> with{" "}
              <b>100% client satisfaction</b> — turning many into{" "}
              <b>long-term partners</b>. I deepened my expertise in frontend
              development by translating complex <b>Figma designs</b> into
              pixel-perfect, fully <b>responsive</b> interfaces with the help of
              multiple UI libraries and packages. I also gained hands-on
              experience with <b>Shopify</b> customization.
            </span>
            <span>
              Additionally, I have experience of integrating <b>Stripe</b>,{" "}
              <b>AWS S3 bucket</b> and <b>complex third-party APIs</b>, which
              strengthened my problem-solving and debugging <b>abilities</b> in
              real-world projects. This phase significantly <b>enhanced</b> my
              adaptability, communication skills and ability to deliver
              high-quality solutions under pressure. Still I'm keeping myself{" "}
              <b>up to date</b> with the latest industry trends and
              technologies.
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 lg:ml-0 ml-6 md:ml-12 my-10">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="xl:text-3xl text-2xl">
                React.js/Next.js Developer
              </span>

              <LinkPreview
                className="w-fit"
                url="https://www.linkedin.com/company/alt-code-labs/"
              >
                <span className="text-purple-400 xl:text-lg text-base">
                  Altcode Labs
                </span>
              </LinkPreview>
            </div>
            <span className="xl:text-sm text-xs mt-2">Oct 2022 - Dec 2023</span>
          </div>
          <span className="xl:text-base text-xs tracking-wide leading-5 font-extralight">
            Implemented industry best practices for code quality and
            maintainability. Worked extensively with <b>3D</b> frameworks and
            libraries. Actively participated in{" "}
            <b>code reviews and debugging sessions</b>, assisting in identifying
            and resolving issues efficiently. Played a key role in{" "}
            <b>optimizing application</b> performance to enhance user
            experience. Successfully delivered multiple projects{" "}
            <b>on time by prioritizing tasks</b>, managing workloads
            effectively, and ensuring consistent communication across the team.
          </span>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 lg:ml-0 md:ml-12 ml-6">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <span className="xl:text-3xl text-2xl">React.js Intern</span>
              <LinkPreview
                className="w-fit"
                url="https://www.linkedin.com/company/global-software-consulting/"
              >
                <span className="text-purple-400 xl:text-lg text-base">
                  Global Software Consulting
                </span>
              </LinkPreview>
            </div>
            <span className="xl:text-sm text-xs mt-2">
              July 2022 - Sep 2022
            </span>
          </div>
          <span className="xl:text-base text-xs tracking-wide leading-5 font-extralight">
            Learned to develop <b>responsive and user-friendly</b> websites and
            web applications. Collaborated closely with designers and product
            managers in agile environments. Integrated <b>RESTful APIs</b> to
            build dynamic, data-driven applications. Learned how to consistently
            deliver high-quality work within <b>tight deadlines</b> through
            effective time management.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
