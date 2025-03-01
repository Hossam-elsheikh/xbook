import React from 'react'

const ContainerVert = ({children,className}) => {
  return (
    <div className={`flex flex-col  md:gap-3 ${className}`}>
        {children}
    </div>
  )
}

export default ContainerVert