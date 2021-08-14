import React from "react";
import { Form, Button, Modal, Select, Row, Col } from "antd";

import "./ModalColor.scss";

const { Option } = Select;

export default function ModalColor({ Color, setColor }) {
  return (
    <>
      <Modal
        title="Seleccionar color para el área"
        className="smallModal"
        visible={Color}
        onCancel={() => {
          setColor(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setColor(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setColor(false);
            }}
          >
            Aplicar
          </Button>,
        ]}
      >
        <Form.Item name="color">
          <Select placeholder="Selecciona un color">
            <Option value="0">
              <Row>
                <Col span={6}>
                  <div className="Red"></div>
                </Col>
                <Col style={{ textAlign: "center" }} span={18}>
                  Rojo
                </Col>
              </Row>
            </Option>
            <Option value="1">
              <Row>
                <Col span={6}>
                  <div className="Orange"></div>
                </Col>
                <Col style={{ textAlign: "center" }} span={18}>
                  Naranja
                </Col>
              </Row>
            </Option>
            <Option value="2">
              <Row>
                <Col span={6}>
                  <div className="Cyan"></div>
                </Col>
                <Col style={{ textAlign: "center" }} span={18}>
                  Cyan
                </Col>
              </Row>
            </Option>
          </Select>
        </Form.Item>
      </Modal>
    </>
  );
}
