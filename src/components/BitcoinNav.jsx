import React, { useState } from "react";
import Logo from "../assets/png/Logo.png";
import { Link } from "react-router-dom";
import { Instagram } from "./IconsSvg";
import { Telegram } from "./IconsSvg";
import { Whatsapp } from "./IconsSvg";
import { Container } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

const BitcoinNav = () => {
  const [first, setFirst] = useState(true);

  function shownav() {
    setFirst(false);
    document.body.classList.add("overflow-hidden");
  }
  function hidenav() {
    setFirst(true);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Container className="d-flex align-items-center justify-content-between pt-3 pb-3 pt-lg-5 pb-lg-5">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center ">
            <img src={Logo} alt="Logo" />

            <ul
              className={
                first
                  ? "d-flex nav_bar mb-0 "
                  : " d-flex nav_bar show mb-0 gap-lg-5"
              }
            >
              <li className="ml_116">
                <Link onClick={() => {
                  setFirst(true);
                }} className="ff_open_sans fs_22 fw_300 fc_white nav_text">
                  Особенности
                </Link>
              </li>
              <li className="ml_80">
                <Link onClick={() => {
                  setFirst(true);
                }} className="ff_open_sans fs_22 fw_300 fc_white nav_text">
                  Отзывы
                </Link>
              </li>
              <li className="ml_80">
                <Link onClick={() => {
                  setFirst(true);
                }} className="ff_open_sans fs_22 fw_300 fc_white nav_text">
                  Инвестиция
                </Link>
              </li>
              <li className="d-flex d-lg-none justify-content-between gap-3">
                <Link onClick={() => {
                  setFirst(true);
                }} className="instagram">
                  <Instagram />
                </Link>
                <Link onClick={() => {
                  setFirst(true);
                }} className="instagram">
                  <Telegram />
                </Link>
                <Link onClick={() => {
                  setFirst(true);
                }} className="instagram">
                  <Whatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="d-lg-flex d-none gap-3 d-lg-block align-items-center ps-3 mb-0">
          <li>
            <Link className="instagram d-inline-block">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link className="instagram d-inline-block">
              <Telegram />
            </Link>
          </li>
          <li>
            <Link className="instagram d-inline-block">
              <Whatsapp />
            </Link>
          </li>
        </ul>
        <h3
          className="position-relative z-3 d-lg-none"
          onClick={first ? shownav : hidenav}
        >
          {" "}
          {first ? (
            <Icon icon={menu} size={50} className="menu_icon" />
          ) : (
            <Icon icon={x} size={50} className="menu_icon" />
          )}
        </h3>
        <input type="checkbox" id="menubox" hidden />
      </Container>
    </>
  );
};

export default BitcoinNav;
