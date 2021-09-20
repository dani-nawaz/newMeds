import React, { useState } from 'react'
import logo from '../../img/logo.png'
import { social } from '../../utils/footer-data'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { useGlobalContext } from '../../context/context'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
const useStyles = makeStyles((theme) => ({
  List: {
    width: '45vw',
    backgroundColor: 'white',
    '@media (max-width: 800px)': {
      width: '55vw',
    },
    '@media (max-width: 500px)': {
      width: '100vw',
    },
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
    // marginRight: 10,
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
  logo: {
    height: '65px',
    margin: '0px auto',
  },
  logodiv: {
    display: 'flex',
    alignItem: 'center',
  },
}))

export default function ItemBar() {
  const { items, openItems } = useGlobalContext()
  const classes = useStyles()
  const [state, setState] = useState(true)
  const [item, setItem] = useState('')

  const handleItem = (text) => {
    setItem(text)
  }

  return (
    <>
      <div className={classes.List}>
        <div className={classes.logodiv}>
          <img src={logo} alt='logo' className={classes.logo} />
        </div>
        <div className={classes.btnsArea}>
          <List className={classes.root}>
            <Button style={{ marginLeft: '1%' }} onClick={() => openItems('')}>
              <ArrowBackIosIcon color='secondary' />
            </Button>
            {['Men', 'General', 'Travel'].map((text, index) => {
              return (
                <List>
                  <ListItem key={index} button>
                    <ListItemText
                      primary={text}
                      style={{ textAlign: 'center' }}
                    />
                  </ListItem>
                  <Divider />
                </List>
              )
            })}
          </List>
        </div>
        <div className={classes.socialArea}>
          <h4>Find us on </h4>
          <div className={classes.socialLinks}>
            {social.map((data, index) => {
              const { link, src, svg, classs } = data
              return (
                <a href={link} key={index} className={classs}>
                  {svg || <img src={src} className={classes.socialInstagram} />}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
