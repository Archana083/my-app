import Image from "next/image";
import Header from "./Components/Header";
import HeroSection from "./Components/heroSection";

export default function Home() {
  return (
    <div
      className="relative min-h-screen
      before:content-[''] before:absolute
      before:left-1/2 before:-translate-x-1/2                       
     before:w-[1516px] before:h-[1008px]
      before:bg-radial-custom
      before:rounded-[50%/50%]                
      before:pointer-events-none before:-top-1/2 before:-z-10 before:blur-[4.728rem] before:opacity-10 overflow-x-hidden"
    >
      <div className="flex py-5 2xl:px-[13.75rem] lg:px-16 px-10 flex-col justify-center items-center gap-[0.625rem]">
        <Header />
      </div>
      <HeroSection />
    </div>
  );
}
