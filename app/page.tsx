"use client";
import Image from "next/image";
import Header from "./components/header";
import Spline from "@splinetool/react-spline";
import section from "./components/section";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="w-[70vw] text-[40px] leading-none text-gray-600 px-8 pt-[50px]">
        Welcome to my portfolio! and I am a software engineer.
      </div>
      <div className="w-[80vw] text-[80] leading-none text-black px-8">
        <br/>
        Have a look at my projects and feel free to contact me. <br/>
      </div>
      <div className="h-[40vh] w-[80vw] mx-auto">
        <Spline scene="https://prod.spline.design/C0qbOpPBe09j1M1s/scene.splinecode" />
      </div>
    </div>
  );
}
