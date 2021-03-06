import React, { useState } from "react";
import { Col, Dropdown, Row } from "antd";
import { Link } from "react-router-dom";
import Avatar from "../../../../assets/img/avatar.png";
import More from "../../../../assets/img/icons/more_vert-24px.svg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import Insings from "../../../../assets/img/icons/insights-24px.svg";
import Trending from "../../../../assets/img/icons/trending_up-24px.svg";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import MenuOrganigram from "../MenuOrganigram/MenuOrganigram";

import "./CardNode.scss";

export default function CardNodeEraseGrandFather({
  setModalPassword,
  fathers,
  setFathers,
  index,
}) {
  const [t, i18n] = useTranslation("global");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div id="GrandFather">
        <div>
          <p className="showBlock">Área de Marketing</p>
        </div>

        <div className="CardNodeGrandFather" style={{ borderColor: "#2cccd3" }}>
          <Row
            style={{ textAlign: "left", height: "50px", paddingBottom: "50px", marginTop: "5px" }}
            className="dividerBottomFull"
          >
            <Col span={5}>
              <p>
                <img
                  style={{ marginTop: "-5px" }}
                  alt="ico"
                  width="55"
                  src={Avatar}
                />
              </p>
            </Col>
            <Col span={16}>
              <span>Panchita Lopez</span>
              <br />
              <span>
                <b>Directora de marketing</b>
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
            <Col span={3}>
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
            <Col span={3} className="iconRed" style={{ fontSize: "16px" }}>
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
          style={{
            marginTop: "10px",
            marginLeft: "0px",
            paddingBottom: "15px",
          }}
        >
          <Link
            to="#"
            onClick={() => {
              setFathers([
                ...fathers,
                {
                  idFather: fathers.length,
                },
              ]);
              console.log(fathers);
            }}
          >
            <PlusCircleOutlined style={{ fontSize: "20px" }} />
          </Link>
        </div>
      </div>
    </>
  );
}
