import { Button, Col, Row, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import ModalNotAutorized from "./components/ModalNotAutorized/ModalNotAutorized";

function ModalDigitalExpedient({ expedient, setExpedient }) {
  const [NotAutorized, setNotAutorized] = useState(false);
  return (
    <>
      <Modal
        title="Expediente: Marco Antonio Remirez Perez"
        className="largeModal"
        visible={expedient}
        onCancel={() => {
          setExpedient(false);
        }}
        footer={false}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={7}>
            <b>Documento</b>
          </Col>
          <Col span={6}>
            <b>Estatus</b>
          </Col>
          <Col span={7}>
            <b>Fecha de carga</b>
          </Col>
          <Col span={4}>
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Ingresos
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            Por Autorizar
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col
            style={{
              paddingLeft: "0px",
              textAlign: "right",
              marginLeft: "10px",
            }}
            span={2}
          >
            <Link className="iconGreen" style={{ fontSize: "18px" }} to="#">
              <IoMdTrash className="iconGray" />
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Estudios
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            Autorizado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col
            style={{
              paddingLeft: "0px",
              textAlign: "right",
              marginLeft: "10px",
            }}
            span={2}
          >
            <Link className="iconGreen" style={{ fontSize: "18px" }} to="#">
              <IoMdTrash className="iconGray" />
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Domicilio
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            <Link
              className="link"
              onClick={() => {
                setExpedient(false);
                setNotAutorized(true);
              }}
              to="#"
            >
              No autorizado
            </Link>
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col
            style={{
              paddingLeft: "0px",
              textAlign: "right",
              marginLeft: "10px",
            }}
            span={2}
          >
            <Link className="iconGreen" style={{ fontSize: "18px" }} to="#">
              <IoMdTrash className="iconGray" />
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            Por Autorizar
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col
            style={{
              paddingLeft: "0px",
              textAlign: "right",
              marginLeft: "10px",
            }}
            span={2}
          >
            <Link className="iconGreen" style={{ fontSize: "18px" }} to="#">
              <IoMdTrash className="iconGray" />
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            Autorizado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col
            style={{
              paddingLeft: "0px",
              textAlign: "right",
              marginLeft: "10px",
            }}
            span={2}
          >
            <Link className="iconGreen" style={{ fontSize: "18px" }} to="#">
              <IoMdTrash className="iconGray" />
            </Link>
          </Col>
        </Row>
      </Modal>
      <ModalNotAutorized
        NotAutorized={NotAutorized}
        setNotAutorized={setNotAutorized}
      />
    </>
  );
}

export default ModalDigitalExpedient;
