import { Col, Row } from "antd";
import React from "react";

function ExperienceList({ Experiences }) {
  return Experiences.map((experience, index) => (
    <>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: "20px" }}
      >
        <Col className="gutter-row" span={24}>
          <span>
            <b>{experience.position}</b>
          </span>
          <br></br>
          <span className="iconSureGray">
            {experience.start} - {experience.end}
          </span>
        </Col>
      </Row>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: "20px" }}
      >
        <Col className="gutter-row" span={24}>
          <p>{experience.activity}</p>
        </Col>
      </Row>
    </>
  ));
}

export default ExperienceList;
