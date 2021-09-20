import React from 'react'
import { useGlobalContext } from '../context/context'

const MenuBtn = () => {
  const { isSideBarOpen } = useGlobalContext()
  return (
    <div className={`${isSideBarOpen ? 'menu-btn open' : 'menu-btn'}`}>
      <div className='menu-btn__burger'></div>
    </div>
  )
}

export default MenuBtn
