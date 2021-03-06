import React from "react";
import { Button, Col, Modal, Row } from "antd";
import { AiOutlineFileText } from "react-icons/ai";
import Good from "../../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";

function ModalDownLoad({ ModalDownload, setModalDownload }) {
  const [t, i18n] = useTranslation("global");
  return (
    <Modal
      className="middleModal"
      title={t("organigram.areas-and-positions.modal-file.download-file")}
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
          {t("organigram.areas-and-positions.modal-file.btn-cancel")}
        </Button>,
        <Button
          className="primary"
          onClick={() => {
            setModalDownload(false);
            const modal = Modal.info({
              title: "",
              className: "MessagesModal",
              centered: true,
              content: (
                <Row style={{ marginTop: "0px" }}>
                  <Col span={24}>
                    <p>
                      <img alt="ico" className="" src={Good} />
                    </p>
                  </Col>
                  <Col style={{ marginTop: "0px" }} span={24}>
                    <h2>
                      <b>
                        {t(
                          "organigram.areas-and-positions.modal-file.file-download"
                        )}
                      </b>
                    </h2>
                  </Col>
                  <Col span={24}>
                    <h3></h3>
                  </Col>
                  <Col span={24}>
                    <h3></h3>
                    <br />
                  </Col>
                  <Col span={24}>
                    <Button
                      onClick={() => {
                        modal.destroy();
                      }}
                      className="primary btn"
                    >
                      {t("organigram.password-modal.btn-done")}
                    </Button>
                  </Col>
                </Row>
              ),
              onOk() {},
            });
          }}
        >
          {t("organigram.areas-and-positions.modal-file.btn-download")}
        </Button>,
      ]}
    >
      <Row>
        <Col span={12}>
          <h3 className="secondaryText">
            <b> {t("organigram.areas-and-positions.modal-file.date")}</b>
          </h3>
        </Col>
        <Col span={12}>
          <h3 className="secondaryText">
            <b>
              {t("organigram.areas-and-positions.modal-file.date-creation")}
            </b>
          </h3>
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
          <span className="secondaryText">organigram2018.csv</span>
        </Col>
        <Col span={11}>
          <span className="secondaryText">12-julio-2021</span>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalDownLoad;
