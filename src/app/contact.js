import ContactDetail from "@components/ContactDetail";
import Spline from "@splinetool/react-spline/next";

const Contact = () => {
  return (
    <div id="contact" className="grid lg:grid-cols-2 grid-cols-1 lg:pb-0 pb-10">
      <div className="xl:h-[600px] h-[500px] overflow-hidden">
        <div className="xl:h-[660px] h-[560px]">
          <Spline scene="https://prod.spline.design/X1HWOK5-C9qAhYfl/scene.splinecode" />
        </div>
      </div>
      <ContactDetail />
    </div>
  );
};

export default Contact;
