import React from "react";
import Logo from "@/public/colored.svg";
import Image from "next/image";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import { BookHeart } from "lucide-react";
import { UserRound } from "lucide-react";
import { Bell } from "lucide-react";
import { AlignJustify } from "lucide-react";

import Search from "./Search";
import Modal from "../modals/Modal";
import SideBar from "../sidebar/SideBar";

const NavBar = () => {
  return (
    <div className="flex items-center pl-5">
      <Modal
        bodyClasses="w-2/3"
        btnText={
          <AlignJustify className=" hover:text-main hover:cursor-pointer transition-all block md:hidden" />
        }
      >
        <SideBar className="h-dvh " showLogo={true} />
      </Modal>
    <div className="flex w-full xl:w-3/4 2xl:w-2/3 bg-white mx-auto justify-between items-center gap-3  py-3 px-4 md:px-6">
      <Image src={Logo} className="w-20 md:w-28 " alt="XBook" />
      <Search className='hidden md:flex' placeholder="Search any Book, User, Library ..." />
      <nav className="flex items-center gap-5">
        <ul className="flex gap-5">
          <NavBarLink
            className="hidden lg:block"
            href="/about"
            title="About XBook"
          />
          <NavBarLink className="hidden lg:block" href="/" title="Contact us" />
        </ul>
        <ul className=" gap-3 flex">
          <BookHeart />
          <UserRound />
          <Bell />
        </ul>
      </nav>
    </div>
    </div>

  );
};

export default NavBar;
