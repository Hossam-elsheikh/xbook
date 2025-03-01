import React from "react";
import Logo from "@/public/colored.svg";
import Image from "next/image";
const NavBarLink = ({ href, title, className }) => {
  return (
    <li>
      <a href={href} className={`text-xl font-semibold text-main hover:text-hover ${className}`}>
        {title}
      </a>
    </li>
  );
};
const LandPageNavBar = () => {
  return (
    <nav className="flex justify-between p-3 md:p-5 items-center">
      <a href="#hero">

      <Image src={Logo} className="w-28  " alt="XBook" />
      </a>
      <ul className="flex gap-5">
        <NavBarLink className="hidden lg:block" href="#signup" title="Process" />
        <NavBarLink className="hidden lg:block" href="#about" title="About XBook" />
        <NavBarLink className="hidden lg:block" href="#accounts" title="Join us" />
        <NavBarLink className="block bg-main text-white px-3 rounded-full hover:bg-white hover:outline py-1 lg:hidden" href="#accounts" title="Join us" />

      </ul>
    </nav>
  );
};

export default LandPageNavBar;
