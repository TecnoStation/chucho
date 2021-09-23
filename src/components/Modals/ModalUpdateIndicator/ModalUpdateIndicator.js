import React, { useState } from "react";

import { Button, Modal, Row, Col, Input, Upload } from "antd";
import { useTranslation } from "react-i18next";
import { RiArrowUpSFill } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import Editor from "../../Editor/Editor";

import "./ModalUpdateIndicator.scss";

function ModalUpdateIndicator({ Indicator, setIndicator, setHistorial }) {
  const [t, i18n] = useTranslation("global");
  const [value, setValue] = useState("");

  return (
    <>
      <>
        <Modal
          title="Actualizar indicador"
          className="updateModal"
          centered={true}
          visible={Indicator}
          onCancel={() => {
            setIndicator(false);
          }}
          footer={[
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setIndicator(false);
              }}
            >
              Cancelar
            </Button>,
            <Button
              className="primary"
              onClick={() => {
                setIndicator(false);
                setHistorial(true);
              }}
            >
              Actualizar
            </Button>,
          ]}
        >
          <Row style={{ textAlign: "center" }}>
            <Col style={{ textAlign: "left" }} span={6}>
              <span>Actual</span>
            </Col>
            <Col span={12}>
              <span>Objetivos</span>
            </Col>
            <Col span={6}>
              <span>Tendencia</span>
            </Col>
          </Row>
          <Row style={{ textAlign: "center", marginTop: "10px" }}>
            <Col span={6}>
              <Input
                style={{ textAlign: "center", borderRadius: "5px" }}
                type="text"
              />
            </Col>
            <Col style={{ paddingLeft: "15px" }} span={11}>
              <span>20</span>
            </Col>
            <Col className="iconGreen" span={7}>
              <span>125%</span>
              <span>
                <RiArrowUpSFill
                  style={{ position: "absolute", top: "-4px" }}
                  className="iconsize3"
                />
              </span>
            </Col>
          </Row>
          <Row style={{ textAlign: "left", marginTop: "10px" }}>
            <Col span={24}>
              <span>Agregar contexto:</span>
            </Col>
          </Row>
          <Row style={{ textAlign: "left", marginTop: "10px" }}>
            <Col span={24}>
              <Editor id="1" value={value} setValue={setValue} />
            </Col>
          </Row>
        </Modal>
      </>
    </>
  );
}

export default ModalUpdateIndicator;
