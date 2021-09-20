import React from 'react'
import Sstepper from './../components/Sstepper'
import Hero from './../components/Hero'
import Treatments from '../components/Treatments'
import { Navbar2, SideBar } from './../components/Navbar'
import { Login, SignUp } from './../components/AccountForm'
import Footers from '../components/Footer/Footers'
import Footer from '../components/Footer/Footer'
import Accordian from './../components/Accordian'
const TestPage = () => {
  return (
    <div>
      <Navbar2 />
      <Login />
      <Accordian />
      <Footer />
    </div>
  )
}

export default TestPage
