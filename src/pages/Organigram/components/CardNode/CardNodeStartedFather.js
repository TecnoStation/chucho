import { Col, Dropdown, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import More from "../../../../assets/img/icons/more_vert-24px.svg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import Insings from "../../../../assets/img/icons/insights-24px.svg";
import Trending from "../../../../assets/img/icons/trending_up-24px.svg";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import MenuOrganigram from "../MenuOrganigram/MenuOrganigram";

import "./CardNode.scss";

export default function CardNodeStartedFather({ setModalPassword }) {
  const [t, i18n] = useTranslation("global");
  const [active, setActive] = useState("CardNodeGrandChildhide");
  const [circle, setCircle] = useState("hide");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ marginTop: "30px", width: "380px" }}>
        <div>
          <p className="showBlock">Nombre del Área</p>
        </div>
        <div
          onClick={() => {
            setCircle("showBlock");
          }}
          className="CardNodeGrandFather"
        >
          <Row
            style={{ textAlign: "left", height: "50px", paddingBottom: "50px" }}
            className="dividerBottomFull"
          >
            <Col span={5}>
              <p>
                <FaUserCircle
                  className="iconGray"
                  style={{ marginTop: "5px", fontSize: "40px" }}
                  alt="ico"
                />
              </p>
            </Col>
            <Col span={16}>
              <span>Nombre del colaborador</span>
              <br />
              <span>
                <b>Nombre del cargo</b>
              </span>
            </Col>
            <Col span={3}>
              <Dropdown
                overlay={<MenuOrganigram setVisible={setVisible} />}
                visible={visible}
                onVisibleChange={(e) => {
                  setVisible(e);
                }}
                trigger={["click"]}
              >
                <Link
                  to="#"
                  className="ant-dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img
                    style={{ marginTop: "5px" }}
                    alt="logo"
                    src={More}
                    width="30"
                    height="30"
                  />
                </Link>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ marginTop: "3px" }}>
            <Col span={3} className="iconGray" style={{ fontSize: "20px" }}>
              <img
                style={{ marginTop: "-15px" }}
                alt="ico"
                width="22"
                src={Trending}
              />
            </Col>
            <Col span={3} className="iconGreenTwo">
              <span>0%</span>
            </Col>
            <Col className="iconGray" span={3}>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="20"
                src={Insings}
              />
            </Col>
            <Col span={3} className="iconGreenTwo">
              <span>0%</span>
            </Col>
            <Col span={3} className="iconRed" style={{ fontSize: "18px" }}>
              <GiOfficeChair />
            </Col>
            <Col span={3} className="iconRed">
              <span>0</span>
            </Col>
            <Col span={3} className="iconGray" style={{ fontSize: "16px" }}>
              <FaUserAlt />
            </Col>
            <Col span={3}>
              <span>0</span>
            </Col>
          </Row>
        </div>
        <div
          className={circle}
          style={{
            marginTop: "10px",
            marginLeft: "0px",
            paddingBottom: "15px",
          }}
        >
          <Link
            to="#"
            onClick={() => {
              // setFathers([
              //   ...fathers,
              //   {
              //     idFather: fathers.length,
              //   },
              // ]);
            }}
          >
            <PlusCircleOutlined style={{ fontSize: "20px" }} />
          </Link>
        </div>

        <div className={active}></div>
      </div>
    </>
  );
}
