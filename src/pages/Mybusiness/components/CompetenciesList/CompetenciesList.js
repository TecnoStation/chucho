import React from "react";
import { Col, Row } from "antd";

function CompetenciesList({ competence }) {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={18}>
        {competence.name}
        <span className="span"></span>
      </Col>
      <Col span={6} style={{ paddingLeft: "15px" }}>
        {competence.level}
        <span className="span"></span>
      </Col>
    </Row>
  );
}

export default CompetenciesList;
