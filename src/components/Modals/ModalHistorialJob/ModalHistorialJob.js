import React, { useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HistorialData from "./components/HistorialData";

export default function ModalHistorialJob({ HistorialP, setHistorialP }) {
  const [t, i18n] = useTranslation("global");

   const [historialjobs, setHistorialjob] = useState([
      {
        id: 0,
        name: "Diseñador Gráfico",
        date: "10 MAY 2016",
        collaborators: "2 colaboradores"
      },
      {
        id: 1,
        name: "Diseñador web",
        date: "12 MAY 2018",
        collaborators: "1 colaboradores"
      },
      {
        id: 2,
        name: "Diseñador UI",
        date: "12 MAY 2020",
        collaborators: "2 colaboradores"
      },
    ]);

  return (
    <>
      <Modal
        title="Historial del Puesto"
        className="HistorialJobModal"
        visible={HistorialP}
        centered={true}
        onCancel={() => {
          setHistorialP(false);
        }}
        onOk={() => {
          setHistorialP(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setHistorialP(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
          style={{color: "#fff !important"}} 
          className="primary"
            onClick={() => {
              setHistorialP(false);

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
            <b>Creación</b>
          </Col>
          <Col style={{paddingLeft: "80px", paddingRight: "70px"}} span={9}>
            <b>Colaboradores que lo ocuparon</b>
          </Col>
          <Col style={{paddingLeft: "5px"}} span={4}>
            <b>Acciones</b>
          </Col>
        </Row>

         <div id="historialjob">
         {historialjobs.map((historialjob, index) => (
            <HistorialData  historialjob={historialjob} />
          ))}
         </div>


      </Modal>
    </>
  );
}
