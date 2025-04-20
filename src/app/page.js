import Navbar from "@componentsNavbar";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Spline scene="https://prod.spline.design/2FgeGj4wEkC9t4eR/scene.splinecode" />
    </main>
  );
}
