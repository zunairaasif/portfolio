import ContactInfo from "@components/contactInfo";
import Spline from "@splinetool/react-spline/next";

const Contact = () => {
  return (
    <div id="contact" className="grid lg:grid-cols-2 grid-cols-1">
      <div className="h-[500px] overflow-hidden">
        <div className="h-[560px]">
          <Spline scene="https://prod.spline.design/X1HWOK5-C9qAhYfl/scene.splinecode" />
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default Contact;
