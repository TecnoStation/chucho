import React from "react";
import { Button, Col, Modal, Row } from "antd";
import Warning from "../../../assets/img/icons/atencion.svg";

function ModalMessages({ message, setMessage, setHistorial }) {
  return (
    <Modal
      title={false}
      className="MessagesModal"
      visible={message}
      closable={false}
      centered={true}
      footer={false}
    >
      <Row style={{ textAlign: "center", marginTop: "-10px" }}>
        <Col span={24}>
          <p>
            <img alt="ico" className="" src={Warning} />
          </p>
        </Col>
        <Col span={24}>
          <h2>
            <b>¡Atención!</b>
          </h2>
        </Col>
        <Col span={24}>
          <h3>Estás a punto de eliminar el borrador.</h3>
        </Col>
        <Col span={24}>
          <h3>¿Seguro deseas eliminarlo?</h3>
          <br />
        </Col>
        <Col span={24}>
          <Button
            style={{ marginRight: "15px" }}
            onClick={() => {
              setMessage(false);
              setHistorial(true);
            }}
            className="secondary btn"
          >
            Cancelar
          </Button>
          <Button
            className="primary btn"
            onClick={() => {
              setMessage(false);
              setHistorial(true);
            }}
          >
            Eliminar
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalMessages;
