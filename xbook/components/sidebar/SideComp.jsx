import React from 'react'
import ContainerVert from '../containers/ContainerVert'
import SideBox from './SideBox'

const SideComp = ({children}) => {
  return (
    <ContainerVert className='sticky top-24 hidden lg:flex'>
       {children}
    </ContainerVert>
  )
}

export default SideComp