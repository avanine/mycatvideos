import React, { useState } from 'react';
import EmbeddedVideo from './EmbeddedVideo';

interface VideoCarouselProps {
  slides: Array<string>;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ slides }) => {


  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide: number) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide: number) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
    {slides.map((slide, index) => (
      <div className={`mySlides fade ${index === currentSlide ? 'active' : ''}`} key={index}>
        <EmbeddedVideo link={slide} />
      </div>
    ))}
    <button className="prev" onClick={prevSlide}>&#10094;</button>
    <button className="next" onClick={nextSlide}>&#10095;</button>
  </div>
  );
};

export default VideoCarousel;
