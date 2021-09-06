import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalMessage from "../ModalMessage/ModalMessage";
import Warning from "../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";
import EraserData from "./components/EraserData/EraserData";

function ModalErasersList({ historial, setHistorial }) {
  const [t, i18n] = useTranslation("global");

  const [erasersList, setErasersList] = useState([
    {
      id: 0,
      name: "Área MKT",
      date: "10 MAY 2016",
    },
    {
      id: 1,
      name: "Área de TI A",
      date: "12 MAY 2016",
    },
    {
      id: 2,
      name: "Sucursal CUH",
      date: "12 MAY 2016",
    },
  ]);

  return (
    <>
      <Modal
        title="Lista de borradores"
        className="eraserList"
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

        {erasersList.map((eraser, index) => (
          <EraserData setHistorial={setHistorial} eraser={eraser} />
        ))}
      </Modal>
    </>
  );
}

export default ModalErasersList;
