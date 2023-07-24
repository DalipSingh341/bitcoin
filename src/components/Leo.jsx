import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slider2 from "react-slick";
import leo from "../assets/svg/leo1.svg";
import { Empty_star, Fill_star } from "./IconsSvg";

const Leo = () => {
  const settings = {
    dots: true,
    infinite: true,
      arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1200,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 1200,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 1200,
        },
      },

    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       infinite: true,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       speed: 500,
    //       autoplaySpeed: 1200,
    //     },
    //   },
    //   {
    //     breakpoint: 321,
    //     settings: {
    //       slidesToShow: 1,
    //       infinite: true,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       speed: 500,
    //       autoplaySpeed: 1200,
    //     },
    //   },
    ],
  };
  return (
    <div className="pb-5">
      <Container className="py-5">
        <h2 className="ff_open_sans fs_43 fw_400 text-center color_252 mb-3">
          Отзывы наших партнеров
        </h2>
        <p className="ff_open_sans fs_28 fw_400 text-center color_222 mx-auto mb-5 leo_para1">
          Каждый отзыв по-особенному ценный для нас. Ведь для этого было
          проделано большой совместный путь. Успех состоит из доверие,
          готовности к развитию и перемен.
        </p>

        <div className="py-5">
          <Slider2 {...settings} className=" px-md-5 ">
            <div  data-aos-duration="3000" data-aos="fade-down" className="d-flex align-items-center justify-content-center ">
              <div className="blue_card cp ">
                <div className="d-flex align-items-center mb-3 ">
                  <img src={leo} alt="leo" />
                  <div className="ms-2 ">
                    <h2 className="ff_open_sans fc_white fs_18 fw_700 mb-0">
                      Али
                    </h2>
                    <h2 className="ff_open_sans fc_white fs_12 fw_400 mb-0">
                      Узбекистан
                    </h2>
                  </div>
                  <span className="ms-4 mt-3">
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Empty_star />
                  </span>
                </div>

                <p className="ff_open_sans fc_white fs_16 fw_400 leo_para2 mt-1 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu.
                </p>
              </div>
            </div>
            <div  data-aos-duration="3000" data-aos="fade-down" className="d-flex align-items-center justify-content-center ">
              <div className="blue_card2 cp">
                <div className="d-flex align-items-center mb-3 ">
                  <img src={leo} alt="leo" />
                  <div className="ms-2 ">
                    <h2 className="ff_open_sans fc_white fs_18 fw_700 mb-0">
                      Leo
                    </h2>
                    <h2 className="ff_open_sans fc_white fs_12 fw_400 mb-0">
                      Таджикистан
                    </h2>
                  </div>
                  <span className="ms-4 mt-3">
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Empty_star />
                  </span>
                </div>
                <div className="ps-3">
                  <h2 className="ff_open_sans fs_18 fw_700 fc_white mb-2 ">
                    It was a very good experience
                  </h2>
                  <p className="ff_open_sans fc_white fs_12 fw_400 leo_para2 mt-1 pb-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>
            </div>
            <div  data-aos-duration="3000" data-aos="fade-down" className="d-flex align-items-center justify-content-center ">
              <div className="blue_card2 ">
                <div className="d-flex align-items-center mb-3 ">
                  <img src={leo} alt="leo" />
                  <div className="ms-2 ">
                    <h2 className="ff_open_sans fc_white fs_18 fw_700 mb-0">
                      Leo
                    </h2>
                    <h2 className="ff_open_sans fc_white fs_12 fw_400 mb-0">
                      Lead Designer
                    </h2>
                  </div>
                  <span className="ms-4 mt-3">
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Empty_star />
                  </span>
                </div>
                <div className="ps-3">
                  <h2 className="ff_open_sans fs_18 fw_700 fc_white mb-2 ">
                    It was a very good experience
                  </h2>
                  <p className="ff_open_sans fc_white fs_12 fw_400 leo_para2 mt-1 pb-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>
            </div>
            <div  data-aos-duration="3000" data-aos="fade-down" className="d-flex align-items-center justify-content-center ">
              <div className="blue_card cp">
                <div className="d-flex align-items-center mb-3 ">
                  <img src={leo} alt="leo" />
                  <div className="ms-2 ">
                    <h2 className="ff_open_sans fc_white fs_18 fw_700 mb-0">
                      Али
                    </h2>
                    <h2 className="ff_open_sans fc_white fs_12 fw_400 mb-0">
                      Узбекистан
                    </h2>
                  </div>
                  <span className="ms-4 mt-3">
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Empty_star />
                  </span>
                </div>

                <p className="ff_open_sans fc_white fs_16 fw_400 leo_para2 mt-1 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu.
                </p>
              </div>
            </div>
            <div  data-aos-duration="3000" data-aos="fade-down" className="d-flex align-items-center justify-content-center ">
              <div className="blue_card2 cp">
                <div className="d-flex align-items-center mb-3 ">
                  <img src={leo} alt="leo" />
                  <div className="ms-2 ">
                    <h2 className="ff_open_sans fc_white fs_18 fw_700 mb-0">
                      Leo
                    </h2>
                    <h2 className="ff_open_sans fc_white fs_12 fw_400 mb-0">
                      Таджикистан
                    </h2>
                  </div>
                  <span className="ms-4 mt-3">
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Empty_star />
                  </span>
                </div>
                <div className="ps-3">
                  <h2 className="ff_open_sans fs_18 fw_700 fc_white mb-2 ">
                    It was a very good experience
                  </h2>
                  <p className="ff_open_sans fc_white fs_12 fw_400 leo_para2 mt-1 pb-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>
            </div>
            <div  data-aos-duration="3000" data-aos="fade-down" className="d-flex align-items-center justify-content-center ">
              <div className="blue_card2 cp">
                <div className="d-flex align-items-center mb-3 ">
                  <img src={leo} alt="leo" />
                  <div className="ms-2 ">
                    <h2 className="ff_open_sans fc_white fs_18 fw_700 mb-0">
                      Leo
                    </h2>
                    <h2 className="ff_open_sans fc_white fs_12 fw_400 mb-0">
                      Lead Designer
                    </h2>
                  </div>
                  <span className="ms-4 mt-3">
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Fill_star />
                    <Empty_star />
                  </span>
                </div>
                <div className="ps-3">
                  <h2 className="ff_open_sans fs_18 fw_700 fc_white mb-2 ">
                    It was a very good experience
                  </h2>
                  <p className="ff_open_sans fc_white fs_12 fw_400 leo_para2 mt-1 pb-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu.
                  </p>
                </div>
              </div>
            </div>         
          </Slider2>
        </div>
      </Container>
    </div>
  );
};

export default Leo;
