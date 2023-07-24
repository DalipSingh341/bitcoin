import React from "react";

import Slider1 from "react-slick";
import { Container } from "react-bootstrap";
import BitcoinSlider1 from "../assets/png/bitcoinSlider1.png";
import BitcoinSlider2 from "../assets/png/bitcoinSlider2.png";
import BitcoinSlider3 from "../assets/png/bitcoinSlider3.png";
import BitcoinSlider4 from "../assets/png/bitcoinSlider4.png";
import BitcoinSlider5 from "../assets/png/bitcoinSlider5.png";
import BitcoinSlider6 from "../assets/png/bitcoinSlider6.png";

const LiteCoin = () => {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },
    ],
  };
  return (
    <div className="my-4">
      <Container>
        <div>
          <h2 className="ff_open_sans fs_48 fw_400 color_252 text-center mb-4">
            Наши площадки
          </h2>
          <p className="ff_open_sans fs_28 fw_400 color_222 mb-5 mx-auto text-center Lite_para1">
            Наш проект работает только с проверенными площадками для инвестиций,
            чтобы максимально снизить риски.
          </p>
        </div>
        <div>
          <div className="text-center my-5">
            <Slider1 {...settings}>
              <div>
                <div className="my-2 mx-3">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider1}
                    alt="BitcoinSlider1"
                  />
                </div>
              </div>
              <div>
                <div className="my-2 mx-3">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider2}
                    alt="BitcoinSlider2"
                  />
                </div>
              </div>
              <div>
                <div className="my-2 mx-3">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider3}
                    alt="BitcoinSlider3"
                  />
                </div>
              </div>
              <div>
                <div className="my-2 mx-3">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider4}
                    alt="BitcoinSlider4"
                  />
                </div>
              </div>
              <div>
                <div className="my-2 mx-3">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider5}
                    alt="BitcoinSlider5"
                  />
                </div>
              </div>
              <div>
                <div className="my-2 mx-3">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider6}
                    alt="BitcoinSlider6"
                  />
                </div>
              </div>
              <div>
                <div className="my-2 mx-3 ">
                  <img
                    className="bitcoin1 w-100"
                    src={BitcoinSlider3}
                    alt="BitcoinSlider3"
                  />
                </div>
              </div>
            </Slider1>
          </div>
          <div className="my-5 text-center">
            <span className="line1 d-inline-block"></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LiteCoin;
