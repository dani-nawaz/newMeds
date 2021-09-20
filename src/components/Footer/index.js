import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyle = makeStyles((theme) => ({
  main: { background: 'blue' },
}))

const Footer = () => {
  const classes = useStyle()
  return (
    <Footer className={classes.main}>
      <div className={classes.content}>
        <div className={classes.address}>address</div>
        <div className={classes.sitmap}>sitmap</div>
        <div className={classes.newslatter}>newslatter</div>
      </div>
      <div className={classes.social}>social</div>
    </Footer>
  )
}

export default Footer
