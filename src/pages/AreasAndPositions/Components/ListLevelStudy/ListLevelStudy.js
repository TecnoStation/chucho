import { Col, Row } from "antd";
import React from "react";

function ListLevelStudy({ levels }) {
  return (
    <>
      {levels.map((level, index) => (
        <Row
          key={index}
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginTop: "20px" }}
        >
          <Col className="gutter-row" span={12}>
            <span>
              <span>{level.stydyLevel}</span>
            </span>
          </Col>
          <Col className="gutter-row" span={12}>
            <span>
              <span>{level.years}</span>
            </span>
          </Col>
        </Row>
      ))}
    </>
  );
}

export default ListLevelStudy;
