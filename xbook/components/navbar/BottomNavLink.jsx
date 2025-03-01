'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const BottomNavLink = ({href,icon}) => {
    const path = usePathname()
  return (
    <Link className={`text-main transition-all duration-300 flex items-center justify-center w-full h-full bg-white ${path == href && 'text-white bg-sec'}`} href={href}>
        {icon}
    </Link> 
  )
}

export default BottomNavLink