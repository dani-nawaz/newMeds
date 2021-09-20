import React from 'react'
import { NavLinks } from './NavBar/navData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const Cards = () => {
  const { links } = NavLinks[0]
  // console.log(data)
  return (
    <article className='cards'>
      {links.map((disease, index) => {
        const { label, text, url } = disease
        return (
          <div className='card' key={index}>
            <div className='flex'>
              <h3>{label}</h3>
              <a href='/products'>
                <ArrowForwardIosIcon />
              </a>
            </div>
            <p>{text}</p>
            <button className='btn products'>View Products</button>
          </div>
        )
      })}
    </article>
  )
}

export default Cards
