import React from 'react'
import Cards from '../components/Cards'
import ContactForm from './../components/ContactForm'
import Header from '../components/Header'
import { NavBar } from '../components/NavBar'
import SearchBar from '../components/SearchBar'
// import SideBar from '../components/SideBar'
import Slider from '../components/Slider'
import { SubMenu } from '../components/SubMenu'
import { useGlobalContext } from '../context/context'
// import SubMenu from '../components/SubMenu'
// import Footer from '../components/Header'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const Home = () => {
  const { closeSubMenu } = useGlobalContext()
  const matches = useMediaQuery('(max-width:786px)')

  return (
    <>
      <Header />
      {/* <SearchBar /> */}
      {/* {matches && <SideBar />}
      <div
        className='slider_nav'
        // onMouseOver={handleSubMenu}
      ></div> */}
      {/* <NavBar /> */}
      <Slider />
      <SubMenu />
      <Cards />
      <ContactForm />
    </>
  )
}

export default Home
