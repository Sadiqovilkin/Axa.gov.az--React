import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
   <section id='slider'>
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.8,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mini_card">
            <div className="card_img">
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c51539a.webp" className="white-img"/>
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp" className="green-img"/>
            </div>
            <div className="card_txt">
              <h5>EKTIS</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mini_card">
            <div className="card_img">
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c51539a.webp" className="white-img"/>
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp" className="green-img"/>
            </div>
            <div className="card_txt">
              <h5>EKTIS</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mini_card">
            <div className="card_img">
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c51539a.webp" className="white-img"/>
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp" className="green-img"/>
            </div>
            <div className="card_txt">
              <h5>EKTIS</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mini_card">
            <div className="card_img">
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c51539a.webp" className="white-img"/>
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp" className="green-img"/>
            </div>
            <div className="card_txt">
              <h5>EKTIS</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mini_card">
            <div className="card_img">
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c51539a.webp" className="white-img"/>
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp" className="green-img"/>
            </div>
            <div className="card_txt">
              <h5>EKTIS</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mini_card">
            <div className="card_img">
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c51539a.webp" className="white-img"/>
            <img src="http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp" className="green-img"/>
            </div>
            <div className="card_txt">
              <h5>EKTIS</h5>
            </div>
          </div>
        </SwiperSlide>
   

      </Swiper>
    </>
   </section>
  )
}

export default Slider