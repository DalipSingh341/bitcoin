import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import macbook from "../assets/png/macbook.png";
import { Link } from "react-router-dom";

const InvestCoinC = () => {
  return (
    <div>
      <Container className="py-md-5">
        <Row className="py-2">
          <Col
            data-aos-duration="1000"
            data-aos="fade-right"
            lg={6}
            className="order-last order-lg-first py-2"
          >
            <h2 className="ff_open_sans fs_48 fw_400 color_252 invest3_text1 mb-0 pb-3">
              Invest Coin - это про безопасность!
            </h2>
            <p className="ff_open_sans fs_22 fw_400 color_222 invest3_para1">
              И как выражается безопасность?Чем меньше вложений в инвестиции,
              тем больше риска потерпеть неудачу. Чем больше вложений, тем тем
              меньше риска. Безопасность инвестии означает что ваши вложения
              (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы
              делают ставки с общего счета, где на балансе всегда больше 100
              000$.
            </p>
            <p className="ff_open_sans fs_22 fw_400 color_222 invest3_para1 mb-3">
              {" "}
              Нажмите на кнопку ниже и узнайте все лично от наших менеджеров
            </p>
            <div className="mt-md-5">
              <Link className="ff_open_sans fs_20 fw_700 fc_white  my-2  d-inline-block masterbtn">
                Узнать подробнее
              </Link>
            </div>
          </Col>
          <Col
            data-aos-duration="1000" data-aos="fade-left"
            lg={6}
            className="order-first order-lg-last d-flex justify-content-center align-items-center py-2"
          >
            <img className="w-100 macbook1" src={macbook} alt="macbook" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InvestCoinC;
