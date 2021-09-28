import { Button, Col, Row, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import ModalNotAutorized from "./components/ModalNotAutorized/ModalNotAutorized";

function ModalDigitalExpedient({ expedient, setExpedient }) {
  const [NotAutorized, setNotAutorized] = useState(false);

  const data = [
    {
      idDocument: 0,
      name: "Comprobante de Ingresos",
      status: 1,
      uploadDate: "10 MAY 2016",
    },
    {
      idDocument: 1,
      name: "Comprobante de Estudios",
      status: 2,
      uploadDate: "10 MAY 2016",
    },
    {
      idDocument: 2,
      name: "Comprobante de Domicilio",
      status: 3,
      uploadDate: "10 MAY 2016",
    },
    {
      idDocument: 3,
      name: "Identificación Oficial",
      status: 1,
      uploadDate: "10 MAY 2016",
    },
    {
      idDocument: 4,
      name: "Identificación Oficial",
      status: 1,
      uploadDate: "10 MAY 2016",
    },
  ];

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
            <b className="primaryText">Documento</b>
          </Col>
          <Col span={6}>
            <b className="primaryText">Estatus</b>
          </Col>
          <Col span={7}>
            <b className="primaryText">Fecha de carga</b>
          </Col>
          <Col span={4}>
            <b className="primaryText">Acciones</b>
          </Col>
        </Row>

        {data.map((document, index) => (
          <Row
            className="dividerBottomFull"
            style={{
              textAlign: "center",
              marginTop: "15px",
              paddingBottom: "15px",
            }}
          >
            <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
              <span className="secondaryText">{document.name}</span>
            </Col>
            <Col style={{ paddingLeft: "15px" }} span={6}>
              {document.status === 1 ? (
                <span className="secondaryText">Por Autorizar</span>
              ) : document.status === 2 ? (
                <span className="secondaryText">Autorizado</span>
              ) : (
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
              )}
            </Col>
            <Col style={{ paddingLeft: "10px" }} span={7}>
              <span className="secondaryText">{document.uploadDate}</span>
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
        ))}
      </Modal>
      <ModalNotAutorized
        NotAutorized={NotAutorized}
        setNotAutorized={setNotAutorized}
      />
    </>
  );
}

export default ModalDigitalExpedient;
