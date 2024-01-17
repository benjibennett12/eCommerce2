import React , { useState } from 'react';
import Image from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/IMAGE-landscape-fill-6ff2c3b2-ffd4-4669-b842-51837ce94fe4-default_0.jpg';
import Image2 from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/IMAGE-landscape-fill-84f5b6e0-48f0-4d62-ab20-77d2fe96b644-default_0.jpg';
import Image3 from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/IMAGE-landscape-fill-dbba6b6a-0397-4e62-88fc-d326ee36e78d-default_0.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Pages/Home.css'



export default function Home() {
  const [swiper, setSwiper] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  

  const handleNextButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (swiper) {
      setActiveSlideIndex(swiper.activeIndex);
    }
  };

  return (
    <div>
      <section className="home">
        <div className="SlideShow">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={setSwiper}
            loop={true}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            autoplay={{ delay: 5000 }}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>  <img src={Image} alt="background"  className='swiper-image1' /></SwiperSlide>
            <SwiperSlide>  <img src={Image2} alt="background"  className='swiper-image2'/></SwiperSlide>
            <SwiperSlide> <img src={Image3} alt="background"  className='swiper-image3'/></SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
          <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
        </div>

        {/* <div className="center-content">
          <h1>AWC 2024 Winter Collection</h1>
          <p>Shop our latest collection</p>
        </div> */}
      </section>
    </div>
  );
}

