import React from 'react'
import ExchangeFlame from './Flame'
import Image from 'next/image'

const UserShort = ({avatar,name,exchangesCount,rate}) => {
  return (
    <div className="flex gap-3">
    <div className="flex relative rounded-full w-12 h-12">
      <Image
        objectFit="cover"
        className="rounded-full"
        src={avatar}
        fill
        alt={name}
      />
    </div>
    <div>
      <h1 className="font-semibold">{name}</h1>
      <p className="flex text-sm font-base items-center gap-1">
        {exchangesCount}
        <ExchangeFlame
          size={14}
          fill={"var(--main)"}
          color={"var(--main)"}
        />
        {rate} / 5
      </p>
    </div>
  </div>
  )
}

export default UserShort