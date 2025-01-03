"use client";
import React from "react";
import Slider from "react-slick";

export default function ImageSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/images/flutter event front.jpg",
    "/images/flutter event out.jpg",
    "/images/flutter event seated.jpg",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
