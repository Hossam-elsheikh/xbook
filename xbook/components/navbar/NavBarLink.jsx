'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBarLink = ({href,title,className}) => {
    const path = usePathname()
    
    
  return (
    <li>
      <Link className={`text-sm font-semibold hover:text-hover ${path == href && 'text-hover'} ${className}`} href={href}>
        {title}
      </Link>
    </li>
  );
};

export default NavBarLink;
