import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// // Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'

import '../style.css'

// // import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'
import ReviewCard from './ReviewCard'
import { data } from './ReviewsData'

// // install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination])

const Reviews = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className='mySwiper'
      >
        {data.map((card, index) => {
          return (
            <SwiperSlide id={index}>
              <ReviewCard card={card} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Reviews
