import { Button, Col, Modal, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function ModalErasers({ historial, setHistorial }) {
  return (
    <>
      <Modal
        title="Lista de borradores"
        className="largeModal"
        visible={historial}
        onCancel={() => {
          setHistorial(false);
        }}
        onOk={() => {
          setHistorial(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setHistorial(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setHistorial(false);
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
          <Col span={6}>
            <b>Nombre</b>
          </Col>
          <Col span={7}>
            <b>Modificación</b>
          </Col>

          <Col span={11}>
            <b>Acciones</b>
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
          <Col span={6}>Área MKT</Col>
          <Col span={8}>10 MAY 2016</Col>
          <Col span={2}>
            <Link className="iconBlue" to="#">
              Ver
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link className="iconBlue" to="#">
              Editar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Eliminar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Aplicar
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
          <Col span={6}>Área de TI A</Col>
          <Col span={8}>12 MAY 2016</Col>
          <Col span={2}>
            <Link className="iconBlue" to="#">
              Ver
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link className="iconBlue" to="#">
              Editar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Eliminar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Aplicar
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
          <Col span={6}>Sucursal CUH</Col>
          <Col span={8}>12 MAY 2016</Col>
          <Col span={2}>
            <Link className="iconBlue" to="#">
              Ver
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link className="iconBlue" to="#">
              Editar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Eliminar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Aplicar
            </Link>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
