import React from 'react'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import HelpIcon from '@material-ui/icons/Help'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useGlobalContext } from '../context/context'
const SearchBar = () => {
  const { closeSubMenu } = useGlobalContext()
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }
  return (
    <div className='nav-search' onMouseOver={handleSubMenu}>
      {/* <img src="" alt="" /> */}
      <input type='text' />
      <a href='' style={{ textAlign: 'center' }}>
        <LocalHospitalIcon />
        <p>How it works</p>
      </a>
      <a href=''>
        <HelpIcon />
        <p>help</p>
      </a>
      <a href=''>
        <AccountCircleIcon />
        <p>Account</p>
      </a>
      <a href=''>
        <AddShoppingCartIcon />
        <p>Basket</p>
      </a>
    </div>
  )
}

export default SearchBar
