import React from 'react'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import { Paper } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import Badge from '@material-ui/core/Badge'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SubjectIcon from '@material-ui/icons/Subject'
import { useGlobalContext } from './../context/context'
import logo from '../../img/logo.png'
const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchArea: {
    margin: '1% auto',
    padding: 10,
    width: '80%',
    display: 'grid',
    '&:hover': {
      boxShadow: ' 1px 1px 2.5px 3px #ccc',
    },
    gridTemplateColumns: '9fr 0.5fr 1fr',
    '@media (max-width: 820px)': {
      width: '75%',
      gridTemplateColumns: '9fr 0.1fr 1fr',
      padding: 4,
      margin: '7px 30px 7px auto',
    },
  },
  divider: {
    margin: 'auto 4px',
    height: 36,
  },
  iconButton: {
    margin: 'auto auto',
  },
  NavBar: {
    margin: '5px auto',
    padding: 10,
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '5% 65% 30%',
    '@media (max-width: 870px)': {
      gridTemplateColumns: '15% 85%',
      width: '90%',
      '& :nth-child(4)': {
        gridTemplateColumns: ' 1fr 0.1fr 1fr 0.2fr 1fr',
      },
      '& :nth-child(3)': {
        gridTemplateColumns: '20%',
      },
    },
  },
  iconss: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 0.1fr 1fr',
  },
  btnDiv: {
    textAlign: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    padding: '2px 1px',
    '& p': {
      fontSize: '11px',
      margin: '1px 1px 1px 1px',
    },
    '&:hover': {
      '& p': {
        textDecoration: 'underline',
      },
    },
  },
  btn: {
    marginBottom: '-4px',
    marginTop: '12%',
  },
  btnMenu: {
    display: 'block',
  },
  iconsBtn: {
    fontSize: '29px',
    '@media (max-width: 870px)': {
      fontSize: '23px',
    },
  },
  logo: {
    height: '85px',
    marginLeft: '-18px',
  },
}))

const NavBar = () => {
  let amount = 1
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:870px)')
  const { openSideBar } = useGlobalContext()
  return (
    <Paper elevation={3} className={classes.NavBar}>
      <img src={logo} alt='logo' className={classes.logo} />
      <Paper elevation={0} className={classes.searchArea}>
        <TextField id='standard-basic' label='Search' />
        <Divider className={classes.divider} orientation='vertical' />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {matches && (
        <div className={classes.btnDiv}>
          <IconButton
            type='submit'
            className={classes.btn}
            onClick={() => openSideBar()}
          >
            <SubjectIcon className={classes.iconsBtn} />
          </IconButton>
          <p>Menu</p>
        </div>
      )}
      <div className={classes.iconss}>
        {!matches && (
          <div className={classes.btnDiv}>
            <IconButton type='submit' className={classes.btn}>
              <WorkOutlineOutlinedIcon className={classes.iconsBtn} />
            </IconButton>
            <p>How it work</p>
          </div>
        )}

        <div className={classes.btnDiv}>
          <IconButton type='submit' className={classes.btn}>
            <HelpOutlineIcon className={classes.iconsBtn} />
          </IconButton>
          <p>Help</p>
        </div>
        {matches && <Divider orientation='vertical' />}
        <div className={classes.btnDiv}>
          <IconButton type='submit' className={classes.btn}>
            <AccountCircleOutlinedIcon className={classes.iconsBtn} />
          </IconButton>
          <p>Account</p>
        </div>
        <Divider orientation='vertical' />
        <div className={classes.btnDiv}>
          <IconButton type='submit' className={classes.btn}>
            <Badge badgeContent={amount} color='secondary'>
              {amount >= 1 ? (
                <ShoppingBasketIcon className={classes.iconsBtn} />
              ) : (
                <ShoppingBasketOutlinedIcon className={classes.iconsBtn} />
              )}
            </Badge>
          </IconButton>
          <p>Basket</p>
        </div>
      </div>
    </Paper>
  )
}

export default NavBar
