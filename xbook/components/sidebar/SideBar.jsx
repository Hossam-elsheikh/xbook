import React from "react";
import SideBarLink from "./SideBarLink";
import { Telescope } from "lucide-react";
import { BookHeart } from "lucide-react";
import { UserRound } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { Flame } from "lucide-react";
import { History } from "lucide-react";
import { DiamondMinus } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { LogOut } from 'lucide-react';
import { Flag } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="flex flex-col sticky top-24 h-[88dvh] justify-between pb-4   border-r border-slate-100">
      <div className="flex flex-col gap-3">
        <ul className="flex flex-col">
          <SideBarLink
            href="/explore"
            title="Explore"
            Icon={<Telescope size={20} />}
          />
          <SideBarLink
            href="/profile"
            title="Profile"
            Icon={<UserRound size={20} />}
          />
          <SideBarLink
            href="/library"
            title="Library"
            Icon={<LibraryBig size={20} />}
          />
          <SideBarLink
            href="/activity"
            title="Activity"
            Icon={<Flame size={20} />}
          />
          <SideBarLink
            href="/favs"
            title="Favorites"
            Icon={<BookHeart size={20} />}
          />
        </ul>
        <hr className=" mx-4" />
        <ul className="flex flex-col">
          <SideBarLink
            href="/history"
            title="History"
            Icon={<History size={20} />}
          />
          <SideBarLink
            href="/rules"
            title="Rules"
            Icon={<DiamondMinus size={20} />}
          />
          <SideBarLink
            href="/community"
            title="Community"
            Icon={<MessagesSquare  />}
          />
          <SideBarLink
            href="/report"
            title="Report"
            Icon={<Flag size={20} />}
          />
        </ul>
      </div>
      <ul className="flex flex-col">
        <SideBarLink href="/faq" title="FAQ" Icon={<CircleHelp size={20} />} />
        <SideBarLink href="/logout" title="Logout" Icon={<LogOut size={20}/>} />
      </ul>
    </div>
  );
};

export default SideBar;
