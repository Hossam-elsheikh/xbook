import React from 'react'
import { Telescope } from "lucide-react";
import { BookHeart } from "lucide-react";
import { UserRound } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { Flame } from "lucide-react";
import { History } from "lucide-react";
import { DiamondMinus } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { LogOut } from "lucide-react";
import { Flag } from "lucide-react";
import BottomNavLink from './BottomNavLink';
const MobBottomNav = () => {
    const links = [
        {icon : <Flame/>,href:'/activity'},
        {icon : <LibraryBig/>,href:'/library'},
        {icon : <Telescope/>,href:'/explore'},
        {icon : <BookHeart/>,href:'/favs'},
        {icon : <History/>,href:'/history'},
    ]
  return (
    <div className='flex items-center justify-between border-t  fixed bg-white bottom-0 left-0 w-full h-12 md:hidden'>
        {links.map((link,i)=> <BottomNavLink href={link.href} key={i} icon={link.icon} />)}
    </div>
  )
}

export default MobBottomNav