import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import handboy from "../assets/png/handboypic.png"
import { Link } from "react-router-dom";
const HandBoy = () => {
  return (
    <div className="py-5">
      <Container>
        <h2 className="ff_open_sans fs_48 fw_400 color_252 mb-4 text-center">
          Напишите нам
        </h2>
        <p className="ff_open_sans fs_28 fw_400 color_252 mt-2 text-center mx-auto mb-5 handboy_text">
          Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить
          быстро и нам важно узнать ваше мнение.
        </p>
        <Row>
          <Col data-aos-duration="1000" data-aos="fade-right"  md={6}>
            <div className="pt-md-5">
              <input
                type="text"
                placeholder="Ваше имя"
                className="ff_poppins fs_24 fw_500 color_252  w-100 handboy_input mt-md-5"
              />
            </div>
            <div className="my-3 my-md-5">
              <input
                type="text"
                placeholder="Страна"
                className="ff_poppins fs_24 fw_500 color_252  w-100 handboy_input"
              />
            </div>
            <div>
              <textarea
                name="Сообщение"
                id=""
                cols="20"
                rows="5"
                placeholder="Сообщение"
                className="ff_poppins fs_24 fw_500 color_252  w-100 handboy_input"
              ></textarea>
            </div>
            <Link className="ff_open_sans fs_20 fw_700 fc_white d-inline-block handboy_btn my-3 my-md-5">
              Отправить
            </Link>
          </Col>
          <Col data-aos-duration="1000" data-aos="fade-left"  md={6} className="d-flex align-items-start">
            <div>
              <img className="w-100" src={handboy} alt="handboy" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HandBoy;
