import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import bitcoinHero from "../assets/png/hero_bitcoin.png"

const HeroSection = () => {
  return (
    <div>
      <Container className=" py-3 py-lg-5 ">
        <Row className="py-3 py-lg-5 justify-content-end">
          {/* <Col xl={6}>
            <img src={bitcoinHero} alt="bitcoinHero" />
          </Col> */}
          <Col
            sm={12}
            md={8}
            lg={7}
            xl={6}
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h2 className="ff_open_sans fs_28 fw_400 fc_light_blue text-uppercase mb-0">
              Лучший проект
            </h2>
            <h2 className="ff_open_sans fs_75 fw_800 fc_white hero_text2 py-3 mb-0">
              Крипто <span className="fc_light_blue">Инвестиции</span>{" "}
            </h2>
            <p className="ff_open_sans fs_28 fw_400 fc_white hero_para1 mb-0 ">
              Международный проект инвестиции в криптовалюту и не только. Мы
              заработаем если вы заработаете!
            </p>
            <div className="d-flex flex-column flex-sm-row my-3">
              <div>
                <Link className="ff_open_sans fs_20 fw_700 fc_white Singup_btn1 my-2  d-inline-block masterbtn">
                  Присоединиться
                </Link>
              </div>
              <div>
                <Link className="ff_open_sans fs_20 fw_700 color_252 Singup_btn2  d-inline-block my-2 ms-sm-2 ms-lg-5">
                  Подробнее
                </Link>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row ">
              <div className="d-flex  align-items-center">
                <h2 className="ff_open_sans fs_50 fw_700 fc_light_blue pe-2 ">
                  360
                </h2>
                <h2 className="ff_open_sans text_uppercase fs_14 fw_400 fc_light_blue hero_text3">
                  36Довольных клиентов0
                </h2>
              </div>
              <div className="d-flex align-items-center ms-md-5">
                <h2 className="ff_open_sans text_uppercase fs_50 fw_700 fc_light_blue pe-2 ">
                  330к
                </h2>
                <h2 className="ff_open_sans text_uppercase fs_14 fw_400 fc_light_blue hero_text3">
                  заработанных долларов
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection
