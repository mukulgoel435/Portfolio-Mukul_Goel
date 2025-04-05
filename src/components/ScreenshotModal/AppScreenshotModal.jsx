import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./AppScreenshot.css";

const AppScreenshotModal = ({ isOpen, closeModal, images }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
        <div className="modal-panel">
            <button className="modal-close-icon" onClick={closeModal} >
            &times;
            </button>

            <h2 className="modal-title" style={{color:'#fff'}}>App Screenshots</h2>
            <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={images.length > 1}
            navigation
            modules={[Navigation]}
            >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className="modal-slide-content">
                        <h1 className="modal-img-title" style={{fontSize:25,marginBottom:20,color:'#fff' }}>{img.title}</h1>
                        <img src={img.src} alt={`screenshot-${index}`} className="modal-image" />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>

  );
};

export default AppScreenshotModal;
