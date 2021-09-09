import React from "react";
import { Col, Row } from "antd";

function CompetenciesList({ competence }) {
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col span={18}>
        <span className="secondaryText">{competence.name}</span>
      </Col>
      <Col span={6} style={{ paddingLeft: "15px" }}>
        <span className="secondaryText">{competence.level}</span>
      </Col>
    </Row>
  );
}

export default CompetenciesList;
