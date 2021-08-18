import React from "react";
import { Col, Row, Select, Form, Checkbox } from "antd";
import Avatar from "../../../assets/img/avatar.png";
import { Link } from "react-router-dom";

const { Option } = Select;

export default function Member({ fact, removeFact }) {
  function handleRemoveClick() {
    removeFact(fact.id);
  }

  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ textAlign: "left", marginTop: "10px", marginLeft: "-30px" }}
    >
      <Col key={fact.id} className="gutter-row" span={8}>
        <Row>
          <Col style={{ textAlign: "left" }} span={5}>
            <p>
              <img alt="ico" width="45" src={Avatar} />
            </p>
          </Col>
          <Col style={{ paddingLeft: "5px" }} span={19}>
            <span>
              <b>{fact.title}</b>
            </span>
            <br />
            <span>Programador JR</span>
          </Col>
        </Row>
      </Col>
      <Col
        className="gutter-row"
        style={{ textAlign: "right", marginLeft: "10px" }}
        span={2}
      >
        <Form.Item>
          <Checkbox />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={8}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={4}></Col>
          <Col className="gutter-row" span={20}>
            <Form.Item name="rol" key={1}>
              <Select placeholder="Product Owner">
                <Option value="jack">SCRUM</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" style={{ textAlign: "center" }} span={5}>
        <Link className="link" href="#" onClick={handleRemoveClick}>
          Eliminar
        </Link>
      </Col>
    </Row>
  );
}
