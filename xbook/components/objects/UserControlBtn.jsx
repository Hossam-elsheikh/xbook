import Link from 'next/link'
import React from 'react'

const UserControlBtn = ({action,href}) => {
  return (
    <Link className='bg-main text-white font-medium px-4 py-2 rounded-full text-sm' href={href || '/'} >
        {action}
    </Link>
  )
}

export default UserControlBtn