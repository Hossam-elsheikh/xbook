import React from "react";
import Logo from "@/public/colored.svg";
import Image from "next/image";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import { BookHeart } from "lucide-react";
import { UserRound } from 'lucide-react';
import { Bell } from 'lucide-react';

import Search from "./Search";

const NavBar = () => {
  return (
    <div className="flex w-full md:w-2/3 bg-white mx-auto justify-between items-center gap-3  py-5 px-6">
      <Image src={Logo} className="w-28" alt="XBook" />
        <Search placeholder='Search any Book, User, Library ...' />
      <nav className="flex items-center gap-5">
        <ul className="flex gap-5">
          <NavBarLink href="/about" title="About XBook" />
          <NavBarLink href="/" title="Contact us" />
        </ul>
        <ul className="flex gap-3">
          <BookHeart />
          <UserRound />
          <Bell />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
