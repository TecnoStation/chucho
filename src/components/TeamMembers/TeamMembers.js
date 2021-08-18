import React from "react";
import { Col, Row, Select } from "antd";
import Avatar from "../../assets/img/avatar.png";
import Form from "antd/lib/form/Form";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function TeamMembers() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <Col className="gutter-row" span={8}>
          <Row>
            <Col span={6}>
              <p>
                <img alt="ico" width="45" src={Avatar} />
              </p>
            </Col>
            <Col span={18}>
              <span>
                <b>Laura Mendoza</b>
              </span>
              <br />
              <span>Programador JR</span>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item style={{ textAlign: "center" }}>
            <Checkbox />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
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
        <Col className="gutter-row" span={6}>
          <Link className="link" to="#">
            Sustituir
          </Link>{" "}
          |{" "}
          <Link className="link" to="#">
            Eliminar
          </Link>
        </Col>
      </Row>
    </>
  );
}
