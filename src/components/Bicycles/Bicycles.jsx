import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Bicycles.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'


const Bicycles = () => {
  return (
    <section className="r-wrapper">
        <div className="padding innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Our E-cycles</span>
            <span className="primaryText">Enjoy every ride with our cool e-cycles</span>
          </div>

          <Swiper {...sliderSettings}>
              <SliderButtons/>
            {
              data.map((card, i)=> (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="cycle" />
                    

                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText r-price">
                      <span style={{color:"#ff922d"}}>₹</span>
                      <span>{card.price}</span>
                    </span>
                    <span className="secondaryText">{card.detail}</span>
                    <span><button className='buybtn'>Buy Now</button></span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  )
}

export default Bicycles
const SliderButtons = ()=> {
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-buttons'>
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}