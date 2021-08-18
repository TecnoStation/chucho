import React from "react";
import { Button, Col, Row } from "antd";
import Pencil from "../../assets/img/icons/edit-24px.svg";
import Delete from "../../assets/img/icons/delete-24px.svg";
import { useTranslation } from "react-i18next";

export default function Competencies(props) {
  const [t, i18n] = useTranslation("global");
  const { data } = props;

  return data.map((data, index) => (
    <Row
      key={index}
      id={"competence" + index}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      className="rowSucursal"
    >
      <Col
        key={index}
        className="gutter-row nombresSucursal"
        style={{ textAlign: "left", paddingLeft: "30px" }}
        span={14}
      >
        <span id={"nomCompe" + index}>{data.competence}</span>
      </Col>
      <Col className="gutter-row direccionSucursal" span={4}>
        <span id={"nivel" + index}>{data.nivel}</span>
      </Col>

      <Col className="gutter-row" span={6}>
        <Button className="points">
          {" "}
          <img
            alt="logo"
            onClick={(e) => props.myonClick(index, 1, data, e)}
            src={Pencil}
            width="18"
            height="18"
          />
        </Button>
        <Button className="points">
          {" "}
          <img
            alt="logo"
            onClick={(e) => props.myonClick(index, 0, data, e)}
            src={Delete}
            width="18"
            height="18"
          />
        </Button>
      </Col>
    </Row>
  ));
}
