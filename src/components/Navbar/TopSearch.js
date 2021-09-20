import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { useGlobalContext } from '../../context/context'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './componenet.css'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import Badge from '@material-ui/core/Badge'
import Tooltip from '@material-ui/core/Tooltip'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import Navsearch from '../Navsearch'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'blue',
  },
  otherButton: {
    marginLeft: '1px',
  },
  Navbar: {
    backgroundColor: '#fff',
    minHeight: 140,
    overflow: 'hidden',
  },
  Draw: {
    overflow: 'hidden',
  },
}))

export default function TemporaryDrawer() {
  const { openItems, items, isSideBarOpen, closeSideBar } = useGlobalContext()
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  let amount = 1
  const matches = useMediaQuery('(max-width:786px)')

  const open = Boolean(anchorEl)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <AppBar
        position='static'
        style={{ overflow: 'visible' }}
        className={classes.Navbar}
      >
        <Toolbar>
          <Tooltip title='menu' arrow>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              color='primary'
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant='h6' className={classes.title}>
            Photos
          </Typography>
          <Tooltip title='search' arrow>
            <IconButton
              edge='start'
              className={classes.otherButton}
              aria-label='Search'
              color='primary'
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title='basket' arrow>
            <IconButton
              edge='start'
              className={classes.otherButton}
              aria-label='Basket'
              color='primary'
            >
              {amount >= 1 ? (
                <Badge badgeContent={amount} color='secondary'>
                  <LocalGroceryStoreIcon />
                </Badge>
              ) : (
                <LocalGroceryStoreOutlinedIcon />
              )}
            </IconButton>
          </Tooltip>
          {!auth && (
            <div style={{ alignItems: 'center' }}>
              {matches ? (
                <Tooltip title='Log In' arrow>
                  <IconButton
                    edge='start'
                    className={classes.menuButton}
                    aria-label='Search'
                    color='primary'
                    onClick={() => setAuth(true)}
                  >
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Button
                  color='primary'
                  variant='outlined'
                  style={{ backgroundColor: 'transparent' }}
                  onClick={() => setAuth(true)}
                >
                  LOG IN /SIGN UP
                </Button>
              )}
            </div>
          )}
          {auth && (
            <div>
              <Tooltip title='account' arrow>
                <IconButton
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='primary'
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleChange}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
          <Navsearch />
        </Toolbar>
      </AppBar>
    </>
  )
}
