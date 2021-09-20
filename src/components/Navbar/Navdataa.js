import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  main: {
    width: '100%',
    height: '6em',
    display: 'flex',
    borderRadius: '1px solid #d8d8d852',
    padding: '6px 8px',
    alignItems: 'center',
  },
  handleImg: {
    width: 'auto',
    height: '100%',
    display: 'flex',
    flex: '0.4',
  },
  imgss: {
    width: 'auto',
    height: '100%',
  },
  title: {
    fontSize: '16px',
    color: '#000',
    margin: 'auto 0px',
    marginLeft: '10px',
    fontWeight: '900',
    display: 'flex',
    '@media (max-width: 800px)': {
      fontSize: '13px',
    },
    flex: '2',
  },
  spani: {
    color: '#a1a1a1',
    fontSize: '16px',
    display: 'flex',
    flex: '0.47',
    '@media (max-width: 800px)': {
      fontSize: '13px',
    },
  },
})

const Navdata = (prop) => {
  const classes = useStyles()
  const { thumbanilSrc, name, rating } = prop
  return (
    <>
      <div className={classes.main}>
        <div className={classes.handleImg}>
          <img src={thumbanilSrc} className={classes.imgss} />
        </div>

        <h2 className={classes.title}>{name}</h2>
        {rating ? (
          <span className={classes.spani}>{rating}</span>
        ) : (
          <span className={classes.spani}>N/A</span>
        )}
      </div>
      <Divider />
    </>
  )
}

export default Navdata
