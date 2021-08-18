import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Row, Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";

export default function Modalcustom(props) {
  const [t, i18n] = useTranslation("global");
  const closeModal = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
  };

  return (
    <div id="screen" className="screen">
      <Card
        title="Renombre de equipo"
        extra={
          <CloseOutlined onClick={closeModal} style={{ cursor: "pointer" }} />
        }
        bordered={false}
        style={{ width: 300 }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <Form>
              <Form.Item>
                <Input
                  type="text"
                  key={1}
                  id="nameTeam"
                  onChange={props.onChange}
                  defaultValue={props.dato}
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginTop: "-10px", textAlign: "center" }}
        >
          <Col className="gutter-row" span={12}>
            <Button className="secondary" onClick={closeModal}>
              Cancelar
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <Button className="primary">Guardar</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
