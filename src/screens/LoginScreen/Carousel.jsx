import React, { useEffect} from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../img/backgroundPolice.jpeg'
import img2 from '../../img/backgroundPolice2.jpeg'
import img3 from '../../img/backgroundPolice3.jpeg'
import img4 from '../../img/backgroundPolice4.jpeg'

const Carousel = () => {

  const totalSlides = 4;

  const settings = {
    //dots:true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const interval = setInterval(() => {
    }, settings.autoplaySpeed);

    return () => clearInterval(interval);
  }, [totalSlides, settings.autoplaySpeed]);

  return (
    <>
    <Slider {...settings} >
      <div className="containerImgSize">
        <img className="containerImgSize" src={img1} alt="image1" />
      </div>

      <div className="containerImgSize">
        <img className="containerImgSize" src={img2} alt="image2" />
      </div>

      <div className="containerImgSize">
        <img className="containerImgSize" src={img3} alt="image2" />
      </div>

      <div className="containerImgSize">
        <img className="containerImgSize" src={img4} alt="image4" />
      </div>

    </Slider>
    </>
  )
}

export default Carousel;