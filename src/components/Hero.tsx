import React from 'react';
import Slider from "react-slick";

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="text-center p-10">
      <Slider {...settings}>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Catchy Headline</h1>
          <p className="text-gray-700 my-4">Description of the product or service.</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
