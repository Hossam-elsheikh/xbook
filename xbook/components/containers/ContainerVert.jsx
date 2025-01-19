import React from 'react'

const ContainerVert = ({children}) => {
  return (
    <div className='flex flex-col gap-3'>
        {children}
    </div>
  )
}

export default ContainerVert