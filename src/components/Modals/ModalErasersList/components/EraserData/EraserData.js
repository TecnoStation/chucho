import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import ModalMessage from "../../../ModalMessage/ModalMessage";
import Warning from "../../../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ModalMessages from "../../../ModalMessages/ModalMessages";

function EraserData({ setHistorial, eraser }) {
  const [t, i18n] = useTranslation("global");
  const [message, setMessage] = useState(false);
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
              setHistorial(false);
              setMessage(true);
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
      <ModalMessages
        message={message}
        setMessage={setMessage}
        setHistorial={setHistorial}
      />
    </>
  );
}

export default EraserData;
