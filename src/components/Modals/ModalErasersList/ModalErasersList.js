import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalMessage from "../ModalMessage/ModalMessage";
import Warning from "../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";


function ModalErasersList({ historial, setHistorial }) {
  const [t, i18n] = useTranslation("global");
  const [screen, setScreen] = useState("screen");
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
            <Link className="iconBlue" to="/organigrama/eraser">
              Ver
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link className="iconBlue" to="/organigrama/eraser">
              Editar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              onClick={() => {
                setScreen("screen show");
              }}
              to="#"
            >
              Eliminar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              to="#"
              onClick={() => {
                setHistorial(false);
              }}
            >
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
            <Link className="iconBlue" to="/organigrama/eraser">
              Ver
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link className="iconBlue" to="/organigrama/eraser">
              Editar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Eliminar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              to="#"
              onClick={() => {
                setHistorial(false);
              }}
            >
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
            <Link className="iconBlue" to="/organigrama/eraser">
              Ver
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link className="iconBlue" to="/organigrama/eraser">
              Editar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
              Eliminar
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              to="#"
              onClick={() => {
                setHistorial(false);
              }}
            >
              Aplicar
            </Link>
          </Col>
        </Row>
      </Modal>
      <ModalMessage screen={screen}>
        <Row>
          <Col span={24}>
            <p style={{ textAlign: "center" }}>
              <img alt="ico" className="" src={Warning} />
            </p>
          </Col>
          <Col span={24}>
            <h3>¡Atención!</h3>
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
                setScreen("screen");
              }}
              className="secondary btn"
            >
              Cancelar
            </Button>
            <Button
              className="primary btn"
              onClick={() => {
                setScreen("screen");
                setHistorial(false);
              }}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      </ModalMessage>
    </>
  );
}

export default ModalErasersList;
