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
    arrows: false, // Removes navigation arrows for a cleaner look
  };

  const images = [
    "/images/flutter event front.jpg",
    "/images/flutter event out.jpg",
    "/images/flutter event seated.jpg",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full max-w-full h-48 md:h-64 lg:h-72 object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
