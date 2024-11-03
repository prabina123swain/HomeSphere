import React, { useState, useEffect } from "react";

const ImageSlider = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNext, interval);
    return () => clearInterval(autoSlide); // Clear interval on component unmount
  }, [currentIndex, interval]);

  return (
    <div className="relative h-full z-100">
      {/* Left Arrow */}
      <div
        onClick={goToPrevious}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-5xl text-white z-10 cursor-pointer"
      >
        ❰
      </div>

      {/* Right Arrow */}
      <div
        onClick={goToNext}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-5xl text-white z-10 cursor-pointer"
      >
        ❱
      </div>

      {/* Slide with Opacity */}
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50 rounded-lg transition-all duration-500"
          style={{
            backgroundImage: `url(${slides[currentIndex].url ? slides[currentIndex].url : slides[currentIndex]})`
          }}
        ></div>

        {/* Content Over Background */}
        <div className="absolute top-[15%] right-[35%] left-[5%] text-white z-20">
          <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].title}</h2>
          <p className=" text-base font-semibold">{slides[currentIndex].content}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mx-1 cursor-pointer text-2xl ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
