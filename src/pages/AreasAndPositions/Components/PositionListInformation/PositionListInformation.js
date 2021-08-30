import { Col, Row } from "antd";
import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { IoMdSquare, IoMdTrash } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PositionListInformation({ PositionsInfo, setModalMove }) {
  const [t, i18n] = useTranslation("global");
  return PositionsInfo.map((position, index) => (
    <Row className="info3Full subareasdiv row" style={{ marginTop: "10px" }}>
      <Col className="gutter-row col" style={{ textAlign: "left" }} span={8}>
        <IoMdSquare
          className="iconGreen iconsize"
          style={{ marginLeft: "10px" }}
        />{" "}
        <span>{position.positionName}</span>{" "}
      </Col>
      <Col className="gutter-row" span={4}>
        <AiOutlineCheckCircle className="iconsize" />
      </Col>
      <Col className="gutter-row" span={4}>
        <AiOutlineExclamationCircle className="iconRed iconsize" />
      </Col>
      <Col className="gutter-row" span={4}>
        <AiOutlineExclamationCircle className="iconRed iconsize" />
      </Col>
      <Col className="gutter-row iconGray iconsize" span={4}>
        <Link
          to={
            "/" +
            t("routes.organigram") +
            "/" +
            t("paths_organigram.areasandpositions-addjob")
          }
          className="iconGray"
        >
          <RiPencilFill className="iconsize" style={{ marginRight: "10px" }} />
        </Link>
        <IoMdTrash
          className="iconsize"
          onClick={() => {
            setModalMove({
              visible: true,
              mode: 2,
              idPositionInfo: position.idPositionInfo,
              PositionsInfo: PositionsInfo,
            });
          }}
          style={{ marginRight: "5px" }}
        />
      </Col>
    </Row>
  ));
}

export default PositionListInformation;
