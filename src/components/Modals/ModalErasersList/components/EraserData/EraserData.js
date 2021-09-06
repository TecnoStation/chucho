import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ModalMessage from "../../../ModalMessage/ModalMessage";
import Warning from "../../../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function EraserData({ setHistorial, eraser }) {
  const [t, i18n] = useTranslation("global");
  const [screen, setScreen] = useState("screen");
  return (
    <>
      <Row
        className="dividerBottomFull"
        style={{
          textAlign: "center",
          marginTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <Col style={{ paddingLeft: "35px" }} span={5}>
          <span>{eraser.name}</span>
        </Col>
        <Col span={9}>
          <span>{eraser.date}</span>
        </Col>
        <Col span={2}>
          <Link
            className="iconBlue"
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.organigrammain")
            }
          >
            Ver
          </Link>
        </Col>
        <Col className="dividerLeft" span={2}>
          <Link
            className="iconBlue"
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.eraser")
            }
          >
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

export default EraserData;
