import React from 'react'
import { useGlobalContext } from '../context/context'
import MenuBtn from './MenuBtn'
import { NavLinks } from './navData'

export const NavBar = () => {
  const { openSubMenu, closeSubMenu, setIsSideBarOpen, isSideBarOpen } =
    useGlobalContext()
  const displaySubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    // console.log(page)
    openSubMenu(page, { center, bottom })
  }
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }
  const bars = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <nav className='nav' onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <span onClick={bars}>{/* <MenuBtn /> */}</span>
        </div>

        <ul className='nav-links'>
          {NavLinks.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubMenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
