import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { motion } from 'framer-motion'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import { useClickOutside } from 'react-click-outside-hook'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import Badge from '@material-ui/core/Badge'
import Tooltip from '@material-ui/core/Tooltip'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import Navsearch from './Navsearch'
import { useGlobalContext } from '../../context/context'
import logo from '../../img/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
  },
  navbarr: {
    display: 'grid',
    justifyItems: 'end',
    width: '100vw',
  },
  navbarItems: {
    display: 'grid',
    gridTemplateColumns: '4% 10% 70% 4% 4% 8%',
    '@media (max-width: 800px)': {
      gridTemplateColumns: '4% 10% 54% 12% 10% 8%',
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '4% 10% 48% 13% 13% 9%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 'start',
    color: 'blue',
  },

  logo: {
    height: '65px',
  },
}))
const containerVariants = {
  closee: {
    height: '65px',
    overflow: 'hidden',
    width: '100vw',
  },
  expanded: {
    height: '140px',
    width: '100vw',
    overflow: 'visible',
  },
}

const containerTransition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
}
export default function MenuAppBar() {
  const classes = useStyles()
  const [ref, isClickedOutside] = useClickOutside()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { openSideBar } = useGlobalContext()

  const [toggleS, setToggleS] = React.useState(false)
  let amount = 1
  const matches = useMediaQuery('(max-width:786px)')
  const closeContainer = () => {
    setToggleS(false)
  }
  useEffect(() => {
    if (isClickedOutside) {
      closeContainer()
    }
  }, [isClickedOutside])
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
    <div className={classes.root}>
      <motion.header
        position='static'
        variants={containerVariants}
        animate={toggleS ? 'expanded' : 'closee'}
        transition={containerTransition}
        ref={ref}
        className={classes.Navbarr}
        style={{
          backgroundColor: 'transparent',
          boxShadow: '0px 2px 12px 3px rgba(0,0,0,0.14)',
        }}
      >
        <Toolbar className={classes.navbarItems}>
          <div>
            <Tooltip title='menu' arrow>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                color='primary'
                onClick={() => openSideBar()}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </div>
          <img src={logo} alt='logo' className={classes.logo} />
          <div></div>
          <div>
            <Tooltip title='search' arrow>
              <IconButton
                // edge='start'
                className={classes.otherButton}
                aria-label='Search'
                color='primary'
                onClick={() => setToggleS(!toggleS)}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Tooltip title='basket' arrow>
              <IconButton
                // edge='start'
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
          </div>
          {!auth && (
            <div style={{ marginLeft: '6px', alignItems: 'center' }}>
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
                  LOG IN
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
      </motion.header>
    </div>
  )
}
