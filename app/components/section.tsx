import Spline from "@splinetool/react-spline";

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-8 pt-8 items-center">
      <div className="flex-1 text-left space-y-4">
        <div className="text-[40px] leading-tight text-gray-600 pt-24">
          Welcome to my portfolio! <br />I am a front-end developer.
        </div>
        <div className="text-[20px] leading-tight text-black">
          Have a look at my projects and feel free to contact me.
        </div>
      </div>
      <div className="flex-1 h-[100vh] md:h-[100vh] w-full">
        <Spline scene="https://prod.spline.design/RwcVy872LfNDpSMd/scene.splinecode" />
      </div>
    </div>
  );
};

export default Section;
