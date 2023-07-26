import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import slider1 from "../assets/png/slider1.png";
import slider2 from "../assets/png/slider2.png";
import slider3 from "../assets/png/slider3.png";
import blue_ply_btn from "../assets/svg/blue_playbtn.svg";

export default function SimpleSlider() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var settings = {
    centerMode: true,
    centerPadding: "-170px",
    slidesToShow: 2.5,
    autoplaySpeed: 1200,
    arrows: false,
    autoplay: true,
    pauseOnHover:false,
    speed:1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h2>React</h2>
        </Modal.Header>
        <Modal.Body>
          You Can Start now
          <iframe
            width="460"
            height="415"
            src="https://www.youtube.com/embed/QFaFIcGhPoM"
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
          <a target="blank"
            className="ff-bold fc_black d-inline-block full_screen ff_open_sans fs_14 "
            variant="primary"
            onClick={handleClose}
            href="https://youtu.be/QFaFIcGhPoM"
          >
            Full Screen
          </a>
        </Modal.Footer>
      </Modal>
      <Slider {...settings}>
        <div className="px-5 py-5">
          <div className="axon2 overflow-hidden position-relative">
            <div className="position-absolute blue_btn" onClick={handleShow}>
              <img src={blue_ply_btn} alt="blue_ply_btn" />
            </div>
            <img className=" axon1  h-100" src={slider1} alt="slider1" />
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="axon2 overflow-hidden position-relative">
            <div className="position-absolute blue_btn" onClick={handleShow}>
              <img src={blue_ply_btn} alt="blue_ply_btn" />
            </div>
            <img className="axon1  h-100" src={slider2} alt="slider2" />
          </div>
        </div>
        <div className="px-5 py-5">
          <div className="axon2 overflow-hidden position-relative">
            <div className="position-absolute blue_btn" onClick={handleShow}>
              <img src={blue_ply_btn} alt="blue_ply_btn" />
            </div>
            <img className="axon1 h-100" src={slider3} alt="slider3" />
          </div>
        </div>
      
      </Slider>
    </div>
  );
}
