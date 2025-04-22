import TypingText from "@components/TypingText";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="overflow-hidden h-screen relative">
        <div className="absolute top-0 left-0 h-[110vh] w-full">
          <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
        </div>

        <div className="absolute inset-0 z-20 text-white flex flex-col justify-center mx-64">
          <div className="text-white max-w-4xl w-full space-y-6">
            <div className="space-y-2">
              <h2 className="text-purple-300 text-lg md:text-xl font-light tracking-wide">
                Hey! I'm
              </h2>

              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider leading-tight">
                Zunaira <span className="text-purple-400">Asif</span>
              </h1>
            </div>

            <TypingText />

            <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
              As a passionate frontend developer, I thrive on building intuitive
              and dynamic applications that deliver exceptional user
              experiences. I am dedicated to writing clean, efficient code and
              constantly improving my skills to stay ahead in the ever-evolving
              tech landscape. I aim to transform ideas into interactive,
              high-performance applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full transition">
                See My Work
              </button>
              <button className="border border-white hover:border-purple-400 text-white hover:text-purple-300 font-medium px-6 py-2 rounded-full transition">
                Contact Me
              </button>
            </div>

            <div className="pt-6 text-sm text-gray-400">
              Let’s build something cool together 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
