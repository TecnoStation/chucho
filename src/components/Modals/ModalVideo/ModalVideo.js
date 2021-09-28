import React from "react";
import { Button, Col, Modal, Row } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ModalVideo({ video, setVideo }) {
  const [t, i18n] = useTranslation("global");
  return (
    <Modal
      title={t("indicators.modal-indicators.indicators-key")}
      className="videoModal"
      centered={true}
      visible={video}
      onCancel={() => {
        setVideo(false);
      }}
      footer={false}
    >
      <Row>
        <Col
          style={{ background: "#333F48", width: "640px", height: "288px" }}
          span={24}
        ></Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col span={24}>
          <p>{t("indicators.modal-indicators.text")}</p>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "20px" }} span={24}>
          <Link
            to={
              "/" + t("routes.indicators") + "/" + t("path_indicator.indicator")
            }
          >
            <Button
              className="primary"
              onClick={() => {
                setVideo(false);
              }}
            >
              {t("indicators.modal-indicators.btn-continue")}
            </Button>
          </Link>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalVideo;
