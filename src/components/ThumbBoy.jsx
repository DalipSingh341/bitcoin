import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import thumb1 from "../assets/png/thumbboy.png";
import thumb2 from "../assets/png/thumb2.png";
import thumb3 from "../assets/png/thumb3.png";
import { Link } from "react-router-dom";
import play_girl_btn from "../assets/svg/girl_play_btn.svg"

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ThumbBoy = () => {
  
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h2>Amazon</h2>
        </Modal.Header>
        <Modal.Body>
          You Can Start now
          <iframe
            width="450"
            height="315"
            src="https://www.youtube.com/embed/yN9t3Myv97c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a
            target="blank"
            className="ff-bold fc_black d-inline-block full_screen ff_open_sans fs_14 "
            variant="primary"
            onClick={handleClose}
            href="https://youtu.be/5e9_hp0nh1Q"
          >
            Full Screen
          </a>
        </Modal.Footer>
      </Modal>
      <Container className="py-4">
        <Row>
          <Col data-aos-duration="3000" data-aos="fade-right" lg={7}>
            <div className="d-flex flex-column flex-md-row py-3 py-md-5 gap-md-3">
              <img src={thumb1} alt="thumb1" />
              <div className="overflow-hidden mt-4 position-relative cp girl_1">
                <div
                  className="position-absolute play_girl_btn "
                  onClick={handleShow}
                >
                  <img src={play_girl_btn} alt="play_girl_btn" />
                </div>
                <img className="w-100 thumb2 " src={thumb2} alt="thumb2" />
              </div>
              <div className="overflow-hidden mt-5  position-relative cp girl_1">
                <img
                  className="w-100 thumb2 mt-md-3"
                  src={thumb3}
                  alt="thumb3"
                />
                <div
                  className="position-absolute play_girl_btn "
                  onClick={handleShow}
                >
                  <img src={play_girl_btn} alt="play_girl_btn" />
                </div>
              </div>
            </div>
          </Col>
          <Col
            data-aos-duration="3000"
            data-aos="fade-left"
            lg={5}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="ms-lg-4">
              <h2 className="ff_open_sans fs_20 fw_700 color_252 mb-3">
                Обучение?
              </h2>
              <p className="ff_open_sans fs_40 fw_400 color_252 ThumbPara1 mb-4">
                Конечно! Индивидуальные уроки тем кто хочет научиться
                инвестировать.
              </p>
              <h2 className="ff_open_sans fs_20 fw_700 color_252 mb-0">
                Подробнее посмотрите на видео
              </h2>
              <h2 className="ff_open_sans fs_18 fw_400 color_222 ">
                Или напишите менеджеру
              </h2>
              <Link className="ff_open_sans fs_20 fw_400 fc_white masterbtn d-inline-block mt-2 mt-md-4">
                Написать
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThumbBoy;
