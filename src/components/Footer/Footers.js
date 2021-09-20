import React, { useState } from 'react'
import {
  social,
  footerPayment,
  certificate,
  footerInfo1,
  footerInfo2,
} from '../../utils/footer-data'
import { TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const Footers = () => {
  const [footer, setFooter] = useState(true)
  const matches = useMediaQuery('(max-width:786px)')
  return (
    <footer className='footer'>
      <div className='container footer-container grid'>
        <div className='footer-detail'>
          <h4>Certification &amp; Verification</h4>
          <div className='footer-first-icon'>
            {certificate.map((data, index) => {
              const { alt, src } = data
              return <img key={index} src={src} alt={alt} />
            })}
          </div>
          <h4>Payment Options</h4>
          <div className='footer-second-icon'>
            {footerPayment.map((data, index) => {
              const { alt, src } = data
              return <img key={index} src={src} alt={alt} />
            })}
          </div>
          <div className='footer-social'>
            <h4>Find us on</h4>
            {social.map((data, index) => {
              const { link, src, svg, classs } = data
              return (
                <a href={link} key={index} className={classs}>
                  {svg || <img src={src} className='instagramm' />}
                </a>
              )
            })}
          </div>
          <hr />
          <div className='footer-address'>
            <p>
              UK Meds Direct Ltd
              <br />
              Unit 3 Castlebridge Office Village
              <br />
              Castle Marina Road
              <br />
              Nottingham
              <br />
              NG7 1TN
              <br />
              <br />© UK Meds Direct Ltd 2021 - Company Reg. Number: 10225625
            </p>
          </div>
        </div>
        <div className={`footer-info ${!footer && 'unhide-footer'}`}>
          {matches && <hr />}
          <h4>Information</h4>
          {matches && (
            <Button
              style={{ float: 'right', top: '-5px' }}
              onClick={() => setFooter(!footer)}
            >
              {footer ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
          )}
          <div className='footer-info-links grid'>
            <ul className={`first-info-link ${!footer && 'unhide-link'}`}>
              {footerInfo1.map((data, index) => {
                const { link, text } = data
                return (
                  <li key={index}>
                    <a className='info-link-a' href={link}>
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
            <ul className={`second-info-link ${!footer && 'unhide-link'}`}>
              {footerInfo2.map((data, index) => {
                const { link, text } = data
                return (
                  <li key={index}>
                    <a className='info-link-a' href={link}>
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <hr />
          <div className='footer-newslatter'>
            <h4>
              Subscribe to our newsletter and get offers direct to your inbox
            </h4>
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
            <p>No spam ever. Just monthly updates and insights.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footers
