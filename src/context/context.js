import React, { useState, useContext } from 'react'
import { Children } from 'react'
import { NavLinks } from '../components/Navbar/navData'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [items, setItems] = useState('')
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })
  // Hamid
  const openItems = (text) => {
    setItems(text)
  }
  const openSideBar = () => {
    setIsSideBarOpen(true)
  }
  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }
  // dani
  const openSubMenu = (text, coordinates) => {
    const page = NavLinks.find((link) => {
      return link.page === text
    })

    setPage(page)
    setLocation(coordinates)

    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        isSubMenuOpen,
        openSubMenu,
        closeSideBar,
        closeSubMenu,
        openSideBar,
        location,
        openItems,
        items,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
