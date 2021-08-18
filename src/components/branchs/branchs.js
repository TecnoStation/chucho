import React from "react";
import { Button, Col, Row } from "antd";
import More from "../../assets/img/icons/more_vert-24px.svg";

export default function branchs(props) {
  const { data } = props;
  return data.map((branch, index) => (
    <Row
      key={index}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      className="rowbranch"
    >
      <Col className="gutter-row namesbranch" id="namesbranch" span={8}>
        <span>{branch.name}</span>
      </Col>
      <Col
        className="gutter-row directionbranch"
        id="directionbranch"
        span={12}
      >
        <span>{branch.direction}</span>
      </Col>

      <Col className="gutter-row" span={4}>
        <Button className="points" style={{ textAlign: "left" }}>
          <img alt="logo" src={More} width="25" height="25" />
        </Button>
      </Col>
    </Row>
  ));
}
