import { Button, Col, Dropdown, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../../assets/img/avatar.png";
import More from "../../../../assets/img/icons/more_vert-24px.svg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import Insings from "../../../../assets/img/icons/insights-24px.svg";
import Trending from "../../../../assets/img/icons/trending_up-24px.svg";
import MenuOrganigram from "../MenuOrganigram/MenuOrganigram";

function CardNodeEraseGrandChild() {
  const [visible, setVisible] = useState(false);
  return (
    <div
      style={{ marginTop: "15px", borderColor: "#2cccd3", marginLeft: "105px" }}
      className="CardNodeGrandChild"
    >
      <Row
        style={{
          textAlign: "left",
          height: "50px",
          paddingBottom: "50px",
        }}
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
          <span>42%</span>
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
          <span>35%</span>
        </Col>
        <Col span={3} className="iconRed" style={{ fontSize: "18px" }}>
          <GiOfficeChair />
        </Col>
        <Col span={3} className="iconRed">
          <span>8</span>
        </Col>
        <Col span={3} className="iconGray" style={{ fontSize: "16px" }}>
          <FaUserAlt />
        </Col>
        <Col span={3}>
          <span>18</span>
        </Col>
      </Row>
      <svg
        className="line"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="150"
        viewBox="0 0 140 90"
        style={{ marginTop: "-170px" }}
      >
        <path
          d="m 5,-300 v 480 h 95"
          fill="none"
          stroke="#2cccd3"
          stroke-width="5"
        />
      </svg>
    </div>
  );
}

export default CardNodeEraseGrandChild;
