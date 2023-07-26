import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer_invest from "../assets/svg/invest_footer.svg";
import { Top_arrow } from "./IconsSvg";

const Footer = () => {
  return (
    <div className="Standard_bg py-3 py-md-5">
      <Container>
        <Row>
          <Col
            data-aos-duration="1000"
            data-aos="fade-down"
            lg={6}
            className=" my-3"
          >
            <div className="d-flex flex-column flex-sm-row align-items-start">
              <img src={Footer_invest} alt="Footer_invest mr-3" />
              <div className="ms-sm-5 mt-3 mt-sm-0">
                <p className="ff_jost fs_24 fw_400 fc_white mb-0 footer_para1 ">
                  123 Market St. #22B Charlottesville, California 44635
                </p>
                <span className="ff_poppins fs_14 fw_400 fc_white exmple_border">
                  contact@exmpl.page
                </span>
              </div>
            </div>
          </Col>
          <Col
            data-aos-duration="1000"
            data-aos="fade-down"
            lg={6}
            className="d-flex justify-content-between justify-lg-content-around my-3"
          >
            <ul className="ps-0">
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  About
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Growers
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Merchants
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Partners
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="ps-0">
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Facebook{" "}
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Telegram
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Watsapp
                </Link>
              </li>
              <li>
                <Link className="ff_poppins fs_12 fw_400 fc_white mb-1 d-inline-block nav_text">
                  Instagram
                </Link>
              </li>
            </ul>
            <div>
              {/* <a href=""><Top_arrow/></a> */}
              <Link>
                <Top_arrow />
              </Link>
            </div>
          </Col>
        </Row>
        <p
          data-aos-duration="1000"
          data-aos="fade-up"
          className="ff_poppins fs_12 fw_400 fc_white mb-1 text-center py-2 py-md-5"
        >
          © 2022 Invest Coin. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
