import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import scale1 from "../assets/svg/scale1.svg"
import scale2 from "../assets/svg/scale2.svg"
import scale3 from "../assets/svg/scale3.svg"
const InvestCoin1 = () => {
  return (
    <>
      <Container>
        <div className=" py-3 py-md-5">
          <div className="py-2 py-md-5">
            <h2
              data-aos="fade-down"
              data-aos-duration="3000"
              className="ff_open_sans fs_48 fw_400 fc_lightblue text-center mb-0 pb-4"
            >
              Как “Invest Coin” работает?{" "}
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="3000"
              className="ff_open_sans fs_28 fw_400 fc_lightblue text-center Invest_para1 mb-0 pb-5"
            >
              Invest Coin - это команда оптыных инвесторов, аналитиков и
              программистов. Мы работаем на площадках криптовалют (и не только)
              уже более 4 года и имеем конкурентоспособное портфолио. Все
              встречи, общения и договоренности с нашими партнерами (клиентами)
              проходят в прозрачной форме.
            </p>
            <Row className="justify-content-center">
              <Col
                data-aos-duration="1000"
                data-aos="fade-down"
                sm={6}
                md={4}
                lg={3}
                className=" d-flex justify-content-center justify-md-content-end"
              >
                <div className="card-1 mt-3 d-flex flex-column ">
                  <img src={scale1} alt="scale1" />
                  <h2 className="ff_open_sans fs_20 fw_700 color_252 mb-0 pt-2 pb-3 text-center">
                    Надежность
                  </h2>
                  <p className="ff_open_sans fs_18 fw_400 color_222 mb-0 pt-1 text-center pb-2 Invest_para2">
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
              </Col>
              <Col
                data-aos-duration="1000"
                data-aos="fade-down"
                sm={6}
                md={4}
                lg={3}
                className=" d-flex justify-content-center"
              >
                <div className="card-1 mt-3 d-flex flex-column ">
                  <img src={scale2} alt="scale2" />
                  <h2 className="ff_open_sans fs_20 fw_700 color_252 mb-0 pt-2 pb-3 text-center">
                    Опыт
                  </h2>
                  <p className="ff_open_sans fs_18 fw_400 color_222 mb-0 pt-1 text-center pb-2 Invest_para2">
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
              </Col>
              <Col
                data-aos-duration="1000"
                data-aos="fade-down"
                sm={6}
                md={4}
                lg={3}
                className=" d-flex justify-content-center justify-md-content-start"
              >
                <div className="card-1 mt-3 d-flex flex-column ">
                  <img src={scale3} alt="scale3" />
                  <h2 className="ff_open_sans fs_20 fw_700 color_252 mb-0 pt-2 pb-3 text-center">
                    Прозрачность
                  </h2>
                  <p className="ff_open_sans fs_18 fw_400 color_222 mb-0 pt-1 text-center pb-2 Invest_para2">
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InvestCoin1;
