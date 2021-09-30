import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
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
          <span className="secondaryText">{eraser.name}</span>
        </Col>
        <Col span={9}>
          <span className="secondaryText">{eraser.date}</span>
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
            {t("organigram.organigram-page.modal-history.watch")}
          </Link>
        </Col>
        <Col className="dividerLeft" span={2}>
          <Link
            className="iconBlue"
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.eraser")
            }
          >
            {t("organigram.organigram-page.modal-history.edit")}
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
            {t("organigram.organigram-page.modal-history.remove")}
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
            {t("organigram.organigram-page.modal-history.apply")}
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
