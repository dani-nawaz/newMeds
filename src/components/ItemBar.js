import React, { useState } from 'react'
import { social } from './../utils/footer-data'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { useGlobalContext } from '../context/context'
import TextField from '@material-ui/core/TextField'
import { Paper } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
const useStyles = makeStyles((theme) => ({
  List: {
    width: '100vw',
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
        <Paper elevation={3} className={classes.searchArea}>
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
        <div className={classes.btnsArea}>
          <List className={classes.root}>
            <Button onClick={() => openItems('')}>
              <ArrowBackIosIcon />
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
