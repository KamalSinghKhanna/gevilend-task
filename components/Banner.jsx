import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const getPositionStyle = (position) => {
  switch (position) {
    case "top-left":
      return "top-[15rem] left-[7rem]";
    case "top-right":
      return "top-[15rem] right-[15rem]";
    default:
      return "";
  }
};

const Banner = () => {
  const images = [
    "/img1.svg",
    "/img2.svg",
    "/img3.svg",
    "/img4.svg",
    "/img5.svg",
  ];

  const texts = [
    { text: "heritage women's tanks", position: "top-right" },
    { text: "Premium tees", position: "top-left" },
    { text: "Premium zip hoodies", position: "top-right" },
    { text: "heritage hoodies", position: "top-left" },
    { text: "heritage tees", position: "top-right" },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rtl: true,
    afterChange: (index) => {
      setFade(true); // Trigger fade-out animation on slide change
      setTimeout(() => {
        setFade(false);
        setCurrentSlide(index);
        // Trigger fade-in animation after a delay
      }, 300); // Adjust the delay as needed to match your transition duration
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        sliderRef.current.slickPrev();
      }
    }, settings.autoplaySpeed);

    return () => clearInterval(interval);
  }, [settings.autoplaySpeed, isHovered]);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-opacity-5"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Slider ref={sliderRef} {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="slick-slider">
            <Image
              src={image}
              alt={`img${index + 1}`}
              width={2000}
              height={2000}
              className="w-full"
            />
          </div>
        ))}
      </Slider>
      {isHovered && (
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-10">
          <button
            onClick={goToPrev}
            className="bg-gray-800 text-white py-2 px-4 rounded-full"
          >
            {"<"}
          </button>
          <button
            onClick={goToNext}
            className="bg-gray-800 text-white py-2 px-4 rounded-full"
          >
            {">"}
          </button>
        </div>
      )}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className={`absolute ${getPositionStyle(
          texts[currentSlide].position
        )} transition-opacity duration-300 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="slide-text">{texts[currentSlide].text}</p>
        <button className="bg-white px-8 py-3 mt-8 rounded-full text-black hover:bg-black hover:text-white">
          show now
        </button>
      </div>
    </div>
  );
};

export default Banner;
