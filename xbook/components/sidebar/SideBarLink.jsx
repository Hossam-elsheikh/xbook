"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBarLink = ({ href, title, Icon }) => {
  const path = usePathname();

  return (
    <li
      className={`hover:bg-white  w-full  ${
        path == href && "text-hover bg-slate-100"
      }`}
    >
      <Link
        className={`text-md w-full p-2 px-10 flex items-center gap-2  font-semibold hover:text-hover   ${
          path == href && "text-hover "
        }`}
        href={href}
      >

       {Icon}
        <h1>{title}</h1>
      </Link>
    </li>
  );
};

export default SideBarLink;
