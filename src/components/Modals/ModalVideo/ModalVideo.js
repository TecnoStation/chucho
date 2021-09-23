import React from "react";
import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";

function ModalVideo({ video, setVideo }) {
  const [t, i18n] = useTranslation("global");
  return (
    <Modal
      title={t("indicators.modal-indicators.indicators-key")}
      className="ColorModal"
      centered={true}
      visible={video}
      onCancel={() => {
        setVideo(false);
      }}
      footer={[
        <div
          style={{ position: "fixed", marginTop: "-5px", marginLeft: "70px" }}
        >
          <Button
            className="primary"
            onClick={() => {
              setVideo(false);
            }}
          >
            {t("organigram.organigram-page.modal-color.btn-apply")}
          </Button>
        </div>,
      ]}
    ></Modal>
  );
}

export default ModalVideo;
