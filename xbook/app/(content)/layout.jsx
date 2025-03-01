import Footer from "@/components/footer/Footer";
import MobBottomNav from "@/components/navbar/MobBottomNav";
import NavBar from "@/components/navbar/NavBar";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex w-full  flex-col h-dvh bg-gray-50 justify-between">
      <div className="flex relative  flex-col h-auto">
        <div className="bg-white shadow sticky top-0 w-full z-40">
          <NavBar />
        </div>
        <div className="flex relative w-full md:py-4  xl:w-3/4 2xl:w-2/3 mx-auto h-auto">
          <SideBar className="hidden md:flex" />

          <div className=" flex  w-full flex-col justify-between h-full pb-20  md:p-5">
            {children}
            <Footer />
            <MobBottomNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
