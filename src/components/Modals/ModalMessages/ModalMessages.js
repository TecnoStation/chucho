import React from "react";
import { Button, Col, Modal, Row } from "antd";
import Warning from "../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";

function ModalMessages({ message, setMessage, setHistorial }) {
  const [t, i18n] = useTranslation("global");
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
            <b>{t("organigram.organigram-page.modal-remove.attention")}</b>
          </h2>
        </Col>
        <Col span={24}>
          <h3>{t("organigram.organigram-page.modal-remove.text")}</h3>
        </Col>
        <Col span={24}>
          <h3>{t("organigram.organigram-page.modal-remove.text2")}</h3>
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
            {t("organigram.organigram-page.modal-remove.btn-cancel")}
          </Button>
          <Button
            className="primary btn"
            onClick={() => {
              setMessage(false);
              setHistorial(true);
            }}
          >
            {t("organigram.organigram-page.modal-remove.btn-remove")}
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalMessages;
