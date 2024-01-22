import React, { useState } from "react";
import Image from "../Assets/Images/IMAGE-landscape-fill-62679565-6ddb-46da-b51a-5106c68362fe-default_0.jpg";
import Image2 from "../Assets/Images/IMAGE-landscape-fill-fa04e36b-205e-42c2-a747-b313e412e996-default_0.jpg";
import Image3 from "../Assets/Images/IMAGE-landscape-fill-6ff2c3b2-ffd4-4669-b842-51837ce94fe4-default_0.jpg";
import Image4 from "../Assets/Images/IMAGE-landscape-fill-84f5b6e0-48f0-4d62-ab20-77d2fe96b644-default_0.jpg";
import Image5 from "../Assets/Images/IMAGE-landscape-fill-dbba6b6a-0397-4e62-88fc-d326ee36e78d-default_0.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home({ handleSlideChange }) {
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

  return (
    <div>
      <section className="home">
        <div className="SlideShow">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={setSwiper}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 9000 }}
            onSlideChange={(swiper) => handleSlideChange(swiper.realIndex)}
          >
            <SwiperSlide>
              {" "}
              <img src={Image} alt="background" className="swiper-image1" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Image2} alt="background" className="swiper-image2" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Image3} alt="background" className="swiper-image3" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Image4} alt="background" className="swiper-image4" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Image5} alt="background" className="swiper-image5" />
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div
            className="swiper-button-next"
            onClick={handleNextButtonClick}
          ></div>
          <div
            className="swiper-button-prev"
            onClick={handlePrevButtonClick}
          ></div>
        </div>

        {/* <div className="center-content">
          <h1>AWC 2024 Winter Collection</h1>
          <p>Shop our latest collection</p>
        </div> */}
      </section>
      <style jsx>{`
        .SlideShow {
          display: flex;
          align-items: stretch;
          height: 100vh;
          overflow: hidden;
        }

        .swiper-container {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-image1,
        .swiper-image2,
        .swiper-image3,
        .swiper-image4,
        .swiper-image5 {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: whitesmoke;
          height: 1rem !important;
          width: 1rem !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
        }

        .product-header h1 {
          color: black;
          border-bottom: 1rem solid;
        }

        @media screen and (max-width: 1500px) {
          .swiper-image1,
          .swiper-image2,
          .swiper-image3 {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
