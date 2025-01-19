import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex w-full flex-col h-dvh bg-gray-50 justify-between">
      <div className="flex relative  flex-col h-auto">
        <div className="bg-white sticky top-0 w-full z-40">

        <NavBar />
        </div>
        <div className="flex relative w-full py-4  md:w-2/3 mx-auto h-auto">
            <SideBar />
          <div className=" flex  w-full flex-col justify-between h-full p-5">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
