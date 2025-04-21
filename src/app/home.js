import "@styles/landing.css";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="overflow-hidden h-screen relative">
        <div className="absolute top-0 left-0 h-[110vh] w-full">
          <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
        </div>

        <div className="absolute inset-0 z-20 text-white flex items-center justify-between mx-64">
          <div className="flex flex-col -mt-40">
            <h2 className="text-purple-300 font-thin text-lg tracking-wider">
              Hey! I'm
            </h2>

            <div className="flex items-center gap-4">
              <h1 className="text-3xl tracking-wide font-medium uppercase">
                Zunaira
              </h1>
              <h1 className="text-3xl tracking-wide font-medium uppercase">
                Asif
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
