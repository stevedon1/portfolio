"use client";
import React from "react";
import Slider from "react-slick";

export default function YogatImgSlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const images = [
    "/images/Snapchat-1405740099.jpg",
    "/images/me with yoghuts.jpg",
    "/images/strawberrry.jpg",
    "/images/3 yoghurts.jpg",
    "/images/3 mix choco.jpg",
    "/images/3 flavors.jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
