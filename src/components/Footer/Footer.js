import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import logo from '../../img/logo.png'
import { TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import PhoneIcon from '@material-ui/icons/Phone'
import IconButton from '@material-ui/core/IconButton'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MailIcon from '@material-ui/icons/Mail'
import {
  social,
  footerPayment,
  certificate,
  footerInfo1,
  footerInfo2,
} from '../../utils/footer-data'
const useStyle = makeStyles((theme) => ({
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '60px',
    '@media (max-width: 800px)': {
      gridTemplateColumns: '1fr',
    },
    paddingTop: '18px',
    '@media (max-width: 380px)': {
      padding: '10px',
      paddingLeft: '-30px',
    },
  },
  divider: {
    height: '1px',
    margin: '0px auto',
    backgroundColor: 'black',
    width: '90%',
  },
  dividerver: {
    backgroundColor: 'black',
    height: '20%',
    margin: '0px auto',
    width: '1px',
  },
  payment: {
    textAlign: 'center',
  },

  medss: {
    display: 'grid',
    placeItems: 'center',
  },

  social: {
    display: 'grid',
    placeItems: 'center',
    padding: '0px 100px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  newslatter: {
    display: 'grid',
    textAlign: 'center',
    paddingTop: '28px',
  },
  addressLinks: {
    display: 'grid',
    gridTemplateColumns: '12% 70%',
  },
  address: {
    display: 'grid',
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
  },
  how: {
    textAlign: 'center',
  },
  tittle: {
    backgroundColor: 'blue',
    width: '42%',
    margin: '0 auto',
    hieght: '2px',
    marginBottom: '20px',
  },
  third: {
    '@media (max-width: 800px)': {
      marginTop: '80px',
    },
    '@media (max-width: 300px)': {
      marginLeft: '0px',
    },
  },
  infoaboutlinks: {
    '@media (max-width: 800px)': {},
  },
}))

const Footer = () => {
  const classes = useStyle()
  return (
    <footer className={classes.main}>
      <div className={classes.first}>
        <Divider className={classes.divider} />
        <div className={classes.payment}>
          <h4 style={{ marginBottom: '2px' }}>Payment Options</h4>
          <Divider className={classes.tittle} />
          <div className='footer-second-icon'>
            {footerPayment.map((data, index) => {
              const { alt, src } = data
              return <img key={index} src={src} alt={alt} />
            })}
          </div>
        </div>
        <div className={classes.how}>
          <h4 style={{ marginBottom: '2px' }}>SiteMap</h4>
          <Divider className={classes.tittle} style={{ width: '15%' }} />

          <ul className={classes.howlink}>
            {footerInfo1.map((data, index) => {
              const { link, text } = data
              return (
                <li key={index}>
                  <a style={{}} href={link}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={classes.second}>
        <div className={classes.medss}>
          <img
            src={logo}
            alt='logo'
            style={{
              height: '90px',
              marginTop: '-24px',
              paddingTop: '-27px',
              marginLeft: '20px',
            }}
          />
          <h5 style={{ marginBottom: '2px' }}>24/7 meds</h5>
          <Divider className={classes.tittle} style={{ width: '17%' }} />
        </div>
        <div className={classes.social}>
          {social.map((data, index) => {
            const { link, src, svg, classs } = data
            return (
              <a href={link} key={index} className={classs}>
                {svg || (
                  <img
                    src={src}
                    style={{ height: '27px' }}
                    className='instagramm'
                  />
                )}
              </a>
            )
          })}
        </div>
        <Divider orientation='vertical' className={classes.dividerver} />
        <div className={classes.newslatter}>
          <h5 style={{ marginBottom: '2px' }}>MONTHLY NEWSLETTER</h5>
          <Divider className={classes.tittle} style={{ width: '56%' }} />

          <form noValidate autoComplete='off'>
            <TextField
              id='filled-basic'
              label='Enter Your Email Address'
              variant='standard'
              style={{ width: '70%' }}
            />
            <Button style={{ marginTop: '16px' }}>
              <SendIcon />
            </Button>
          </form>
          <p style={{}}>
            Subscribe to our newsletter and get offers direct to your inbox
          </p>
        </div>
      </div>
      <div className={classes.third}>
        <Divider className={classes.divider} />
        <div className={classes.address}>
          <h4 style={{ marginBottom: '2px' }}>Contact US</h4>
          <Divider className={classes.tittle} style={{ width: '27%' }} />

          <div className={classes.addressLinks}>
            <div>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                color='primary'
                style={{ backgroundColor: 'lightblue' }}
              >
                <LocationOnIcon />
              </IconButton>
            </div>
            <p>Uk</p>
          </div>
          <div className={classes.addressLinks}>
            <div>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                color='primary'
                style={{ backgroundColor: 'lightblue' }}
              >
                <PhoneIcon />
              </IconButton>
            </div>
            <p>12345655555</p>
          </div>
          <div className={classes.addressLinks}>
            <div>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                color='primary'
                style={{ backgroundColor: 'lightblue' }}
              >
                <MailIcon />
              </IconButton>
            </div>
            <p>@hotmail.com</p>
          </div>
        </div>
        <div className={classes.info}>
          <h4 style={{ marginBottom: '2px' }}>About us</h4>
          <Divider className={classes.tittle} style={{ width: '20%' }} />

          <ul className={classes.infoabout}>
            {footerInfo2.map((data, index) => {
              const { link, text } = data
              return (
                <li key={index}>
                  <a className={classes.infoaboutlinks} href={link}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
