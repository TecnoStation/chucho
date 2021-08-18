import React from "react";
import { Button, Col, Row, Modal } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ModalHistorialColaborator({
  HistorialC,
  setHistorialC,
}) {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Modal
        title="Historial del Colaborador"
        className="largeModal"
        visible={HistorialC}
        onCancel={() => {
          setHistorialC(false);
        }}
        onOk={() => {
          setHistorialC(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setHistorialC(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setHistorialC(false);
            }}
          >
            Aceptar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={5}>
            <b>Puesto</b>
          </Col>
          <Col span={6}>
            <b>Periodo de inicio</b>
          </Col>
          <Col span={9}>
            <b>Periodo final</b>
          </Col>
          <Col span={4}>
            <b>Detalle</b>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Diseñador Gráfico</Col>
          <Col span={6}>15 MAY 2014</Col>
          <Col span={9}>1 de ABR 2016</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Lider de área</Col>
          <Col span={6}>1 ABR 2016</Col>
          <Col span={9}>30 OCT 2017</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={5}>Gerende de división</Col>
          <Col span={6}>30 OCT 2017</Col>
          <Col span={9}>A LA FECHA</Col>
          <Col span={4}>
            <Link className="iconBlue" to="#">
              Ver Detalle
            </Link>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
