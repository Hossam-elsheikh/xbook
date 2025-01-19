import Image from 'next/image'
import React from 'react'

const BookPost = ({img,title,author,pubYear}) => {
  return (
    <div className='flex gap-3 p-3 rounded-sm bg-slate-50'>
        <div className='relative w-28 h-40 shadow-md shadow-slate-500'>
            <Image src={img} alt={title} fill objectFit='cover'/>
        </div>
        <div>
            <h2 className='font-semibold text-lg'>{title}</h2>
            <h3>By: {author}</h3>
            <p className='opacity-80 text-sm'>Published in {pubYear}</p>
        </div>
    </div>
  )
}

export default BookPost