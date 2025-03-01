import AboutUs from "@/components/landpage/AboutUs";
import Accounts from "@/components/landpage/Accounts";
import HeroSection from "@/components/landpage/HeroSection";
import LandPageFooter from "@/components/landpage/LandPageFooter";
import LandPageNavBar from "@/components/landpage/LandPageNavBar";
import Process from "@/components/landpage/Process";
import PatternImg from '@/public/pattern.jpg';
import Image from "next/image";
const Pattern = ()=>{
  return(
    <div className="w-full h-8 flex">
      <Image src={PatternImg} alt="pattern" className="object-cover w-full" />
    </div>
  )
}
export default function Home() {
  return (
    <div className="flex scroll-smooth flex-col w-full md:w-[70%] mx-auto  h-full justify-between">
      <div className="sticky top-0 z-50 bg-white">
        <LandPageNavBar />
      </div>
      <div className="">
        <HeroSection />
        <Pattern />
        <Accounts />
        <Pattern />
        {/* <Process /> */}
        <AboutUs />
      </div>
      <LandPageFooter />
    </div>
  );
}
