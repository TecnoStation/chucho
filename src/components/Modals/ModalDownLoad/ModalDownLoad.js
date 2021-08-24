import React from "react";
import { Button, Col, Modal, Row } from "antd";
import { AiOutlineFileText } from "react-icons/ai";

function ModalDownLoad({ ModalDownload, setModalDownload }) {
  return (
    <Modal
      className="middleModal"
      title="Descarga el archivo"
      visible={ModalDownload}
      onCancel={() => {
        setModalDownload(false);
      }}
      footer={[
        <Button
          style={{ marginRight: "15px" }}
          className="secondary"
          onClick={() => {
            setModalDownload(false);
          }}
        >
          Cancelar
        </Button>,
        <input
          type="button"
          className="primary"
          onClick={() => {
            setModalDownload(false);
          }}
          value="Descargar"
        />,
      ]}
    >
      <Row>
        <Col span={12}>
          <h3>Archivo</h3>
        </Col>
        <Col span={12}>
          <h3>Fecha de creación</h3>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col span={3} style={{ textAlign: "right", marginTop: "-15px" }}>
          <AiOutlineFileText
            style={{ fontSize: "40px" }}
            className="iconGreen"
          />
        </Col>
        <Col span={10}>
          <span>organigram2018.csv</span>
        </Col>
        <Col span={11}>12-julio-2021</Col>
      </Row>
    </Modal>
  );
}

export default ModalDownLoad;
