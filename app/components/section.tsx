import Spline from "@splinetool/react-spline";

const Section = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 px-8 pt-8 items-center">
            <div className="flex-1 text-left space-y-4">
                <div className="text-[40px] leading-tight text-gray-600">
                    Welcome to my portfolio! I am a software engineer.
                </div>
                <div className="text-[40px] leading-tight text-black">
                    Have a look at my projects and feel free to contact me.
                </div>
            </div>
            <div className="flex-1 h-[50vh] md:h-[80vh] w-full">
                <Spline scene="https://prod.spline.design/C0qbOpPBe09j1M1s/scene.splinecode" />
            </div>
            <div className="flex-1">
                <Spline scene="https://prod.spline.design/2vxfF9EKFSVi29gn/scene.splinecode" />
            </div>
        </div>
    );
}

export default Section;
