import React from 'react'

const ActionBtn = ({Icon,text,fill,size,color}) => {
  return (
    <div className="flex gap-2 w-1/3 py-2 bg-slate-50 items-center justify-center ">
    <Icon size={size} color={color} fill={fill} />
    <p>{text}</p>
</div>
  )
}

export default ActionBtn