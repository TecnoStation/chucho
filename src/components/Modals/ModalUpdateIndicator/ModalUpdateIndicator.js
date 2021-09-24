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
          footer={false}
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              paddingLeft: "7%",
            }}
          >
            <Row className="contentM">
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
            <Row
              className="contentM"
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <Col
                style={{
                  textAlign: "left",
                }}
                span={6}
              >
                <Input
                  style={{
                    width: "64px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
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
            <Row
              className="contentM"
              style={{
                textAlign: "left",
                marginTop: "30px",
              }}
            >
              <Col span={24}>
                <span>Agregar contexto:</span>
              </Col>
            </Row>
            <Row
              className="contentM"
              style={{
                textAlign: "left",
                marginTop: "10px",
              }}
            >
              <Col span={24}>
                <Editor id="1" value={value} setValue={setValue} />
              </Col>
            </Row>
          </div>
          <Row style={{ textAlign: "right", marginTop: "30px" }}>
            <Col span={24}>
              <Button
                style={{ marginRight: "15px" }}
                className="secondary"
                onClick={() => {
                  setIndicator(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                className="primary"
                onClick={() => {
                  setIndicator(false);
                  setHistorial(true);
                }}
              >
                Actualizar
              </Button>
            </Col>
          </Row>
        </Modal>
      </>
    </>
  );
}

export default ModalUpdateIndicator;
