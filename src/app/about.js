"use client";
import { CardBody, CardContainer } from "@components/ui/3d-card";
import { HeroHighlight, Highlight } from "@components/ui/hero-highlight";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:py-10 py-20 lg:px-40 md:px-20 px-10"
    >
      <div
        className="flex lg:flex-row flex-col lg:justify-between
        justify-center items-center lg:gap-26 gap-0"
      >
        <div className="flex flex-col justify-center gap-10 w-full">
          <h1 className="md:text-8xl text-7xl text-gray-300">
            ABOUT <br />
            <span className="text-purple-400 animate-pulse">ME</span>
          </h1>
          <span className="xl:text-sm text-xs text-gray-300 tracking-wide leading-5">
            Myself Zunaira Asif — your trusted developer. I'm here to create
            your websites & web applications with responsive and creative
            designs. I will be your competent developer as I have an experience
            of 3 years. I have build many projects that not only look appealing
            but also very performant.
            <br /> <br /> For me, development isn't just about writing code,
            it's about creating solutions that deliver real value. Client
            partnerships are at the heart of my work. I believe the best results
            come from close collaboration, clear communication, and a shared
            commitment to excellence.
          </span>
        </div>

        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl border
            dark:hover:shadow-purple-500/[0.1] dark:bg-transparent dark:border-white/[0.2] 
            border-black/[0.1] w-full h-auto rounded-xl p-6 dark:hover:border-purple-900"
          >
            <span>
              I don’t just build UIs — I build trust. I specialize in crafting
              responsive applications. My code isn't just functional — it's
              scalable, maintainable and performance-optimized. <br /> <br />
            </span>

            <div className="flex flex-col gap-2 text-center">
              <span className="text-base text-purple-400">What drives me?</span>
              <span>
                Solving tough technical puzzles and staying ahead of the curve.
                I approach every project with equal parts analytical thinking
                and creative problem-solving.
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-base text-purple-400">Why Me?</span>
              <ul className="list-disc list-inside text-xs leading-5">
                <li>
                  Understand your needs and deliver a high-quality solution.
                </li>
                <li>Responsive and flexible design over all screens.</li>
                <li>24/7 availability.</li>
                <li>Best quality work with 100% satisfaction.</li>
                <li>
                  Recreate or redesign the existing design with clean code.
                </li>
              </ul>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <span className="text-xl text-center tracking-widest font-light">
        Whether you need a dynamic web app or a sleek interactive interface,
        I'll be with you at every step —{" "}
        <Highlight className="text-black dark:text-white">
          from concept to deployment and beyond.
        </Highlight>
      </span>
    </div>
  );
};

export default About;
