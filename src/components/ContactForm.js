import React from 'react'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import TelegramIcon from '@material-ui/icons/Telegram'
import RingVolumeIcon from '@material-ui/icons/RingVolume'
const ContactForm = () => {
  return (
    <article className='contact'>
      <div className='flex-2'>
        <div className='flex-3'>
          <h2>here to help you</h2>
          <p>
            Our Customer Service is available Monday to Friday 9am - 4pm. If you
            need urgent assistance, do not use this service. Call{' '}
            <span>111</span>
            ,or in an emergency call <span>999</span>
            <span className='span'>Visit our help section</span>
          </p>
        </div>

        <div className='icons' style={{ textAlign: 'center' }}>
          <div>
            {' '}
            <LiveHelpIcon />
            <p> Lorem, ipsum.</p>
          </div>
          <div>
            {' '}
            <TelegramIcon />
            <p> Lorem, ipsum.</p>
          </div>
          <div>
            {' '}
            <RingVolumeIcon />
            <p> Lorem, ipsum.</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ContactForm
