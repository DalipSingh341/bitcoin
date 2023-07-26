import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Standard = () => {
  return (
    <div className="Standard_bg py-5">
      <Container className="py-5 ">
        <h2 className="ff_open_sans fs_48 fw_400 fc_white text-center mb-4">
          Инвестиции
        </h2>
        <p className="ff_open_sans fs_28 fw_400 fc_white text-center mx-auto StandardPara1 mt-1 pb-5">
          Самые оптимальные варианты инвестиций. Каждый найдет свой путь и
          начнет уверенно шагать по нему.
        </p>
        <Row className="justify-content-center align-items-center">
          <Col data-aos-duration="1000" data-aos="fade-down" md={6} lg={6} xl={4} className="mt-4">
            <div className="d-flex align-items-center justify-content-center">
              <div className="Stand_card1 ">
                <h2 className="ff_open_sans fs_20 fw_700  color_252 mb-0 text-center standard_ulText ">
                  FREE
                </h2>
                <p className="ff_open_sans fs_16 fw_400 color_222 mb-3 StandPara2 text-center standard_ulText mx-auto">
                  Organize across all apps by hand
                </p>
                <div className="d-flex align-items-center justify-content-center pb-3">
                  <h2 className="ff_open_sans fs_74 fw_700 color_252 mb-0 standard_ulText">
                    {" "}
                    0
                  </h2>
                  <div className="ps-2">
                    <h2 className="ff_open_sans fs_20 fw_700 color_252 mb-0 standard_ulText">
                      $
                    </h2>
                    <h2 className="ff_open_sans fs_16 fw_400 color_222 mb-3 standard_ulText">
                      Per Month
                    </h2>
                  </div>
                </div>
                <ul className="text-center ps-0 ">
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <Link className="order_now_btn d-inline-block ff_open_sans fw_400 fs_20 fc_white mt-4 ">
                    Order Now
                  </Link>
                </ul>
              </div>
            </div>
          </Col>
          <Col data-aos-duration="1000" data-aos="fade-down" md={6} lg={6} xl={4} className="mt-4">
            <div className="d-flex align-items-center justify-content-center">
              <div className="Stand_card1">
                <h2 className="ff_open_sans standard_ulText fs_20 fw_700  color_252 mb-0 text-center ">
                  STANDARD
                </h2>
                <p className="ff_open_sans standard_ulText fs_16 fw_400 color_222 mb-3 StandPara2 text-center mx-auto">
                  Organize across all apps by hand
                </p>
                <div className="d-flex align-items-center justify-content-center pb-3">
                  <h2 className="ff_open_sans standard_ulText fs_74 fw_700 color_252 mb-0">
                    {" "}
                    10
                  </h2>
                  <div className="ps-2">
                    <h2 className="ff_open_sans standard_ulText fs_20 fw_700 color_252 mb-0">
                      $
                    </h2>
                    <h2 className="ff_open_sans standard_ulText fs_16 fw_400 color_222 mb-3">
                      Per Month
                    </h2>
                  </div>
                </div>
                <ul className="text-center ps-0 ">
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <Link className="order_now_btn d-inline-block ff_open_sans fw_400 fs_20 fc_white mt-4 ">
                    Order Now
                  </Link>
                </ul>
              </div>
            </div>
          </Col>
          <Col data-aos-duration="1000" data-aos="fade-down" md={6} lg={6} xl={4} className="mt-4">
            <div className="d-flex align-items-center justify-content-center">
              <div className="Stand_card1">
                <h2 className="ff_open_sans standard_ulText fs_20 fw_700  color_252 mb-0 text-center ">
                  BUSINESS
                </h2>
                <p className="ff_open_sans standard_ulText fs_16 fw_400 color_222 mb-3 StandPara2 text-center mx-auto">
                  Organize across all apps by hand
                </p>
                <div className="d-flex align-items-center justify-content-center pb-3">
                  <h2 className="ff_open_sans standard_ulText fs_74 fw_700 color_252 mb-0">
                    {" "}
                    99
                  </h2>
                  <div className="ps-2">
                    <h2 className="ff_open_sans standard_ulText fs_20 fw_700 color_252 mb-0">
                      $
                    </h2>
                    <h2 className="ff_open_sans standard_ulText fs_16 fw_400 color_222 mb-3">
                      Per Month
                    </h2>
                  </div>
                </div>
                <ul className="text-center ps-0 ">
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <li className="mb-3 ff_open_sans fs_15 fw_400 color_252 standard_ulText">
                    Pricing Feature
                  </li>
                  <Link className="order_now_btn d-inline-block ff_open_sans fw_400 fs_20 fc_white mt-4 ">
                    Order Now
                  </Link>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Standard;
