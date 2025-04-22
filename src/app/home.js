import TypingText from "@components/TypingText";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="overflow-hidden h-screen relative">
        <div className="absolute top-0 left-0 h-[110vh] w-full">
          <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
        </div>

        <div className="absolute inset-0 z-20 text-white flex flex-col justify-center xl:mx-80 lg:mx-64 md:mx-20 mx-10">
          <div className="text-white max-w-4xl w-full flex flex-col xl:space-y-6 space-y-3">
            <div className="flex flex-col justify-center space-y-1">
              <h2 className="text-purple-300 xl:text-2xl md:text-xl text-lg font-light tracking-widest">
                Hey! I'm
              </h2>

              <h1 className="xl:text-6xl md:text-5xl text-3xl font-bold uppercase tracking-wider leading-tight">
                Zunaira <span className="text-purple-400">Asif</span>
              </h1>
            </div>

            <TypingText />

            <p className="xl:text-base text-sm text-gray-300 xl:max-w-3xl max-w-2xl leading-relaxed">
              As a passionate developer, I thrive on building intuitive and
              dynamic applications that deliver exceptional user experiences. I
              am dedicated to writing clean, efficient code and constantly
              improving my skills to stay ahead in the ever-evolving tech
              landscape. I aim to transform ideas into interactive,
              high-performance applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full transition">
                See My Work
              </button>
              <a
                target="_blank"
                href="https://wa.me/+923034774200"
                className="border border-white hover:border-purple-400 text-white hover:text-purple-300 font-medium px-6 py-2 rounded-full transition"
              >
                Contact Me
              </a>
            </div>

            <div className="pt-6 xl:text-base text-sm text-gray-400">
              Let’s build something cool together 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
