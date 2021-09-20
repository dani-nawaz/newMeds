import React from 'react'
import { social } from '../../utils/footer-data'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../img/logo.png'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import { useGlobalContext } from '../../context/context'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import ItemBar from './ItemBar'

const useStyles = makeStyles((theme) => ({
  Draw: {
    width: '50vw',

    '@media (max-width: 800px)': {
      width: '55vw',
    },
    '@media (max-width: 500px)': {
      width: '100vw',
    },
  },
  List: {
    '@media (max-width: 800px)': {
      width: '55vw',
    },
    '@media (max-width: 500px)': {
      width: '100vw',
    },
    width: '45vw',
    backgroundColor: 'white',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchArea: {
    margin: '10px auto',
    padding: 10,
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '9fr 0.5fr 1fr',
  },
  divider: {
    margin: 'auto 4px',
    height: 36,
  },
  iconButton: {
    margin: 'auto auto',
  },
  socialInstagram: {
    height: 27,
  },
  socialArea: {
    display: 'grid',
    marginTop: '20px',
    textAlign: 'center',
    gridAutoFlow: 'auto',
  },
  socialLinks: {
    '& a': {
      marginLeft: '10px',
    },
  },
  closeSideDiv: {
    width: '100%',
    display: 'grid',
  },
  closeSide: {
    placeSelf: 'end',
    marginRight: '10px',
    padding: '7px',
    '& p': {
      fontSize: '15px',
      margin: '6px',
    },
  },
  logo: {
    height: '65px',
    margin: '0px auto',
  },
  logodiv: {
    display: 'flex',
    alignItem: 'center',
  },
}))

export default function TemporaryDrawer() {
  const { openItems, items, isSideBarOpen, closeSideBar } = useGlobalContext()
  const classes = useStyles()
  return (
    <>
      <Drawer
        open={isSideBarOpen}
        onClose={() => closeSideBar()}
        className={classes.Draw}
      >
        <div className={classes.List}>
          <div className={classes.logodiv}>
            <img src={logo} alt='logo' className={classes.logo} />
          </div>

          <div className={classes.closeSideDiv}>
            <IconButton
              className={classes.closeSide}
              onClick={() => closeSideBar()}
            >
              <ArrowBackIosIcon color='secondary' />
              <p>close</p>
            </IconButton>
          </div>
          <Drawer
            open={items ? true : false}
            anchor='left'
            orientation='vertical'
          >
            <ItemBar />
          </Drawer>

          <div className={classes.btnsArea}>
            <List className={classes.root}>
              {["Men'Health", 'General Health', 'Travel Health'].map(
                (text, index) => {
                  return (
                    <>
                      <ListItem key={index} button>
                        <ListItemText
                          primary={text}
                          onClick={() => openItems(text)}
                          // onClick={() => setFasf(true)}
                        />
                        <ArrowForwardIosIcon color='primary' />
                      </ListItem>
                      <Divider />
                    </>
                  )
                }
              )}
            </List>
          </div>
          <div className={classes.socialArea}>
            <h4>Find us on </h4>
            <div className={classes.socialLinks}>
              {social.map((data, index) => {
                const { link, src, svg, classs } = data
                return (
                  <a href={link} key={index} className={classs}>
                    {svg || (
                      <img src={src} className={classes.socialInstagram} />
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
